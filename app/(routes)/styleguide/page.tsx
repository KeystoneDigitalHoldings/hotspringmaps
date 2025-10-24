import ResponsiveIframe from '@/components/ResponsiveIframe';

export default function StyleguidePage() {
  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-brand-forest">Styleguide</h1>
        <p className="mt-2 text-gray-700">
          Live design tokens & UI patterns for HotSpringMaps. Use this page to verify
          colors, typography, buttons, cards, inputs, links, spacing, and responsive iframes.
        </p>

        {/* Colors */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Colors</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Swatch name="brand.forest" className="bg-brand-forest" hex="#2E5538" />
            <Swatch name="brand.aqua" className="bg-brand-aqua" hex="#36A8A8" />
            <Swatch name="brand.stone" className="bg-brand-stone border" hex="#F5F5F0" />
            <Swatch name="brand.sand" className="bg-brand-sand border" hex="#E9E6DD" />
          </div>
        </div>

        {/* Typography */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Typography</h2>
          <div className="mt-4 space-y-3">
            <h1 className="text-3xl font-semibold">H1 — Big Heading</h1>
            <h2 className="text-2xl font-semibold">H2 — Section Title</h2>
            <h3 className="text-xl font-semibold">H3 — Subsection</h3>
            <p className="text-gray-700">
              Body — DM Sans with comfortable line-height. Use <code>text-gray-800</code> on
              <code> bg-brand-stone</code> backgrounds. This paragraph demonstrates default body text.
            </p>
            <p className="text-sm text-gray-600">Small — for captions & meta.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-primary" disabled>Disabled</button>
            <button className="btn btn-primary" data-loading="true">Saving</button>
          </div>
        </div>

        {/* Inputs */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Inputs</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="max-w-md">
              <label className="label" htmlFor="sg-email">Email</label>
              <input id="sg-email" name="email" type="email" className="input" placeholder="you@example.com" />
              <p className="form-hint">We’ll never share your email.</p>
            </div>

            <div className="max-w-md">
              <label className="label" htmlFor="sg-region">Region</label>
              <select id="sg-region" name="region" className="input">
                <option value="">Select a region</option>
                <option>Pacific Northwest</option>
                <option>Rockies</option>
                <option>New Zealand</option>
                <option>Patagonia</option>
              </select>
              <p className="form-error">Please choose a region.</p>
            </div>
          </div>
        </div>

        {/* Responsive Iframes */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Responsive Iframes</h2>

          <div className="mt-4 card">
            <h3 className="text-lg font-semibold">YouTube (16:9)</h3>
            <ResponsiveIframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo video"
              ratio="16/9"
            />
          </div>

          <div className="mt-6 card">
            <h3 className="text-lg font-semibold">Map Embed (4:3)</h3>
            <ResponsiveIframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.52,37.70,-122.35,37.83&layer=mapnik"
              title="Map embed"
              ratio="4/3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Subcomponent for color swatches */
function Swatch({
  name,
  className,
  hex,
}: {
  name: string;
  className: string;
  hex?: string;
}) {
  return (
    <div className="card">
      <div className={`h-14 w-full rounded-lg ${className}`} />
      <p className="mt-2 text-sm text-gray-700">
        {name}
        {hex ? ` — ${hex}` : ''}
      </p>
    </div>
  );
}
