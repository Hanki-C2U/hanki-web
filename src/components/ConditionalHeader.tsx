import { useAuthStore } from "../store/authStore";
import AuthHeader from "./AuthHeader";

const ConditionalHeader = () => {
  const { user, userRole } = useAuthStore();

  // If user is authenticated, show AuthHeader with profile dropdown
  if (user && userRole) {
    return <AuthHeader />;
  }

  // If user is not authenticated, return null (let pages handle their own headers)
  return null;
};

export default ConditionalHeader;