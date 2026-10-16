import { useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Search, Sparkles, UsersRound, HeartHandshake, Compass, Star } from 'lucide-react';
import { destinations, formatINR, packages } from '@/data/packages';
import { PageMeta } from '@/components/PageMeta';

const destinationImages: Record<string, string> = {
  Kerala: '/kerala-hero.jpg', Goa: '/goa-trip.jpg', Manali: '/manali-trip.jpg',
  Dubai: '/bali-trip.jpg', Bali: '/bali-trip.jpg', Thailand: '/goa-trip.jpg',
};

export default function Home() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travellers, setTravellers] = useState('2');
  const findTrips = () => {
    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (dates) params.set('dates', dates);
    if (travellers) params.set('travellers', travellers);
    navigate(`/packages${params.size ? `?${params.toString()}` : ''}`);
  };
  return <>
    <main>
      <PageMeta title="Wander Trails | Your Next Adventure, Planned" description="Discover thoughtful Kerala, Goa, Manali, Dubai, Bali and Thailand trips. Browse sample INR packages and send a no-obligation enquiry." />
      <section className="hero">
        <div className="container-wide"><div className="hero-copy">
          <span className="eyebrow" style={{ color: '#f2ad78' }}>For the good days you’ll talk about</span>
          <h1>Your Next Adventure, Planned</h1>
          <p>Thoughtful trips for couples, families and your favourite people. You bring the daydream — we’ll help shape the journey.</p>
          <Link className="button-primary" to="/packages" style={{ marginTop: 16, textDecoration: 'none' }}>Find your next trip <ArrowRight size={17} /></Link>
        </div></div>
      </section>

      <div className="container-wide">
        <div className="search-panel" role="search" aria-label="Find a trip">
          <label className="wide-search"><span className="field-label"><MapPin size={12} style={{ verticalAlign: 'middle' }} /> Where to?</span>
            <select className="field-control" value={destination} onChange={e => setDestination(e.target.value)} data-testid="search-destination"><option value="">Any destination</option>{destinations.map(place => <option key={place}>{place}</option>)}</select>
          </label>
          <label><span className="field-label">When</span><input className="field-control" type="month" value={dates} onChange={e => setDates(e.target.value)} aria-label="Preferred travel month" /></label>
          <label><span className="field-label">Travellers</span><select className="field-control" value={travellers} onChange={e => setTravellers(e.target.value)}><option value="1">1 traveller</option><option value="2">2 travellers</option><option value="3">3 travellers</option><option value="4">4 travellers</option><option value="5">5+ travellers</option></select></label>
          <button type="button" className="button-secondary" onClick={findTrips} data-testid="button-search-trips"><Search size={17} /> Find trips</button>
        </div>
      </div>

      <section className="section">
        <div className="container-wide">
          <div className="section-head"><div><span className="eyebrow">A few good places to start</span><h2>Trips worth looking forward to.</h2></div><p>Small-group warmth, a little breathing room and the details taken care of. Here are a few favourites to get the ideas flowing.</p></div>
          <div className="trip-grid">
            {packages.slice(0, 3).map(trip => <TripCard key={trip.slug} trip={trip} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 30 }}><Link to="/packages" className="button-outline" style={{ textDecoration: 'none' }}>Browse all trips <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section-tight" style={{ background: '#eef3e9' }}>
        <div className="container-wide">
          <div className="section-head"><div><span className="eyebrow">Six lovely directions</span><h2>Where could you wake up?</h2></div><p>From a backwater morning to a mountain view, choose a feeling and we’ll help with the rest.</p></div>
          <div className="destination-grid">
            {destinations.map((place, index) => <Link key={place} to={`/packages?destination=${encodeURIComponent(place)}`} className="destination-tile" style={{ backgroundImage: `url('${destinationImages[place]}')` }} data-testid={`link-destination-${place.toLowerCase()}`}>
              <strong>{place}</strong><small>{['Green & unhurried', 'Sunlit coast', 'Mountain air', 'City & desert', 'Island rhythm', 'Tropical ease'][index]}</small>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide why-grid">
          <div className="why-copy"><span className="eyebrow">The Wander Trails way</span><h2>Travel should feel like a deep breath.</h2><p style={{ color: '#5d766f', lineHeight: 1.7 }}>A real person to talk to. A plan made for your people. No rushed checklists or one-size-fits-all itineraries.</p><Link to="/contact" className="button-secondary" style={{ textDecoration: 'none', marginTop: 10 }}>Tell us what you love <ArrowRight size={16} /></Link></div>
          <div className="reason-list">
            <Reason icon={<HeartHandshake size={20} />} title="People-first planning" body="We listen before we suggest. Every trip starts with what matters to you." />
            <Reason icon={<Compass size={20} />} title="Local know-how" body="Thoughtful stays, trusted local partners and room for happy detours." />
            <Reason icon={<UsersRound size={20} />} title="Made for your crew" body="Couples, grandparents, little explorers or a group of old friends." />
            <Reason icon={<Sparkles size={20} />} title="Clear from the start" body="Sample prices are labelled, inclusions are clear and nothing is confirmed until discussed." />
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container-wide">
          <div className="section-head"><div><span className="eyebrow">Kind words from our sample travellers</span><h2>Good trips stay with you.</h2></div><p>Sample testimonials for this demo website. Replace with genuine customer feedback before publishing.</p></div>
          <div className="quote-grid">
            <Quote featured quote="“The whole trip felt like it had been made just for us. Our kids still talk about the houseboat breakfast.”" by="Meera & Arun · Kerala family trip" />
            <Quote quote="“Easy, warm and full of little moments we would never have found on our own.”" by="Rhea & Dev · Goa getaway" />
            <Quote quote="“Every detail was clear, and there was still plenty of space to make the days our own.”" by="The Iyer crew · Bali" />
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container-wide" style={{ background: '#f3d6bb', borderRadius: 24, padding: '38px 42px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div><span className="eyebrow">Your kind of trip</span><h2 style={{ fontSize: 35, color: '#254844', margin: '8px 0' }}>Let’s make a little room for wonder.</h2><p style={{ color: '#5f736c', margin: 0 }}>Tell us who’s coming and what you’re dreaming of.</p></div>
          <Link to="/contact" className="button-primary" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>Plan a custom trip <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  </>;
}

export function TripCard({ trip }: { trip: typeof packages[number] }) {
  return <article className="trip-card" data-testid={`card-trip-${trip.slug}`}>
    <Link to={`/packages/${trip.slug}`} className="trip-card-link" data-testid={`link-trip-${trip.slug}`}>
      <div className="trip-photo"><img src={trip.image} alt={trip.imageAlt} /><span className="trip-tag">{trip.tag}</span></div>
      <div className="trip-body">
        <span className="trip-location"><MapPin size={13} /> {trip.destination}</span>
        <h3>{trip.title}</h3><p style={{ margin: 0, color: '#70817b', fontSize: 13, lineHeight: 1.5 }}>{trip.description}</p>
        <div className="trip-meta"><span>{trip.duration}</span><span className="trip-price">From {formatINR(trip.price)} <small style={{ fontWeight: 500 }}>sample*</small></span></div>
        <div className="trip-card-footer">
          <span className="trip-rating"><Star size={14} fill="currentColor" /> {trip.rating.toFixed(1)} <small>sample rating</small></span>
          <span className="card-detail-link">View details <ArrowRight size={14} /></span>
        </div>
      </div>
    </Link>
  </article>;
}

function Reason({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return <div className="reason"><span style={{ display: 'inline-grid', placeItems: 'center', width: 36, height: 36, borderRadius: 11, background: '#fbe7d6', color: '#bd622c', marginBottom: 13 }}>{icon}</span><b>{title}</b><p>{body}</p></div>;
}
function Quote({ quote, by, featured = false }: { quote: string; by: string; featured?: boolean }) {
  return <article className={`quote-card${featured ? ' featured' : ''}`}><div><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>{quote}</blockquote></div><span className="quote-by">{by}</span></article>;
}
