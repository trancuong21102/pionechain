import React from "react";

function ClipPathImage6() {
  return (
    <>
      {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-goey2" clipPathUnits="objectBoundingBox">
            <path
              d="M0.524367 0.0169408C0.516013 -0.00564697 0.483987 -0.00564692 0.475633 0.0169409L0.355942 0.340559C0.353318 0.347653 0.347718 0.35325 0.340612 0.355881L0.0169359 0.47571C-0.00564523 0.48407 -0.00564523 0.51593 0.0169359 0.52429L0.340612 0.644119C0.347718 0.64675 0.353318 0.652347 0.355942 0.659441L0.475633 0.983059C0.483987 1.00565 0.516013 1.00565 0.524367 0.983059L0.644058 0.659441C0.646682 0.652347 0.652282 0.64675 0.659388 0.644119L0.983064 0.52429C1.00565 0.51593 1.00565 0.48407 0.983064 0.47571L0.659389 0.355881C0.652282 0.35325 0.646682 0.347653 0.644058 0.340559L0.524367 0.0169408Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>

      <div
        style={{
          clipPath: "url(#clip-goey2)",
          WebkitClipPath: "url(#clip-goey2)",
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

export default ClipPathImage6;
