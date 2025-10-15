import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-brand-forest">
          <span className="inline-block h-6 w-6 rounded-full bg-brand-aqua" aria-hidden />
          HotSpringMaps
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/explore" className="hover:text-brand-forest">Explore</Link>
          <Link href="/community" className="hover:text-brand-forest">Community</Link>
          <Link href="/about" className="hover:text-brand-forest">About</Link>
          <Link href="/account" className="btn btn-secondary text-sm">Account</Link>
        </nav>
      </div>
    </header>
  );
}
