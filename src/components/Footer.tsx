import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading text-4xl font-bold tracking-tight text-white">
                I2TC
              </span>
            </div>
            <p className="mt-2 font-heading text-xl font-semibold tracking-wide text-brand-bright">
              Technical &amp; Technology Consultancy
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Location
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Ras Al Khaimah
              <br />
              United Arab Emirates
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-white/40">
          &copy; 2026 I2TC Solutions FZ-LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
