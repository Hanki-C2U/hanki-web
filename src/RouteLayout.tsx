import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import LandingPage from "./pages/LandingPage";
import ResourceLibrary from "./pages/ResourceLibrary";
import MentorDiscovery from "./pages/MentorDiscovery";
import MentorProfile from "./pages/MentorProfile";
import BookSession from "./pages/BookSession";
import ProgressTracking from "./pages/ProgressTracking";
import NotFound from "./pages/NotFound";
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
export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
          <Route index element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="landing" element={<LandingPage />} />
          <Route path="resources" element={<ResourceLibrary />} />
          <Route path="login" element={<Login/>}/>
          <Route path="progress" element={<ProgressTracking />} />
          <Route path="book-session/:mentorId" element={<BookSession />} />
          <Route path="discover-mentors" element={<MentorDiscovery />} />
          <Route path="mentor/:id" element={<MentorProfile />} />
          <Route path="auth/callback" element={<AuthCallback/>}/>
          <Route path="onboarding" element={<Onboarding/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path='home' element={
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


