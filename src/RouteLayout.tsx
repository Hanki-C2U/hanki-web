import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import AuthCallback from "./pages/AuthCallback"
import Onboarding from "./pages/Onboarding"
import useAuthInit from "./hooks/useAuthInit"
import ProtectedComp from "./components/ProtectedComp"
import HomePage from "./pages/HomePage"
// import LandingPage from "./pages/LandingPage";
import MentorDashboard from "./pages/MentorDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";

function RouteLayout() {
  // Initialize authentication state
  useAuthInit();

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
          <Route index element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/auth/callback" element={<AuthCallback/>}/>
          <Route path="/onboarding" element={<Onboarding/>}/>
          <Route path='/home' element={
            <ProtectedComp>
              <HomePage/>
            </ProtectedComp>
            }/>
          {/* <Route path="/" element={<LandingPage/>} /> */}
          <Route path="/mentor-dashboard" element={
            <ProtectedComp>
              <MentorDashboard/>
            </ProtectedComp>
          } />
          <Route path="/mentee-dashboard" element={
            <ProtectedComp>
              <MenteeDashboard/>
            </ProtectedComp>
          } />
      </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default RouteLayout
