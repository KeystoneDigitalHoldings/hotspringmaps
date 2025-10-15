import Link from 'next/link'
import WaitlistSignup from '@/components/WaitlistSignup'

export default function Home() {
  return (
    <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="order-2 lg:order-1">
        <h1 className="text-4xl font-bold tracking-tight text-brand-forest sm:text-5xl">
          Find, Share & Soak
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Explore natural hot springs near you and around the world. Read honest reviews,
          plan safe trips, and connect with fellow soakers.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/explore" className="btn btn-primary">Explore Map</Link>
          <Link href="/community" className="btn btn-secondary">Community</Link>
        </div>
        <WaitlistSignup />
        <p className="mt-3 text-xs text-gray-500">
          By joining, you agree to our <a className="underline" href="/privacy">Privacy Policy</a>.
        </p>
      </div>
      <div className="order-1 lg:order-2">
        {/* Placeholder illustration */}
        <div className="card">
          <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-brand-aqua/30 via-brand-stone to-white" />
          <p className="mt-3 text-sm text-gray-600">
            Map preview will appear here once Mapbox is connected.
          </p>
        </div>
      </div>
    </section>
  )
}
