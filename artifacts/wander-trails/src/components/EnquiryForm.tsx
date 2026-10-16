import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCreateTravelEnquiry } from '@workspace/api-client-react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import type { TripPackage } from '@/data/packages';

type EnquiryType = 'package' | 'custom' | 'contact';
type Props = { initialDestination?: string; trip?: TripPackage; type?: EnquiryType; compact?: boolean; allowTypeChoice?: boolean };

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name (at least 2 characters).').max(120),
  email: z.string().trim().email('Add a valid email address so we can reply.').max(254),
  phone: z.string().trim().min(7, 'Please add a phone number with at least 7 characters.').max(30),
  destination: z.string().trim().min(2, 'Please tell us where you would like to go.').max(120),
  travelDates: z.string().max(120),
  travellers: z.coerce.number().int().min(1, 'At least 1 traveller is required.').max(50, 'Traveller count cannot exceed 50.'),
  message: z.string().max(2000),
  enquiryType: z.enum(['package', 'custom', 'contact']),
});

type EnquiryValues = z.infer<typeof enquirySchema>;
type TextFieldName = 'name' | 'email' | 'phone' | 'travelDates';

export function EnquiryForm({ initialDestination = '', trip, type = trip ? 'package' : 'custom', compact = false, allowTypeChoice = false }: Props) {
  const mutation = useCreateTravelEnquiry();
  const [sent, setSent] = useState(false);
  const [localError, setLocalError] = useState('');
  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: '', email: '', phone: '', destination: initialDestination, travelDates: '', travellers: 2, message: '', enquiryType: type },
  });

  const submit = form.handleSubmit(values => {
    setSent(false);
    setLocalError('');
    mutation.reset();
    mutation.mutate({ data: {
      name: values.name.trim(), email: values.email.trim(), phone: values.phone.trim(),
      destination: values.destination.trim(), travelDates: values.travelDates || undefined,
      travellers: values.travellers, message: values.message.trim() || undefined, enquiryType: values.enquiryType,
    } }, {
      onSuccess: () => {
        setSent(true);
        form.reset({ name: '', email: '', phone: '', destination: initialDestination, travelDates: '', travellers: 2, message: '', enquiryType: values.enquiryType });
      },
      onError: () => setLocalError('We could not send your enquiry just now. Please try again in a moment.'),
    });
  });
  const input = (key: TextFieldName, label: string, props: { type?: string; placeholder?: string } = {}) => (
    <FormField key={key} control={form.control} name={key} render={({ field }) => (
      <FormItem><FormLabel className="field-label">{label}</FormLabel><FormControl><input className="field-control" type={props.type || 'text'} placeholder={props.placeholder} data-testid={`input-${key}`} {...field} /></FormControl><FormMessage /></FormItem>
    )} />
  );
  return <Form {...form}><form id="enquiry-form" className="enquiry-form" onSubmit={submit} noValidate>
    {sent && <div className="form-status form-success" role="status" aria-live="polite" data-testid="status-enquiry-success"><CheckCircle2 size={17} style={{ verticalAlign: 'middle', marginRight: 7 }} />Your enquiry has been received. Our team will review it and get back to you. This is not a booking confirmation.</div>}
    {(localError || mutation.isError) && <div className="form-status form-error" role="alert" data-testid="status-enquiry-error">{localError || 'There was a problem sending your enquiry. Please try again.'}</div>}
    <div className={compact ? '' : 'form-grid'}>
      {input('name', 'Your name', { placeholder: 'e.g. Aanya Rao' })}
      {input('email', 'Email address', { type: 'email', placeholder: 'you@example.com' })}
    </div>
    <div className="form-grid">
      {input('phone', 'Phone number', { type: 'tel', placeholder: '+91 98765 43210' })}
      {input('travelDates', 'Preferred travel dates', { placeholder: 'e.g. 12–17 Oct 2026' })}
    </div>
    <div className="form-grid">
      <FormField control={form.control} name="destination" render={({ field }) => (
        <FormItem><FormLabel className="field-label">Destination</FormLabel><FormControl><select className="field-control" data-testid="input-destination" {...field}>
          <option value="">Choose a destination</option>{['Kerala', 'Goa', 'Manali', 'Dubai', 'Bali', 'Thailand', 'I’m flexible'].map(destination => <option key={destination} value={destination}>{destination}</option>)}
        </select></FormControl><FormMessage /></FormItem>
      )} />
      <FormField control={form.control} name="travellers" render={({ field }) => (
        <FormItem><FormLabel className="field-label">Travellers</FormLabel><FormControl><input className="field-control" type="number" min="1" max="50" data-testid="input-travellers" {...field} /></FormControl><FormMessage /></FormItem>
      )} />
    </div>
    {allowTypeChoice && <FormField control={form.control} name="enquiryType" render={({ field }) => (
      <FormItem><FormLabel className="field-label">What can we help with?</FormLabel><FormControl><select className="field-control" data-testid="input-enquiry-type" {...field}><option value="contact">A general question</option><option value="custom">A custom itinerary</option></select></FormControl><FormMessage /></FormItem>
    )} />}
    <FormField control={form.control} name="message" render={({ field }) => (
      <FormItem><FormLabel className="field-label">{trip ? 'Anything we should know?' : 'A little about your trip'}</FormLabel><FormControl><textarea className="field-control" placeholder="The kind of trip you have in mind, or any questions for our team…" data-testid="input-message" {...field} /></FormControl><FormMessage /></FormItem>
    )} />
    <button className="button-primary" type="submit" disabled={mutation.isPending} data-testid="button-submit-enquiry" style={{ width: '100%' }}>
      {mutation.isPending ? 'Sending your enquiry…' : trip ? 'Send trip enquiry' : 'Send my enquiry'}{!mutation.isPending && <ArrowRight size={16} />}
    </button>
    <p className="form-note">This sends an enquiry request only. No payment is collected and your trip is not confirmed.</p>
  </form></Form>;
}
