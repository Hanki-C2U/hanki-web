import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import AuthCallback from "./pages/AuthCallback"
import Onboarding from "./pages/Onboarding"
import useAuthInit from "./hooks/useAuthInit"

function RouteLayout() {
  // Initialize authentication state
  useAuthInit();

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/auth/callback" element={<AuthCallback/>}/>
          <Route path="/onboarding" element={<Onboarding/>}/>
          <Route path='/home' element={<h1>Home Page</h1>}/>
      </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default RouteLayout
