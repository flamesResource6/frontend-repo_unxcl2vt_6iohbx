import { Compass, Map, Footprints } from 'lucide-react'

const Item = ({ icon: Icon, title, text }) => (
  <div className="bg-[linear-gradient(180deg,rgba(54,39,27,0.8),rgba(26,18,12,0.9))] border border-amber-800/30 rounded-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-lg bg-amber-900/40 border border-amber-800/40 flex items-center justify-center text-amber-200">
        <Icon size={22} />
      </div>
      <h3 className="font-western text-xl text-amber-100">{title}</h3>
    </div>
    <p className="mt-3 text-amber-200/80 font-sansSoft leading-relaxed">{text}</p>
  </div>
)

const Philosophy = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-stone-950 to-stone-900" id="philosophy">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-western text-3xl md:text-5xl text-amber-100 mb-10">The Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Item icon={Footprints} title="Live Free" text="Inspired by the caravans of the old west, traveling with no fixed path." />
          <Item icon={Map} title="Build Your Own Road" text="Each traveler designs their own route, one mile at a time." />
          <Item icon={Compass} title="Leave a Mark" text="Document your story — someone out there needs your map." />
        </div>
      </div>
    </section>
  )
}

export default Philosophy
