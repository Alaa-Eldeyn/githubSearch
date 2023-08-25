import login from "../assets/Nerd-amico.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <main className="h-screen grid place-items-center">
      <div className="flex-col text-center element-center">
        <img src={login} alt="Login" className="w-full" />
        <h1 className="text-[3rem] font-bold">Github Users</h1>
        <button
          onClick={() => loginWithRedirect()}
          className="bg-teal-400 hover:bg-teal-800 min-w-[120px] py-2 px-4 text-teal-950 hover:text-teal-400 w-fit mt-2 rounded transition duration-300"
        >
          Login / Signup
        </button>
      </div>
    </main>
  );
};

export default Login;
