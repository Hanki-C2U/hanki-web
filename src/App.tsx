import React from 'react'
import { AuthProvider } from './components/AuthProvider';
import { RouterProvider } from 'react-router';
import {router} from './RouteLayout'
function App() {
  return (
    <div>
      <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
    </div>
  )
}

export default App;