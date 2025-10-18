export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white/60">
      <div className="container flex flex-col gap-2 py-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} HotSpringMaps.com — Find, Share & Soak</p>

        <nav className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
          {/* TEMP: internal review — remove before launch */}
          <a href="/styleguide" className="hover:underline">
            Styleguide
          </a>
        </nav>
      </div>
    </footer>
  );
}
