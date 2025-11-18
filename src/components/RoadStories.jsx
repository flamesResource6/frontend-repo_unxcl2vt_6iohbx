import { useRef, useEffect } from 'react'

const photos = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop',
]

const RoadStories = () => {
  const scroller = useRef(null)

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section id="stories" className="relative py-16 md:py-24 bg-stone-950">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-western text-3xl md:text-5xl text-amber-100 mb-6">Road Stories</h2>
        <div ref={scroller} className="overflow-x-auto flex gap-6 pb-4 snap-x snap-mandatory" style={{scrollbarWidth:'none'}}>
          {photos.map((src, i) => (
            <div key={i} className="min-w-[80%] sm:min-w-[55%] md:min-w-[40%] lg:min-w-[32%] snap-start">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 border border-amber-800/30 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.55)]">
                <img src={src} alt="Story" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'url(https://i.imgur.com/dV8G7Gf.png)', opacity: 0.25}}/>
                <div className="absolute inset-0 p-4 flex items-end">
                  <div className="bg-stone-950/70 backdrop-blur-sm px-3 py-2 rounded border border-amber-800/30 text-amber-100 font-handwritten">
                    note: campfire at mile {i+1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoadStories
