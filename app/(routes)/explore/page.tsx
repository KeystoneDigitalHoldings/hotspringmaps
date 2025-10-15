export default function ExplorePage() {
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-semibold text-brand-forest">Explore Hot Springs</h1>
      <div className="card">
        <div className="aspect-[16/9] w-full rounded-lg bg-white">
          {/* Integrate Mapbox here in the next step */}
          <div className="flex h-full items-center justify-center text-gray-500">
            Mapbox map goes here
          </div>
        </div>
      </div>
    </section>
  );
}
