import { Compass, Instagram, Youtube, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-stone-950 border-t border-amber-900/40">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')"}} />
      <div className="container relative mx-auto px-6 md:px-10 py-10">
        <div className="flex items-center gap-3 text-amber-300">
          <Compass size={18} />
          <span className="font-western text-amber-200">Latitud Nómade</span>
        </div>
        <div className="mt-4 flex items-center gap-5 text-amber-400/80">
          <a href="#" className="hover:text-amber-300 transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-amber-300 transition-colors" aria-label="YouTube">
            <Youtube size={18} />
          </a>
          <a href="#" className="hover:text-amber-300 transition-colors" aria-label="Facebook">
            <Facebook size={18} />
          </a>
        </div>
        <p className="mt-6 text-xs text-amber-400/60">© {new Date().getFullYear()} Latitud Nómade — All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
