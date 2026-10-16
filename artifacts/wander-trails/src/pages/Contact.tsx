import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { EnquiryForm } from '@/components/EnquiryForm';
import { PageMeta } from '@/components/PageMeta';

export default function Contact() {
  const [params] = useSearchParams();
  const destination = params.get('destination') || '';
  return <main>
    <PageMeta title="Plan a Trip | Contact Wander Trails" description="Tell Wander Trails about your dates, destination and travellers. Send a custom itinerary or general travel enquiry; no booking or payment is confirmed." />
    <section className="page-hero"><div className="container-wide"><span className="eyebrow">A real person, a real conversation</span><h1 className="page-title">Let’s plan something good.</h1><p>Tell us about your people, your dates and the places calling your name. We’ll review your enquiry and get in touch to talk through the next steps.</p></div></section>
    <section className="section-tight"><div className="container-wide contact-grid">
      <aside className="contact-aside"><span className="eyebrow" style={{ color: '#f7b582' }}>Here to help</span><h2>Good trips begin with a hello.</h2><p>Whether you’ve got a destination in mind or just a feeling, share it with us. This demo agency’s contact details below are placeholders.</p>
        <div className="contact-detail"><Mail size={16} style={{ verticalAlign: 'middle', marginRight: 8 }} />hello@wandertrails.example<small>Sample email — replace before publishing</small></div>
        <div className="contact-detail"><Phone size={16} style={{ verticalAlign: 'middle', marginRight: 8 }} />+91 98765 43210<small>Sample phone number — replace before publishing</small></div>
        <div className="contact-detail"><MapPin size={16} style={{ verticalAlign: 'middle', marginRight: 8 }} />Kochi, Kerala, India<small>Sample location — replace before publishing</small></div>
        <a href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello Wander Trails, I would like to plan a trip${destination ? ` to ${destination}` : ''}.`)}`} target="_blank" rel="noreferrer" className="button-primary" style={{ marginTop: 24, textDecoration: 'none', background: '#f5a16c' }}><MessageCircle size={17} /> WhatsApp (demo number)</a>
        <p style={{ fontSize: 11, marginTop: 10 }}>The WhatsApp number is a demo value. Replace before publishing.</p>
      </aside>
      <div style={{ background: '#fff', border: '1px solid #ece7dc', borderRadius: 22, padding: '30px clamp(20px,4vw,42px)' }}>
        <span className="eyebrow">Your trip, your way</span><h2 style={{ font: '600 32px var(--app-font-serif)', color: '#193b39', margin: '8px 0 22px' }}>Tell us a little more.</h2>
        <EnquiryForm initialDestination={destination} type="contact" allowTypeChoice />
      </div>
    </div></section>
    <section className="section-tight" style={{ background: '#edf3e9' }}><div className="container-wide" style={{ maxWidth: 770, textAlign: 'center' }}><span className="eyebrow">What happens next?</span><h2 style={{ font: '600 35px var(--app-font-serif)', color: '#193b39', margin: '8px 0' }}>A conversation, not a checkout.</h2><p style={{ color: '#657b75', lineHeight: 1.7 }}>Your enquiry is stored for our team to review. We’ll use the details you share to discuss your trip; sending the form does not reserve dates, confirm a booking or collect payment.</p></div></section>
  </main>;
}
