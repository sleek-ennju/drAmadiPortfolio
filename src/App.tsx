import './index.css'

// components
import Hero from './components/sefda/Hero';
import Affiliations from "./components/sefda/Affiliations";
import Contact from "./components/sefda/Contact";
import Programmes from './components/sefda/Programme'
import Leadership from './components/sefda/Leadership'
import Climate from './components/sefda/Climate'
import Footer from './components/sefda/Footer'


// import Hero from './components/Hero'
// import About from './components/About'
// import Framework from './components/Framework'
// import FrameworkOverview from './components/FrameworkOverview'
// import Qualifications from './components/Qualifications'
// import CareerHighlights from './components/CareerHighlights'
// import Recognition from './components/Recognition'
// import Services from './components/Services'
// import Testimonials from './components/Testimonials'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

function App() {
  

  return (
    <>
      {/* <Hero /> */}
      {/* <About /> */}
      <Hero />
      <Programmes />
      <Leadership />
      <Affiliations />
      <Climate />
      
      {/* <Framework />
      <FrameworkOverview />
      <Qualifications />
      <CareerHighlights />
      <Recognition />
      <Services />
      <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
