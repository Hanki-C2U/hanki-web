import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import AuthCallback from "./pages/AuthCallback"
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding"
import ProtectedComp from "./components/ProtectedComp"
import HomePage from "./pages/HomePage"
import IncompleteOnboardingHandler from "./components/IncompleteOnboardingHandler"
import ResourceLibrary from "./pages/ResourceLibrary";
import MentorDiscovery from "./pages/MentorDiscovery";
import MentorProfile from "./pages/MentorProfile";
import BookSession from "./pages/BookSession";
import ProgressTracking from "./pages/ProgressTracking";
import MentorDashboard from "./pages/MentorDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";
import ChatPage from "./pages/ChatPage"
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
          <Route index element={<Login/>}/>
          {/* <Route  element={<LandingPage />} /> */}
          <Route path="signup" element={<Signup/>}/>
          <Route path="resources" element={<ResourceLibrary />} />
          <Route path="discover-mentors" element={<MentorDiscovery />} />
          <Route path="mentor/:id" element={<MentorProfile />} />
          <Route path="book-session/:mentorId" element={
          <ProtectedComp>
              <BookSession />
          </ProtectedComp>  
          } 
            />
          <Route path="progress" element={<ProgressTracking />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login/>}/>
          <Route path="auth/callback" element={<AuthCallback/>}/>
          <Route path="onboarding" element={<Onboarding/>}/>
          <Route path='home' element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <HomePage/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
            }/>
          {/* <Route path="/" element={<LandingPage/>} /> */}
          <Route path="mentor-dashboard" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <MentorDashboard/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="mentee-dashboard" element={
            <ProtectedComp>
              <IncompleteOnboardingHandler>
                <MenteeDashboard/>
              </IncompleteOnboardingHandler>
            </ProtectedComp>
          } />
          <Route path="/chat" element={
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
      </Route>
  ))


