import { Wrench, MapPinned, Wifi, Shield, Camera, Compass } from 'lucide-react'

const tools = [
  { icon: MapPinned, title: 'Offline Maps', desc: 'Routes, camps and water points — even without signal.' },
  { icon: Shield, title: 'Safety Guides', desc: 'Modern practices with old-west pragmatism.' },
  { icon: Wifi, title: 'Connectivity', desc: 'Starlink, hotspots and field-tested tips.' },
  { icon: Camera, title: 'Photo Workflows', desc: 'From analog vibes to digital backups.' },
  { icon: Wrench, title: 'Rig Toolkit', desc: 'Maintenance checklists and quick fixes.' },
  { icon: Compass, title: 'Route Planner', desc: 'Design your path mile by mile.' },
]

const Tools = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-western text-3xl md:text-5xl text-amber-100 mb-10">Tools for Modern Nomads</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t, i) => (
            <div key={i} className="rounded-xl border border-amber-900/40 bg-[linear-gradient(145deg,#3b2a1d,#1b140f)] shadow-[inset_0_2px_0_rgba(255,255,255,0.04),0_25px_50px_-12px_rgba(0,0,0,0.6)] p-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded bg-amber-900/40 border border-amber-800/50 flex items-center justify-center text-amber-200">
                  <t.icon size={22} />
                </div>
                <h3 className="text-amber-100 font-semibold">{t.title}</h3>
              </div>
              <p className="mt-3 text-amber-200/75 font-sansSoft">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
