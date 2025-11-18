const JoinCTA = () => {
  return (
    <section id="join" className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2000&auto=format&fit=crop" alt="Sunset highway" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 to-stone-950/90" />
        <div className="grain-overlay" />
      </div>
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="font-western text-3xl md:text-5xl text-amber-100">Be part of the campfire circle.</h2>
          <p className="text-amber-200/90 mt-4 font-sansSoft">Get exclusive travel notes, guides and stories.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="your@email" className="flex-1 rounded-lg bg-stone-900/70 border border-amber-800/40 px-4 py-3 text-amber-100 placeholder:text-amber-300/40"/>
            <button className="btn-leather-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default JoinCTA
