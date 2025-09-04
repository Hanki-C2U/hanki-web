import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import AuthCallback from "./pages/AuthCallback"
import Onboarding from "./pages/Onboarding"
import { AuthProvider } from "./components/AuthProvider"
import ProtectedComp from "./components/ProtectedComp"
import HomePage from "./pages/HomePage"
import SessionPage from "./pages/SessionPage"
import IncompleteOnboardingHandler from "./components/IncompleteOnboardingHandler"
// import LandingPage from "./pages/LandingPage";
import MentorDashboard from "./pages/MentorDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";
import ChatPage from "./pages/ChatPage"
function RouteLayout() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
          <Route index element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/auth/callback" element={<AuthCallback/>}/>
          <Route path="/onboarding" element={<Onboarding/>}/>
          <Route path='/home' element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <HomePage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
            }/>
          {/* <Route path="/" element={<LandingPage/>} /> */}
          <Route path="/mentor-dashboard" element={
            <ProtectedComp allowedRoles={['mentor']}>
              <IncompleteOnboardingHandler>
                <MentorDashboard/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="/mentee-dashboard" element={
            <ProtectedComp allowedRoles={['mentee']}>
              <IncompleteOnboardingHandler>
                <MenteeDashboard/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="/session-page" element={
            <ProtectedComp allowedRoles={['mentee']}>
              <IncompleteOnboardingHandler>
                <SessionPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          }/>
          <Route path="/chat" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <ChatPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="/chat/:conversationId" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <ChatPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
      </Route>
  ))
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default RouteLayout
