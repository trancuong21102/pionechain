import React from "react";

const LoadingRadar: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-[250px] h-[250px] rounded-full border border-white/10 shadow-[25px_25px_75px_rgba(0,0,0,0.55)] overflow-hidden">
      {/* inner dashed rings */}
      <div className="absolute inset-4 rounded-full border border-dashed border-white/5 shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]" />
      <div className="absolute inset-12 rounded-full border border-dashed border-white/10 shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]" />
      <div className="absolute inset-24 rounded-full border border-dashed border-white/15 shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]" />

      {/* center dashed circle */}
      <div className="absolute w-[40px] h-[40px] rounded-full border border-dashed border-orange-500/30 shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]" />

      {/* radar sweep */}
      <span className="absolute top-1/2 left-1/2 w-1/2 h-full bg-transparent origin-top-left border-t border-dashed border-white/20 animate-[radar81_3s_linear_infinite]">
        <span className="absolute top-0 left-0 w-full h-full bg-[#FA5805] origin-top-left rotate-[-55deg] blur-[40px] drop-shadow-[20px_20px_20px_#FA5805] opacity-40" />
      </span>

      <style jsx>{`
        @keyframes radar81 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingRadar;
