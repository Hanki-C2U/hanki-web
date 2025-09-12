import { useEffect } from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router";

/**
 * Layout component that automatically scrolls the window to the top 
 * on page navigation/route changes.
 * 
 * This component should be used as the element of the root Route in 
 * your router configuration to enable automatic scrolling for all routes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the URL/pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "instant" instead of "smooth" for immediate scrolling
    });
  }, [pathname]);

  // Render children routes
  return <Outlet />;
}
