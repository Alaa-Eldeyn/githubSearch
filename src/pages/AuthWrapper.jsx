import { useAuth0 } from "@auth0/auth0-react";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="element-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-700"></div>
      </div>
    );
  }
  if (error) {
    <div className="element-center h-screen">
      <h2 className="text-center text-lg text-red-700">{error.message}</h2>
    </div>
  }
  return <>{children}</>;
};

export default AuthWrapper;
