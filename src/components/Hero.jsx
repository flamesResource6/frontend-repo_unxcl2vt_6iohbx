import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background image/video placeholder */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop"
          alt="Open road at sunset"
          className="h-full w-full object-cover scale-105 md:scale-100"
        />
        {/* subtle movement */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.6)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/40" />
        <div className="grain-overlay" />
        <div className="vignette" />
      </div>

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="uppercase tracking-[0.35em] text-[11px] md:text-xs text-amber-200/80 mb-3">
              Latitude of wanderers
            </p>
            <h1 className="font-western text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-amber-100 drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)]">
              Latitud Nómade — Where the Road Becomes Home
            </h1>
            <p className="mt-6 text-amber-100/90 md:text-lg max-w-2xl font-sansSoft">
              A place for travelers, dreamers, and modern nomads inspired by the spirit of the old west.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#join" className="btn-leather-primary">Join the Journey</a>
              <a href="#stories" className="btn-leather-secondary">Explore Stories</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* subtle parallax foreground dust */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_50%_100%,rgba(107,70,31,0.45),transparent_70%)]"/>
    </section>
  )
}

export default Hero
