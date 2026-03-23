import React from "react";

function ClipPathImage8() {
  return (
    <>
      {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="differentone2" clipPathUnits="objectBoundingBox">
            <path
              d="M1 0.4375C1 0.372348 0.980915 0.308622 0.945092 0.254202C0.90927 0.199781 0.858284 0.157052 0.798438 0.131296C0.738593 0.10554 0.672511 0.0978875 0.608363 0.109283C0.544215 0.120679 0.484813 0.150624 0.4375 0.195417V7.18083e-10C0.372348 -4.27489e-06 0.308622 0.0190849 0.254202 0.0549077C0.199781 0.0907305 0.157052 0.141716 0.131296 0.201562C0.10554 0.261407 0.0978875 0.327489 0.109283 0.391637C0.120679 0.455785 0.150624 0.515187 0.195417 0.5625H7.18083e-10C-4.27489e-06 0.627653 0.0190849 0.691378 0.0549077 0.745798C0.0907305 0.800219 0.141716 0.842948 0.201562 0.868704C0.261407 0.89446 0.327489 0.902113 0.391637 0.890717C0.455785 0.879321 0.515187 0.849376 0.5625 0.804583V1C0.627653 1 0.691378 0.980915 0.745798 0.945092C0.800219 0.90927 0.842948 0.858284 0.868704 0.798438C0.89446 0.738593 0.902113 0.672511 0.890717 0.608363C0.879321 0.544215 0.849376 0.484813 0.804583 0.4375H1ZM0.5625 0.5625H0.4375V0.4375H0.5625V0.5625Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Image with clip path applied */}
      <div
        style={{
          clipPath: "url(#differentone2)",
          WebkitClipPath: "url(#differentone2)",
          backgroundImage:
            "linear-gradient(to top right, #FFDAB9, #FF8C00), url(/noise.webp)",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover, 30%",
        }}
        className="w-[120px] h-full opacity-100 mask-[radial-gradient(#fff,transparent_75%)]"
      />
    </>
  );
}

export default ClipPathImage8; 
