import React from "react";

function ClipPathImage2() {
  return (
    <>
      {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-goey6" clipPathUnits="objectBoundingBox">
            <path
              d="M0.0249688 0C0.0111789 0 0 0.0112775 0 0.0251889V0.851385C0 0.865297 0.0111789 0.876574 0.0249688 0.876574H0.179775V0.974811C0.179775 0.988723 0.190954 1 0.204744 1H0.975031C0.988821 1 1 0.988723 1 0.974811V0.157431C1 0.143519 0.988821 0.132242 0.975031 0.132242H0.810237V0.0251889C0.810237 0.0112775 0.799058 0 0.785268 0H0.0249688Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Image with clip path applied */}
      <div
        style={{
          clipPath: "url(#clip-goey6)",
          WebkitClipPath: "url(#clip-goey6)",
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

export default ClipPathImage2;
