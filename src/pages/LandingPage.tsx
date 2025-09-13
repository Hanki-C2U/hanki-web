import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthenticatedLanding from "../components/AuthenticatedHeader";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MentorShowcase from "../components/MentorShowcase";
import Testimonials from "../components/Testimonials";
import WhoItsFor from "../components/WhoItsFor";
import { supabasase as supabase } from "../supabase_creds/supabase";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };

    checkAuthStatus();

    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        setIsLoggedIn(true);
      }
      if (event === "SIGNED_OUT") {
        setIsLoggedIn(false);
      }
    });

    return () => {
      if (authListener?.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {isLoggedIn ? <AuthenticatedLanding /> : <Header />}
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