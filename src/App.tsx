import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProblemPage from "./pages/ProblemPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import WhyRwandaPage from "./pages/WhyRwandaPage";
import SignInPage from "./pages/SignInPage";
import GetStartedPage from "./pages/GetStartedPage";

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/problem" element={<ProblemPage/>} />
    <Route path="/how-it-works" element={<HowItWorksPage/>} />
    <Route path="/why-rwanda" element={<WhyRwandaPage/>} />
    <Route path="/signin" element={<SignInPage/>} />
    <Route path="/get-started" element={<GetStartedPage/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
