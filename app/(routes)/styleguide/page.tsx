export default function StyleguidePage() {
  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-brand-forest">Styleguide</h1>
        <p className="mt-2 text-gray-700">
          Live design tokens & UI patterns for HotSpringMaps. Use this page to verify
          colors, typography, buttons, cards, inputs, links, and spacing.
        </p>

        {/* Colors */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Colors</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Swatch name="brand.forest" className="bg-brand-forest" hex="#2E5538" />
            <Swatch name="brand.aqua"   className="bg-brand-aqua"   hex="#4CBEBE" />
            <Swatch name="brand.stone"  className="bg-brand-stone border" hex="#F5F5F0" />
            <Swatch name="brand.sand"   className="bg-brand-sand border"  hex="#E9E6DD" />
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
            <div className="text-gray-700">
              <p><strong>List example:</strong></p>
              <ul className="list-disc pl-6">
                <li>Readable sizes & line-height</li>
                <li>Consistent heading hierarchy (h1 → h3)</li>
                <li>Accessible color contrast</li>
              </ul>
            </div>
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
          <p className="mt-3 text-sm text-gray-600">
            Buttons include <code>focus-visible</code> rings for keyboard users and a loading state via <code>[data-loading="true"]</code>.
          </p>
        </div>

        {/* Links */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Links</h2>
          <p className="mt-2">
            Default link with utility:{" "}
            <a className="link" href="/terms">Terms</a>
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Links use underline decoration, brand hover color, and focus-visible rings.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-gray-700">
                Use <code>.card</code> for consistent padding, subtle border, and soft shadow.
              </p>
              <button className="mt-4 btn btn-secondary">Action</button>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Another Card</h3>
              <p className="mt-2 text-gray-700">
                Cards are great for tiles, result items, and spring info blocks.
              </p>
            </div>
          </div>
        </div>

        {/* Inputs & Labels (verification) */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Inputs</h2>

          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {/* Email input */}
            <div className="max-w-md">
              <label className="label" htmlFor="sg-email">Email</label>
              <input
                id="sg-email"
                type="email"
                className="input"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <p className="form-hint">We’ll never share your email.</p>
            </div>

            {/* Select + error */}
            <div className="max-w-md">
              <label className="label" htmlFor="sg-region">Region</label>
              <select id="sg-region" className="input">
                <option value="">Select a region</option>
                <option>Pacific Northwest</option>
                <option>Rockies</option>
                <option>New Zealand</option>
                <option>Patagonia</option>
              </select>
              <p className="form-error">Please choose a region.</p>
            </div>

            {/* Textarea */}
            <div className="sm:col-span-2 max-w-2xl">
              <label className="label" htmlFor="sg-notes">Notes</label>
              <textarea
                id="sg-notes"
                className="input"
                rows={4}
                placeholder="Anything else we should know?"
              />
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="btn btn-primary">Submit</button>
            <button className="btn btn-ghost">Cancel</button>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Inputs show aqua focus rings and forest focus border when focused. Labels are associated via <code>htmlFor</code>/<code>id</code>.
          </p>
        </div>

        {/* Sections & Spacing */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Sections & Spacing</h2>
          <p className="mt-2 text-gray-700">
            Sections use <code>.section</code>: <code>py-10 md:py-16</code>. Containers use{' '}
            <code>.container</code>: <code>max-w-6xl mx-auto px-4</code>.
          </p>
          <div className="mt-4 space-y-6">
            <div className="card">Section block A</div>
            <div className="card">Section block B</div>
            <div className="card">Section block C</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Simple color swatch subcomponent (server safe) */
function Swatch({
  name,
  className,
  hex
}: {
  name: string;
  className: string;
  hex?: string;
}) {
  return (
    <div className="card">
      <div className={`h-14 w-full rounded-lg ${className}`} />
      <p className="mt-2 text-sm text-gray-700">
        {name}{hex ? ` — ${hex}` : ''}
      </p>
    </div>
  )
}
