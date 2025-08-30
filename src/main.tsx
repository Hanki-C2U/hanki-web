import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouteLayout from './RouteLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <RouteLayout />
  </StrictMode>,
)
