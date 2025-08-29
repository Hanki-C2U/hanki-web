import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import MentorDashboard from "./pages/MentorDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/mentor-dashboard" element={<MentorDashboard/>} />
    <Route path="/mentee-dashboard" element={<MenteeDashboard/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
