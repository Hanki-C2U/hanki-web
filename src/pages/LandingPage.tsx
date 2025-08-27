import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import WhoItsFor from "../components/WhoItsFor";

export default function LandingPage() {
  return (
    <>
    
    <Header/>
    <main>
    <Hero/>
    <WhoItsFor />
    <HowItWorks />
    <Testimonials />
    </main>
    <Footer/>
    </>
  )
}
