import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import MentorDashboard from "./pages/MentorDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";
import ResourceLibrary from "./pages/ResourceLibrary";
import MentorDiscovery from "./pages/MentorDiscovery";
import MentorProfile from "./pages/MentorProfile";
import BookSession from "./pages/BookSession";
import ProgressTracking from "./pages/ProgressTracking";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import AuthCallback from "./pages/AuthCallback";
import Onboarding from "./pages/Onboarding";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MenteeProfile from "./pages/MenteeProfile";

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
        <Route path="mentee-profile/:id" element={<MenteeProfile />} />
        <Route path="mentor-dashboard" element={
          // <ProtectedRoute requiredUserType="mentor">
            <MentorDashboard />
          // </ProtectedRoute>
        } />
        <Route path="mentee-dashboard" element={
          // <ProtectedRoute requiredUserType="mentee">
            <MenteeDashboard />
          // </ProtectedRoute>
        } />
        <Route path="resources" element={
          // <ProtectedRoute>
            <ResourceLibrary />
          // </ProtectedRoute>
        } />
        <Route path="discover-mentors" element={<MentorDiscovery />} />
        <Route path="mentor/:id" element={<MentorProfile />} />
        <Route path="book-session/:mentorId" element={
          // <ProtectedRoute requiredUserType="mentee">
            <BookSession />
          // </ProtectedRoute>
        } />
        <Route path="progress" element={
          // <ProtectedRoute>
            <ProgressTracking />
          // </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;