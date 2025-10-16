'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase-browser'; // 👇 Import Supabase client

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    (href !== '/' && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-lg px-3 py-2 text-sm font-medium transition
        ${isActive
          ? 'bg-brand-aqua/15 text-brand-forest'
          : 'text-gray-700 hover:text-brand-forest hover:bg-brand-aqua/10'}`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null); // 👇 Track Supabase user session

  const pathname = usePathname();

  // 👇 Fetch session when component loads
  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user?.email ?? null);

      // Subscribe to auth changes
      const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user?.email ?? null);
      });

      return () => sub.subscription.unsubscribe();
    };
    init();
  }, []);

  // Close menu when navigating or pressing Esc
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-brand-forest"
          aria-label="HotSpringMaps home"
        >
          <span className="inline-block h-6 w-6 rounded-full bg-brand-aqua" aria-hidden />
          HotSpringMaps
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/explore">Explore</NavLink>
          <NavLink href="/community">Community</NavLink>
          <NavLink href="/about">About</NavLink>
          {/* 👇 Dynamic link */}
          {user ? (
            <NavLink href="/account">Account</NavLink>
          ) : (
            <NavLink href="/account">Sign in</NavLink>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 transition hover:border-brand-forest hover:text-brand-forest md:hidden"
        >
          <svg
            className={`h-5 w-5 transition ${open ? 'rotate-90' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="container grid gap-1 py-2">
            <NavLink href="/explore" onClick={() => setOpen(false)}>Explore</NavLink>
            <NavLink href="/community" onClick={() => setOpen(false)}>Community</NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>About</NavLink>
            {/* 👇 Dynamic link for mobile */}
            {user ? (
              <NavLink href="/account" onClick={() => setOpen(false)}>Account</NavLink>
            ) : (
              <NavLink href="/account" onClick={() => setOpen(false)}>Sign in</NavLink>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
