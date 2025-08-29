import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import MentorDashboard from "./pages/MentorDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";
import ResourceLibrary from "./pages/ResourceLibrary";
import MentorDiscovery from "./pages/MentorDiscovery";
import MentorProfile from "./pages/MentorProfile";

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/mentor-dashboard" element={<MentorDashboard/>} />
    <Route path="/mentee-dashboard" element={<MenteeDashboard/>} />
    <Route path="/resources" element={<ResourceLibrary/>} />
    <Route path="/discover-mentors" element={<MentorDiscovery/>} />
    <Route path="/mentor/:id" element={<MentorProfile/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
