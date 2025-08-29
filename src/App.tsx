import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import MentorDashboard from "./pages/MentorDashboard";

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/mentor-dashboard" element={<MentorDashboard/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
