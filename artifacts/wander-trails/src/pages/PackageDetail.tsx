import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, CircleHelp, Clock3, MapPin, Minus } from 'lucide-react';
import { formatINR, packages } from '@/data/packages';
import { EnquiryForm } from '@/components/EnquiryForm';
import { PageMeta } from '@/components/PageMeta';

export default function PackageDetail() {
  const { slug } = useParams();
  const trip = packages.find(item => item.slug === slug);
  if (!trip) return <main className="section"><div className="container-wide empty-state"><h1>That trip has wandered off.</h1><p>Try the full trip collection instead.</p><Link to="/packages" className="button-secondary" style={{ textDecoration: 'none' }}>Browse trips <ArrowRight size={15} /></Link></div></main>;
  return <main>
    <PageMeta title={`${trip.title} | Wander Trails`} description={`${trip.description} View the sample itinerary, inclusions and exclusions, and send a no-obligation enquiry.`} />
    <section className="detail-hero"><img className="detail-hero-photo" src={trip.image} alt={trip.imageAlt} /><div className="container-wide detail-hero-content"><Link to="/packages" style={{ color: '#e2efe8', textDecoration: 'none', fontSize: 13 }}><ArrowLeft size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} /> All trips</Link><div className="eyebrow" style={{ color: '#f5b07b', marginTop: 25 }}>{trip.tag} · {trip.destination}</div><h1>{trip.title}</h1><span><Clock3 size={15} style={{ verticalAlign: 'middle', marginRight: 6 }} />{trip.duration}</span></div></section>
    <section className="section-tight"><div className="container-wide detail-layout">
      <article className="detail-content">
        <span className="eyebrow">The feeling of this trip</span><h2 style={{ marginTop: 8 }}>A little more time for the good stuff.</h2><p>{trip.description} This sample itinerary is a starting point, not a confirmed programme — tell us what your group needs and we’ll talk it through.</p>
        <h2>Little moments to look forward to</h2><ul className="highlights">{trip.highlights.map(item => <li key={item}><Check size={15} style={{ verticalAlign: 'middle', marginRight: 8, color: '#167a73' }} />{item}</li>)}</ul>
        <h2>A sample day-by-day</h2><div>{trip.itinerary.map(day => <div className="itinerary-item" key={day.day}><strong>{day.day}</strong><p>{day.detail}</p></div>)}</div>
        <div className="form-grid" style={{ marginTop: 30 }}>
          <div><h2 style={{ fontSize: 25, marginTop: 8 }}>Included in the estimate</h2><ul style={{ paddingLeft: 19 }}>{trip.inclusions.map(item => <li key={item}><Check size={14} style={{ color: '#167a73', marginRight: 7, verticalAlign: 'middle' }} />{item}</li>)}</ul></div>
          <div><h2 style={{ fontSize: 25, marginTop: 8 }}>Not included</h2><ul style={{ paddingLeft: 19 }}>{trip.exclusions.map(item => <li key={item}><Minus size={14} style={{ color: '#d7743a', marginRight: 7, verticalAlign: 'middle' }} />{item}</li>)}</ul></div>
        </div>
        <h2>Good to know</h2><div className="faq">
          <details><summary><CircleHelp size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />Is this price final?</summary><p>No. The amount is a sample INR estimate per person. We’ll discuss actual dates, group size, availability and final inclusions with you.</p></details>
          <details><summary><CircleHelp size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />Does sending an enquiry book this trip?</summary><p>No. Your form sends an enquiry request for our team to review. It does not confirm a booking or collect payment.</p></details>
          <details><summary><CircleHelp size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />Can we change the itinerary?</summary><p>Absolutely. Tell us what works for your group and our team can discuss a custom version.</p></details>
        </div>
      </article>
      <aside className="enquiry-card" id="enquiry"><div className="trip-location"><MapPin size={13} /> {trip.destination} · {trip.duration}</div><h3>Make this trip yours.</h3><div className="price-large">From {formatINR(trip.price)} <small style={{ fontSize: 11, fontWeight: 600 }}>sample*</small></div><p className="price-note">Sample per-person estimate in INR. Not a quote or confirmed booking.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '16px 0 8px' }}>
          <a href="#enquiry-form" className="button-secondary" style={{ textDecoration: 'none', minHeight: 43, padding: '0 12px', fontSize: 12 }}>Enquire Now</a>
          <a href="#enquiry-form" className="button-primary" style={{ textDecoration: 'none', minHeight: 43, padding: '0 12px', fontSize: 12 }}>Book Now</a>
        </div>
        <p className="form-note">Book Now starts an enquiry only. No booking is confirmed and no payment is taken.</p>
        <div style={{ borderTop: '1px solid #eee8df', margin: '17px 0' }} /><EnquiryForm trip={trip} initialDestination={trip.destination} /></aside>
    </div></section>
  </main>;
}
