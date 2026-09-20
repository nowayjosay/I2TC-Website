import { Link } from 'react-router-dom';
import { Code2, Globe, Lightbulb, ArrowRight, Layers, ClipboardList } from 'lucide-react';

const capabilities = [
  {
    icon: Lightbulb,
    title: 'Technology & Project Solutions',
    description:
      'Combining technology expertise with project-focused consultancy to help businesses plan and implement practical solutions.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Designing and developing practical software solutions and digital products.',
  },
  {
    icon: Globe,
    title: 'Digital Solutions',
    description:
      'Web and mobile products that simplify processes and improve everyday workflows.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management Consultancy',
    description:
      'Providing project management consultancy to support structured planning, coordination and delivery.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        {/* Geometric accent lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 left-0 w-80 h-px bg-gradient-to-r from-brand/20 to-transparent" />
          <div className="absolute top-1/2 right-0 w-px h-40 bg-gradient-to-b from-brand/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          {/* Stacked layers icon - right side */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:flex pointer-events-none" aria-hidden="true">
            <Layers size={320} strokeWidth={0.75} className="text-brand/15" />
          </div>

          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Technology built around
              <br />
              <span className="text-brand-bright">real-world needs.</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
              I2TC Solutions FZ-LLC is a UAE-based technology company focused on
              developing practical digital products and technology solutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
              >
                Our Products
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-off">
                  <Icon size={24} className="text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-navy-text min-h-[3.5rem] flex items-start justify-center">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-surface-off py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black mb-4">
                About
              </p>
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-brand leading-[1.05]">
                I2TC
              </h2>
              <p className="mt-6 font-heading text-xl sm:text-2xl font-semibold text-navy-text leading-snug">
                A technology company with a practical approach.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted">
                I2TC Solutions FZ-LLC is established in Ras Al Khaimah, United Arab
                Emirates. We focus on developing practical technology and digital
                products that address genuine needs and deliver measurable value.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[5/4]">
              <img
                src="https://images.pexels.com/photos/8319486/pexels-photo-8319486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Aerial view of a UAE city skyline with a national flag at sunset"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
