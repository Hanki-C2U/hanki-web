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
import LinkedInRedirect from "./components/LinkedInRedirect";


export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
          <Route index element={<LandingPage />}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="landing" element={<LandingPage />} />
          <Route path="resources" element={<ResourceLibrary />} />
          <Route path="login" element={<Login/>}/>
          <Route path="progress" element={<ProgressTracking />} />
          <Route path="book-session/:mentorId" element={<BookSession />} />
          <Route path="discover-mentors" element={<MentorDiscovery />} />
          <Route path="mentor-discovery" element={<MentorDiscovery />} />
          <Route path="discover-mentees" element={<MenteeDiscovery />} />
          <Route path="mentor/:id" element={<MentorProfile />} />
          <Route path="mentee/:id" element={<MenteeProfile />} />
          <Route path="auth/callback" element={<AuthCallback/>}/>
          <Route path="onboarding" element={<Onboarding/>}/>
          <Route path="*" element={<NotFound />} />
          {/* <Route path='home' element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <HomePage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
            }/> */}
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
          <Route path="/simple-chat/:userId" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <SimpleChatPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="/session/:sessionId" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <SessionRoom/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="/edit-profile" element={
            <ProtectedComp allowedRoles={['mentee']}>
              <IncompleteOnboardingHandler>
                <EditProfile/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="/edit-mentor-profile" element={
            <ProtectedComp allowedRoles={['mentor']}>
              <IncompleteOnboardingHandler>
                <EditMentorProfile/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="/inspiration" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <InspirationPage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="/linkedin/:username" element={<LinkedInRedirect />} />
      </Route>
  ))


