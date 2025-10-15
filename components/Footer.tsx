export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white/60">
      <div className="container py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HotSpringMaps.com — Find, Share & Soak</p>
          <div className="flex gap-4">
            <a href="/about" className="hover:underline">About</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
