import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  const headerRef = useRef();
  const headerImgRef = useRef();
  const headerNameRef = useRef();
  const headerBtnRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        headerRef.current.style.height = "0";
      } else if (window.scrollY <= 100) {
        headerRef.current.style.height = "3.5rem";
        headerImgRef.current.style.width = "2rem";
        headerNameRef.current.style.fontSize = "10px";
        headerBtnRef.current.style.fontSize = "10px";
      }
      if (window.scrollY === 0) {
        headerRef.current.style.height = "5rem";
        headerImgRef.current.style.width = "3.5rem";
        headerNameRef.current.style.fontSize = "16px";
        headerBtnRef.current.style.fontSize = "16px";
      }
    });
  }, []);
  return (
    <header
      className="bg-white h-20 mb-10 shadow-sm sticky top-0 transition-all duration-200 overflow-hidden"
      ref={headerRef}
    >
      <div className="container element-center gap-5 h-full">
        {isUser && user.picture && (
          <img
            className="w-14 rounded-full transition-all duration-200 max-w-full"
            src={user.picture}
            alt={user.name}
            ref={headerImgRef}
          />
        )}
        {isUser && user.name && (
          <h4
            ref={headerNameRef}
            className="text-[16px] tracking-wide transition-all duration-200"
          >
            welcome, <strong>{user.name.toUpperCase()}</strong>
          </h4>
        )}
        {isUser ? (
          <button
            className="bg-teal-400 hover:bg-teal-800 py-1 px-3  text-teal-950 hover:text-teal-400 w-fit rounded transition duration-200"
            onClick={() => logout({ returnTo: window.location.origin })}
            ref={headerBtnRef}
          >
            Log out
          </button>
        ) : (
          <button
            className="bg-teal-400 hover:bg-teal-800 min-w-[100px] py-2 px-4 text-teal-950 hover:text-teal-400 w-fit rounded transition duration-300"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
