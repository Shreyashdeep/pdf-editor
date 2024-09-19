import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Offerings from './components/Offerings'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Offerings />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}