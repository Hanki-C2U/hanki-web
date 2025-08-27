import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MentorShowcase from "../components/MentorShowcase";
import Testimonials from "../components/Testimonials";
import WhoItsFor from "../components/WhoItsFor";

export default function LandingPage() {
  return (
    <>
    
    <Header/>
    <main>
    <Hero/>
    <WhoItsFor />
    <MentorShowcase />
    <HowItWorks />
    <Testimonials />
    </main>
    <Footer/>
    </>
  )
}
