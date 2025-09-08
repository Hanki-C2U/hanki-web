import { AuthProvider } from './components/AuthProvider';
import { RouterProvider } from 'react-router';
import { router } from './RouteLayout'
import { NotificationProvider } from './contexts/NotificationContext'

function App() {
  return (
    <div>
      <AuthProvider>
        <NotificationProvider>
          <RouterProvider router={router} />
        </NotificationProvider>
      </AuthProvider>
    </div>
  )
}

export default App;