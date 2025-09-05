import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <>
      {/* <div className='max-w-2xl mx-auto z-20 my-30'>
        <div className='text-center'></div>
        <h2 className='text-slate-700 text-[42px] font-semibold'>Choose your Plan</h2>
        <p className='text-gray-500 max-w-lg mx-auto '>Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
    </div>

    <div className='mt-14 '>
        <PricingTable />
    </div> */}
      <div
        style={{
          maxWidth: "42rem", // max-w-2xl ~ 672px
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: 20,
          marginTop: "7.5rem", // my-30 (approx 120px), applying only top margin here for bottom consistency
          marginBottom: "7.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#334155", // text-slate-700
            fontSize: "42px",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          Choose your Plan
        </h2>
        <p
          style={{
            color: "#6b7280", // text-gray-500
            maxWidth: "36rem", // max-w-lg ~ 576px
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Start for free and scale up as you grow. Find the perfect plan for
          your content creation needs.
        </p>
      </div>

      <div
        style={{
          maxWidth: "82rem", // max-w-2xl ~ 672px
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: 20,
          marginTop: "3.5rem", // mt-14 ~ 56px
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderCollapse: "collapse",
          borderSpacing: 0,
        }}
      >
        <PricingTable />
      </div>
    </>
  );
};

export default Plan;
