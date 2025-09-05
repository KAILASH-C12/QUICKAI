import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <div
      className="fixed w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer"
      style={{ zIndex: 5 }}
    >
      {/* Logo with no extra space around */}
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44"
        style={{ margin: 0, padding: 0 }}
        onClick={() => navigate("/")}
      />

      {/* Button with right padding inside container for spacing */}
      <div
        style={{ marginRight: "2rem", display: "flex", alignItems: "center" }}
      >
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-8 py-2.5"
            style={{ marginRight: "2rem", color: "white" }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
