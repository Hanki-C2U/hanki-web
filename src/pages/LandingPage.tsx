import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MentorShowcase from "../components/MentorShowcase";
import Testimonials from "../components/Testimonials";
import WhoItsFor from "../components/WhoItsFor";
import WhyRwandaTeaser from "../components/WhyRwandaTeaser";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <Hero/>
        <WhoItsFor />
        <MentorShowcase />
        <HowItWorks />
        <WhyRwandaTeaser />
        <Testimonials />
      </main>
      <Footer/>
    </div>
  )
}
