const items = [
  {
    title: "Cómo elegir campamentos increíbles en la ruta",
    desc: "Claves para encontrar lugares seguros, bellos y tranquilos.",
    img: "https://images.unsplash.com/photo-1504548840739-580b10ae7715?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Guía de seguridad nómada estilo viejo oeste moderno",
    desc: "Prácticas reales para viajar con calma y confianza.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "10 apps que usamos en carretera",
    desc: "Herramientas que realmente ayudan en movimiento.",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Checklists ruteros que realmente sirven",
    desc: "Listas simples para preparar cada salida.",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop",
  },
]

const Featured = () => {
  return (
    <section id="featured" className="relative py-16 md:py-24 bg-stone-900">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-western text-3xl md:text-5xl text-amber-100 mb-10">Featured Content</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <a key={i} href="#" className="group block rounded-xl overflow-hidden bg-stone-950 border border-amber-800/30 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.55)]">
              <div className="relative h-44">
                <img src={it.img} alt={it.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-amber-100 font-semibold">{it.title}</h3>
                <p className="text-amber-200/75 text-sm mt-2 font-sansSoft">{it.desc}</p>
                <span className="inline-block mt-3 text-amber-300 text-sm underline underline-offset-4">Leer más</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
