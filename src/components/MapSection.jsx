const MapSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-stone-950">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-western text-3xl md:text-5xl text-amber-100 mb-6">Map of Our Route</h2>
        <div className="rounded-xl overflow-hidden border border-amber-800/30 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.55)] bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
          <div className="w-full aspect-[16/9] relative">
            <div className="absolute inset-0 bg-stone-950/50" />
            {/* Route line placeholder */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 56" preserveAspectRatio="none">
              <path d="M5 50 C 20 40, 40 60, 55 35 S 90 20, 95 30" stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
              <circle cx="5" cy="50" r="2" fill="#f59e0b" />
              <circle cx="45" cy="42" r="2" fill="#f59e0b" />
              <circle cx="75" cy="28" r="2" fill="#f59e0b" />
              <circle cx="95" cy="30" r="2" fill="#f59e0b" />
            </svg>
            <div className="absolute bottom-3 left-3 text-amber-200 text-sm bg-stone-950/60 px-2 py-1 rounded border border-amber-800/40">
              Placeholder map — pins and stops coming soon
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
