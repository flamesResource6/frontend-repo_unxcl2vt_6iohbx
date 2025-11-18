import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import Featured from './components/Featured'
import RoadStories from './components/RoadStories'
import Tools from './components/Tools'
import MapSection from './components/MapSection'
import JoinCTA from './components/JoinCTA'
import Footer from './components/Footer'
import Divider from './components/Divider'

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-amber-100 selection:bg-amber-500/30 selection:text-amber-50">
      {/* global decorative backgrounds */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,53,15,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,191,36,0.08),transparent_60%)]" />
      </div>

      <Hero />
      <Divider />
      <About />
      <Divider />
      <Philosophy />
      <Divider />
      <Featured />
      <Divider />
      <RoadStories />
      <Divider />
      <Tools />
      <Divider />
      <MapSection />
      <Divider />
      <JoinCTA />
      <Footer />
    </div>
  )
}

export default App
