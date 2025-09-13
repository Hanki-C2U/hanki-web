import { createBrowserRouter,createRoutesFromElements,Route } from "react-router"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import LandingPage from "./pages/LandingPage";
import ResourceLibrary from "./pages/ResourceLibrary";
import MentorDiscovery from "./pages/MentorDiscovery";
import MenteeDiscovery from "./pages/MenteeDiscovery";
import MentorProfile from "./pages/MentorProfile";
import MenteeProfile from "./pages/MenteeProfile";
import BookSession from "./pages/BookSession";
import ProgressTracking from "./pages/ProgressTracking";
import NotFound from "./pages/NotFound";
import AuthCallback from "./pages/AuthCallback"
import Onboarding from "./pages/Onboarding"
import ProtectedComp from "./components/ProtectedComp"
import HomePage from "./pages/HomePage"
import SessionPage from "./pages/SessionPage"
import IncompleteOnboardingHandler from "./components/IncompleteOnboardingHandler"
// import LandingPage from "./pages/LandingPage";
import MentorDashboard from "./pages/MentorDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";
import ChatPage from "./pages/ChatPage"
import SimpleChatPage from "./pages/SimpleChatPage"
import SessionRoom from "./pages/SessionRoom"
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import InspirationPage from "./pages/InspirationPage";
import EditProfile from "./pages/EditProfile";
import EditMentorProfile from "./pages/EditMentorProfile";


export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
          {/* Landing page as index route */}
          <Route index element={<LandingPage />} />
          
          {/* Authentication routes */}
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="auth/callback" element={<AuthCallback/>}/>
          <Route path="onboarding" element={<Onboarding/>}/>
          
          {/* Public routes */}
          <Route path="resources" element={<ResourceLibrary />} />
          <Route path="progress" element={<ProgressTracking />} />
          <Route path="discover-mentors" element={<MentorDiscovery />} />
          <Route path="mentor-discovery" element={<MentorDiscovery />} />
          <Route path="discover-mentees" element={<MenteeDiscovery />} />
          <Route path="mentor/:id" element={<MentorProfile />} />
          <Route path="mentee/:id" element={<MenteeProfile />} />
          <Route path="book-session/:mentorId" element={<BookSession />} />
          
          {/* Protected dashboard routes */}
          <Route path="mentor-dashboard" element={
            <ProtectedComp allowedRoles={['mentor']}>
              <IncompleteOnboardingHandler>
                <MentorDashboard/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="mentee-dashboard" element={
            <ProtectedComp allowedRoles={['mentee']}>
              <IncompleteOnboardingHandler>
                <MenteeDashboard/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          
          {/* Protected session and chat routes */}
          <Route path="session-page" element={
            <ProtectedComp allowedRoles={['mentee']}>
              <IncompleteOnboardingHandler>
                <SessionPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          }/>
          <Route path="chat" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <ChatPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="chat/:conversationId" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <ChatPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="simple-chat/:userId" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <SimpleChatPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="session/:sessionId" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <SessionRoom/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          
          {/* Protected profile editing routes */}
          <Route path="edit-profile" element={
            <ProtectedComp allowedRoles={['mentee']}>
              <IncompleteOnboardingHandler>
                <EditProfile/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="edit-mentor-profile" element={
            <ProtectedComp allowedRoles={['mentor']}>
              <IncompleteOnboardingHandler>
                <EditMentorProfile/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          
          {/* Other protected routes */}
          <Route path="inspiration" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <InspirationPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          
          {/* Legacy route redirects for backward compatibility */}
          <Route path="landing" element={<LandingPage />} />
          <Route path="home" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <HomePage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          }/>
          
          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
      </Route>
  ))


