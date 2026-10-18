import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { packages, destinations } from '@/data/packages';
import { TripCard } from '@/pages/Home';
import { PageMeta } from '@/components/PageMeta';

export default function Packages() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('Any');
  const [duration, setDuration] = useState('Any');
  const [sort, setSort] = useState('featured');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const destination = params.get('destination') || '';
  const visible = useMemo(() => {
    const result = packages.filter(trip => {
      const matchesDestination = !destination || trip.destination.toLowerCase() === destination.toLowerCase();
      const matchesQuery = !query || `${trip.title} ${trip.destination} ${trip.description}`.toLowerCase().includes(query.toLowerCase());
      const matchesRegion = region === 'Any' || trip.region === region;
      const matchesDuration = duration === 'Any' || (duration === 'Short break' ? trip.days <= 4 : trip.days >= 5);
      const matchesMinimum = minPrice === '' || trip.price >= Number(minPrice);
      const matchesMaximum = maxPrice === '' || trip.price <= Number(maxPrice);
      return matchesDestination && matchesQuery && matchesRegion && matchesDuration && matchesMinimum && matchesMaximum;
    });
    return result.sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : packages.indexOf(a) - packages.indexOf(b));
  }, [destination, duration, maxPrice, minPrice, query, region, sort]);
  const chooseDestination = (value: string) => { const next = new URLSearchParams(params); value ? next.set('destination', value) : next.delete('destination'); setParams(next); };
  const clearFilters = () => { setQuery(''); setRegion('Any'); setDuration('Any'); setSort('featured'); setMinPrice(''); setMaxPrice(''); setParams({}); };
  return <main>
    <PageMeta title="Travel Packages | Opulent Escapes" description="Compare holiday packages across Kerala, Goa, Manali, Dubai, Bali and Thailand. Filter by destination, trip length and indicative INR price." />
    <section className="page-hero"><div className="container-wide"><span className="eyebrow">A good place to get going</span><h1 className="page-title">Find your kind of elsewhere.</h1><p>Browse thoughtful itineraries for sunny coastlines, green hills and everywhere in between. Prices are indicative estimates in INR and final costs depend on your travel details.</p></div></section>
    <section className="section-tight"><div className="container-wide catalog-layout">
      <aside className="filter-panel" aria-label="Trip filters">
        <h3><SlidersHorizontal size={17} style={{ verticalAlign: 'middle', marginRight: 7 }} />Filter trips</h3>
        <div className="filter-group"><label htmlFor="filter-destination">Destination</label><select id="filter-destination" className="field-control" value={destination} onChange={e => chooseDestination(e.target.value)} data-testid="filter-destination"><option value="">All places</option>{destinations.map(place => <option key={place}>{place}</option>)}</select></div>
        <div className="filter-group"><label>Region</label>{['Any', 'India', 'International'].map(item => <label className="check-option" key={item}><input type="radio" name="region" checked={region === item} onChange={() => setRegion(item)} />{item === 'Any' ? 'Anywhere' : item}</label>)}</div>
        <div className="filter-group"><label htmlFor="filter-duration">Trip length</label><select id="filter-duration" className="field-control" value={duration} onChange={e => setDuration(e.target.value)} data-testid="filter-duration"><option>Any</option><option>Short break</option><option>5+ days</option></select></div>
        <div className="filter-group"><label>Price range (INR)</label>
          <div className="price-filter">
            <label htmlFor="filter-min-price">Minimum</label><input id="filter-min-price" className="field-control" type="number" min="0" step="1000" placeholder="₹0" value={minPrice} onChange={e => setMinPrice(e.target.value)} data-testid="filter-min-price" />
            <label htmlFor="filter-max-price">Maximum</label><input id="filter-max-price" className="field-control" type="number" min="0" step="1000" placeholder="No limit" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} data-testid="filter-max-price" />
          </div>
        </div>
        <button className="button-outline" type="button" onClick={clearFilters} style={{ width: '100%', minHeight: 42 }}>Clear filters</button>
      </aside>
      <div>
        <div className="catalog-head"><div><p><strong>{visible.length}</strong> thoughtful trips to explore</p></div><div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <input className="field-control" aria-label="Search trips" placeholder="Search trips…" value={query} onChange={e => setQuery(e.target.value)} style={{ width: 190 }} data-testid="input-search-packages" />
          <select className="field-control" aria-label="Sort trips" value={sort} onChange={e => setSort(e.target.value)} style={{ width: 170 }}><option value="featured">Featured first</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select>
        </div></div>
        {visible.length ? <div className="trip-grid catalog-grid">{visible.map(trip => <TripCard key={trip.slug} trip={trip} />)}</div> : <div className="empty-state"><span className="eyebrow">No trips found</span><h3>Try a different little direction.</h3><p>Clear a filter or search another destination.</p><button className="button-secondary" onClick={clearFilters}>Show all trips <ArrowRight size={15} /></button></div>}
        <p className="form-note" style={{ marginTop: 22 }}>All listed amounts are indicative per-person estimates in INR and may change with dates, group size and availability. An enquiry does not confirm a trip or collect payment.</p>
      </div>
    </div></section>
    <section className="section-tight" style={{ background: '#edf3e9' }}><div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}><div><span className="eyebrow">Not seeing your exact trip?</span></div><Link to="/contact" className="button-primary" style={{ textDecoration: 'none' }}>Plan a custom itinerary <ArrowRight size={16} /></Link></div></section>
  </main>;
}
