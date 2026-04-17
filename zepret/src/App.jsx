import { useState } from 'react'
import TrueFocus from './components/TrueFocus'
import { ResultsShowcase } from './components/ResultsShowcase'
import { ScrollZoomIndicator } from './components/ScrollZoomIndicator'
import './App.css'

function App() {
  const [_, setCount] = useState(0)
  
  return (
    <>
      <ScrollZoomIndicator />
      <section id="center">
        <div className="hero-section">
          <h1 className="hero-title">
            GAYA LO, FOTO LO, <br/>
            <TrueFocus 
              sentence="ZEPRET AJA"
              blurAmount={4}
              borderColor="#ff5a8f"
              glowColor="rgba(255, 90, 143, 0.6)"
              animationDuration={0.5}
              pauseBetweenAnimations={1.5}
            />
          </h1>
          <p className="hero-subtitle">
            Ubah momen biasa jadi karya seni holographic 3D. Bukan sekedar foto, tapi dimensi baru gaya lo.
          </p>
          <button
            className="cta-button"
            onClick={() => setCount((count) => count + 1)}
          >
            Zepret Sekarang
          </button>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      
      {/* Results Showcase Section */}
      <ResultsShowcase />
    </>
  )
}

export default App
