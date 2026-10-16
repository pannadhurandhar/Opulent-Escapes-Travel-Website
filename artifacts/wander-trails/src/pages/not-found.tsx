import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { PageMeta } from '@/components/PageMeta';

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: '55vh', display: 'grid', placeItems: 'center' }}>
      <PageMeta title="Page Not Found | Wander Trails" description="This page could not be found. Return to Wander Trails to discover holiday packages." />
      <div className="empty-state" style={{ maxWidth: 540, padding: 48 }}>
        <span style={{ display: 'inline-grid', placeItems: 'center', width: 54, height: 54, borderRadius: '50%', background: '#e6f0e9', color: '#167a73' }}><Compass size={25} /></span>
        <div className="eyebrow" style={{ marginTop: 18 }}>A wrong turn</div>
        <h1 className="display" style={{ fontSize: 38, margin: '8px 0' }}>This trail ends here.</h1>
        <p>The page you’re looking for may have moved. Let’s find you another way.</p>
        <Link to="/" className="button-secondary" style={{ textDecoration: 'none', marginTop: 12 }}><ArrowLeft size={16} /> Back to the start</Link>
      </div>
    </main>
  );
}
