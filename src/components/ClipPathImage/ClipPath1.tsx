import React from 'react';

function ClipPathImage1() {
  return (
    <>
      {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="differentone2" clipPathUnits="objectBoundingBox">
            <path
              d="M0 0.75L0.25 0.5L0.5 0.75L0.25 1L0 0.75L0.25 0.5L0 0.25L0.25 0L0.5 0.25L0.25 0.5L0 0.25H0.5L0.75 0L1 0.25L0.75 0.5L0.5 0.25L0.25 0.5L0.5 0.75L0.75 0.5L1 0.75L0.75 1L0.5 0.75H0Z"
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

export default ClipPathImage1;