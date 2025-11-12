import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import References from './components/References'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Services />
      <References />
      <WhyUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
