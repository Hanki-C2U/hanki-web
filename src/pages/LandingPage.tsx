import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthHeader from "../components/AuthHeader";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MentorShowcase from "../components/MentorShowcase";
import Testimonials from "../components/Testimonials";
import WhoItsFor from "../components/WhoItsFor";
import { useAuthStore } from "../store/authStore";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhoItsFor />
        <MentorShowcase />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}