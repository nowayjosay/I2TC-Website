import { ArrowUpRight, Smartphone } from 'lucide-react';

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 left-0 w-80 h-px bg-gradient-to-r from-brand/20 to-transparent" />
          <div className="absolute top-1/2 right-0 w-px h-40 bg-gradient-to-b from-brand/20 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.2em] text-brand mb-8">
              Our Products
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Practical tools built for real-world work.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              We build focused software products that solve specific problems for
              the people who use them.
            </p>
          </div>
        </div>
      </section>

      {/* Cledger showcase */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Left column — product info */}
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                Cledger
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-text">
                Cledger
              </h2>
              <p className="mt-3 text-lg font-medium text-navy-text">
                Mobile finance and work-day tracking for offshore and rotational
                professionals.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Cledger is an offline-first mobile application for organizing work
                days, earnings, expenses and payment records.
              </p>
              <a
                href="https://cledgerapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
              >
                Visit Cledger Website
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Right column — Product information panel */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-surface-light p-8 sm:p-10">
                <div className="flex flex-col items-center text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand">
                    <Smartphone size={22} strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Cledger Mobile App
                  </p>
                </div>

                <dl className="mt-8 flex flex-col gap-6">
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted">
                      Platforms
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-navy-text">
                      iOS &middot; Android
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted">
                      Availability
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-navy-text">
                      App Store &middot; Google Play
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted">
                      Designed for
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-navy-text">
                      Offshore &amp; rotational professionals
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted">
                      Product Website
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="https://cledgerapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-bright"
                      >
                        cledgerapp.com
                        <ArrowUpRight size={14} />
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
