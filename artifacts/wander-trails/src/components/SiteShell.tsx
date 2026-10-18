import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function SiteShell() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/packages', label: 'Find a trip' },
    { to: '/contact', label: 'Plan with us' },
  ];
  return (
    <>
      <div className="top-strip"><div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
        <span>Thoughtful little trips. Big happy memories.</span>
      </div></div>
      <header className="site-header">
        <div className="container-wide" style={{ minHeight: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" className="brand" aria-label="Opulent Escapes home" onClick={() => setOpen(false)} style={{ display: 'flex', gap: 10, alignItems: 'center', textDecoration: 'none' }}>
            <span className="brand-mark">oe</span><span>Opulent Escapes<small style={{ display: 'block', font: '600 9px var(--app-font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', marginTop: 4 }}>Travel, thoughtfully</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
            {navItems.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{item.label}</NavLink>)}
            <Link to="/contact" className="button-primary" style={{ minHeight: 42, textDecoration: 'none' }}>Let’s plan <ArrowUpRight size={16} /></Link>
          </nav>
          <button className="mobile-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} data-testid="button-mobile-menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {navItems.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
          <Link to="/contact" className="button-primary" onClick={() => setOpen(false)} style={{ textDecoration: 'none', marginTop: 8 }}>Let’s plan <ArrowUpRight size={16} /></Link>
        </nav>}
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export function Footer() {
  return <footer className="footer">
    <div className="container-wide">
      <div className="footer-grid">
        <div><Link to="/" className="brand" style={{ display: 'flex', gap: 10, alignItems: 'center', textDecoration: 'none' }}><span className="brand-mark">oe</span><span>Opulent Escapes</span></Link><p style={{ maxWidth: 260, marginTop: 20 }}>Easy-going journeys for people who would rather make memories than manage logistics.</p></div>
        <div><h4>Explore</h4><Link to="/packages">All trips</Link><Link to="/packages?destination=Kerala">Kerala</Link><Link to="/packages?destination=Goa">Goa</Link></div>
        <div><h4>We can help</h4><Link to="/contact">Custom itinerary</Link><Link to="/contact">Ask a question</Link><a href="https://wa.me/919876543210?text=Hello%20Opulent%20Escapes%2C%20I%27d%20love%20to%20plan%20a%20trip." target="_blank" rel="noreferrer">WhatsApp us</a></div>
        <div><h4>Contact details</h4><p>info@opulentescapes.com<br />+91 98765 43210<br />Mumbai, Maharashtra, India</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Opulent Escapes</span></div>
    </div>
  </footer>;
}
