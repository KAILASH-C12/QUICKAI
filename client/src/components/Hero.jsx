import React from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/user_group.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create amazing content <br />{" "}
          <span className="text-primary"> with AI tools</span>
        </h1>
        <p>
          Transform your content creation with our suite of premium AI
          tools.Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          fontSize: "1rem", // text-sm
          lineHeight: "1.25rem",
        }}
        className="button-container"
      >
        <button
          onClick={() => navigate("/ai")}
          style={{
            color: "white",
            backgroundColor: "#5044E5",
            padding: "1.25rem 2rem",
            fontSize: "1.25rem",
            fontWeight: "600",
            borderRadius: "0.75rem",
            cursor: "pointer",
            border: "none",
            boxShadow: "0 8px 20px rgba(80, 68, 229, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.07)";
            e.currentTarget.style.boxShadow =
              "0 12px 30px rgba(80, 68, 229, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(80, 68, 229, 0.3)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.96)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1.07)";
          }}
        >
          Start creating now
        </button>

        <button
          onClick={() => navigate("/ai")}
          style={{
            backgroundColor: "white",
            color: "#111827",
            padding: "1.25rem 2rem",
            fontSize: "1.25rem",
            fontWeight: "600",
            borderRadius: "0.75rem",
            border: "1px solid #D1D5DB",
            cursor: "pointer",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.07)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.96)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1.07)";
          }}
        >
          Watch demo
        </button>
      </div>

      <div className="flex items-center gap-10 mt-8 mx-auto text-gray-500">
        <img
          src={assets}
          alt=""
          style={{
            width: "150px",
            height: "50px",
            gap: "10px",
            margin: "10px",
          }}
          className="h-4 w-4 "
        />
        Trusted by 10k+ people
      </div>
    </div>
  );
};

export default Hero;
