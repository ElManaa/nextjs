import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => {
  const { data: session, status } = useSession();

  //console.log(session?.user?.email);

  if (status === "unauthenticated") {
    return <div>UnAuthenticated</div>;
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Authenticated
  return <>{children}</>;
};

export default Auth;
