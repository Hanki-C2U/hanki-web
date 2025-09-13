import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
<<<<<<< HEAD
import AuthenticatedHeader from "../components/AuthenticatedHeader";
=======
import AuthenticatedLanding from "../components/AuthenticatedHeader";
>>>>>>> 37e06af (fixed some import for what used to be AuthenticatedLanding that i changed into AuthenticatedHeader)
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MentorShowcase from "../components/MentorShowcase";
import Testimonials from "../components/Testimonials";
import WhoItsFor from "../components/WhoItsFor";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const storedUser = localStorage.getItem("mockUser");
      setIsLoggedIn(!!storedUser);
    };

    checkAuthStatus();

    // Listen for storage events to handle auth state changes across tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "mockUser") {
        setIsLoggedIn(!!event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {isLoggedIn ? <AuthenticatedHeader /> : <Header />}
      <main>
        <Hero />
        <WhoItsFor />
        <MentorShowcase />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
