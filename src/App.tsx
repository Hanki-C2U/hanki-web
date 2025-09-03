import React from 'react'
import { RouterProvider } from 'react-router';
import {router} from './RouteLayout'
import AuthProvider from './components/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <div>
        <RouterProvider router={router}/>
      </div>
    </AuthProvider>
  )
}

export default App;