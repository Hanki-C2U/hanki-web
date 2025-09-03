import React from 'react';
import useAuthInit from '../hooks/useAuthInit';

/**
 * Authentication Provider Component
 * Initializes authentication state on app load
 */
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize authentication state
  useAuthInit();
  
  // Simply render children - authentication state is managed globally via Zustand
  return <>{children}</>;
};

export default AuthProvider;
