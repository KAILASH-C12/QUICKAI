import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      <div className="text-center">
        <h2 className="text-slate-600 text-[42px] font-semibold">
          Powerful AI Tools
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Everything you need to create,enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "2.5rem",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            style={{
              padding: "2rem",
              margin: "1rem",
              maxWidth: "20rem",
              borderRadius: "0.5rem",
              backgroundColor: "#FDFDFE",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              border: "1px solid #f3f4f6",
              transition: "all 0.3s ease",
              cursor: "pointer",
              transform: "none", // initial transform before hover
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-0.25rem)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <tool.Icon
              style={{
                width: "3rem",
                height: "3rem",
                padding: "0.75rem",
                color: "white",
                borderRadius: "0.75rem",
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
                display: "block",
              }}
            />
            <h3
              style={{
                marginTop: "1.5rem",
                marginBottom: "0.75rem",
                fontSize: "1.125rem",
                fontWeight: 600,
              }}
            >
              {tool.title}
            </h3>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.875rem",
                maxWidth: "95%",
              }}
            >
              {tool.description}
            </p>
          </div>
        ))}
      </div>

      {/* <div className='flex flex-wrap mt-10 justify-center gap-8'>
            {AiToolsData.map((tool, index) => (
                <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer' onClick={() => user && navigate(tool.path)}>
                    <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl' style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}/>
                    <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
                    <p className='text-gray-400 text-sm max-w-[95%]'>{tool.description}</p>
                </div>
            ))}
        </div> */}
    </div>
  );
};

export default AiTools;
