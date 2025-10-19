'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase-browser';

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
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  // Load auth session + subscribe to changes
  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);

      const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
        setUser(session?.user ?? null);
      });

      return () => sub.subscription.unsubscribe();
    };
    init();
  }, []);

  // Close the mobile menu when route changes
  useEffect(() => setOpen(false), [pathname]);

  // Close on Esc globally (safety)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
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

          <div className="flex items-center gap-2">
            <NavLink href="/account">{user ? 'Account' : 'Sign in'}</NavLink>
            {user?.user_metadata?.avatar_url && (
              <img
                src={user.user_metadata.avatar_url}
                alt="User avatar"
                referrerPolicy="no-referrer"
                className="h-8 w-8 rounded-full border border-gray-300"
              />
            )}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"   /* Accessibility: link button to drawer */
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 transition hover:border-brand-forest hover:text-brand-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-aqua/40 md:hidden"
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
        <div id="mobile-nav" className="border-t border-gray-200 bg-white md:hidden">
          <nav className="container grid gap-1 py-2">
            <NavLink href="/explore" onClick={() => setOpen(false)}>Explore</NavLink>
            <NavLink href="/community" onClick={() => setOpen(false)}>Community</NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink href="/account" onClick={() => setOpen(false)}>
              {user ? 'Account' : 'Sign in'}
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
