export default function StyleguidePage() {
  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-brand-forest">Styleguide</h1>
        <p className="mt-2 text-gray-700">
          Live design tokens & UI patterns for HotSpringMaps. Use this page to verify
          colors, typography, buttons, cards, inputs, and spacing.
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
              <code> bg-brand-stone</code> backgrounds. This paragraph demonstrates default
              body text sizing and color.
            </p>
            <p className="text-sm text-gray-600">Small — for captions & meta.</p>
            <div className="text-gray-700">
              <p>
                <strong>List example:</strong>
              </p>
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
            <button className="btn btn-primary" disabled>
              Disabled
            </button>
            <a href="#" className="btn btn-secondary">Link as Button</a>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Buttons include <code>focus-visible</code> rings for keyboard users.
          </p>
        </div>

        {/* Links */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Links</h2>
          <p className="mt-2">
            Default link:{' '}
            <a className="underline hover:text-brand-forest focus-visible:ring-2 focus-visible:ring-brand-aqua/40 rounded"
               href="#">
              hover + focus-visible demo
            </a>
          </p>
        </div>

        {/* Card */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-gray-700">
                Use <code>.card</code> for consistent padding, subtle border, and shadow.
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

        {/* Inputs & Labels */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Inputs</h2>
          <div className="mt-4 max-w-md space-y-3">
            <label className="label" htmlFor="demo-email">Email</label>
            <input id="demo-email" type="email" className="input" placeholder="you@example.com" />
            <div className="mt-3 flex gap-3">
              <button className="btn btn-primary">Submit</button>
              <button className="btn btn-ghost">Cancel</button>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Inputs include aqua focus rings and a forest focus border for clarity.
          </p>
        </div>

        {/* Spacing & Sections */}
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
1
