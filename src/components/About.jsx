const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-stone-950 text-amber-100">
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize:'cover', backgroundPosition:'center'}}></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] opacity-30 mix-blend-overlay"></div>
      <div className="container relative mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-amber-900/20 ring-1 ring-amber-900/20">
            <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1600&auto=format&fit=crop" alt="Nomad campfire" className="w-full h-[340px] md:h-[460px] object-cover" />
          </div>
          <div>
            <h2 className="font-western text-3xl md:text-5xl text-amber-100">About the Journey</h2>
            <p className="mt-5 text-amber-200/90 leading-relaxed font-sansSoft">
              Latitud Nómade is a digital space born on the road. A tribute to dusty trails, long sunsets, and the art of living slowly. Blending the nomadic spirit with old-west grit, we create stories, guides, and tools for those who choose freedom over routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
