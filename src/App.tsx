import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import MentorDashboard from "./pages/MentorDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";
import ResourceLibrary from "./pages/ResourceLibrary";
import MentorDiscovery from "./pages/MentorDiscovery";
import MentorProfile from "./pages/MentorProfile";
import BookSession from "./pages/BookSession";
import ProgressTracking from "./pages/ProgressTracking";
import { MentorProgressView } from "./pages/MentorProgressView";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import AuthCallback from "./pages/AuthCallback";
import Onboarding from "./pages/Onboarding";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="auth/callback" element={<AuthCallback />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="home" element={<h1>Home Page</h1>} />
        <Route path="mentor-dashboard" element={<MentorDashboard />} />
        <Route path="mentor/progress" element={<MentorProgressView />} />
        <Route path="mentee-dashboard" element={<MenteeDashboard />} />
        <Route path="resources" element={<ResourceLibrary />} />
        <Route path="discover-mentors" element={<MentorDiscovery />} />
        <Route path="mentor/:id" element={<MentorProfile />} />
        <Route path="book-session/:mentorId" element={<BookSession />} />
        <Route path="progress" element={<ProgressTracking />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
