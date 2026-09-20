import { Mail, MapPin, Building2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-surface-off py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-text leading-tight">
              Get in <span className="text-brand">touch</span> with I2TC Solutions.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted">
              For business, product and general enquiries, contact us using the
              details below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl">
            {/* Company */}
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-off mx-auto">
                <Building2 size={24} className="text-brand" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold text-navy-text">
                Company
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                I2TC Solutions FZ-LLC
              </p>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-off mx-auto">
                <MapPin size={24} className="text-brand" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold text-navy-text">
                Location
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Ras Al Khaimah
                <br />
                United Arab Emirates
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-off mx-auto">
                <Mail size={24} className="text-brand" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold text-navy-text">
                Email
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                contact@i2tcsolutions.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
