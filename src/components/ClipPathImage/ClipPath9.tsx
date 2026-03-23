import React from "react";

function ClipPathImage9() {
  return (
    <>
      {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="differentone2" clipPathUnits="objectBoundingBox">
             <path
              d="M0.5 0C0.367392 0 0.240215 0.0526784 0.146447 0.146447C0.0526784 0.240215 0 0.367392 0 0.5L0 1H0.5C0.632608 1 0.759785 0.947322 0.853553 0.853553C0.947322 0.759785 1 0.632608 1 0.5V0H0.5ZM0.5 0.75C0.433696 0.75 0.370107 0.723661 0.323223 0.676777C0.276339 0.629893 0.25 0.566304 0.25 0.5C0.25 0.433696 0.276339 0.370107 0.323223 0.323223C0.370107 0.276339 0.433696 0.25 0.5 0.25C0.566304 0.25 0.629893 0.276339 0.676777 0.323223C0.723661 0.370107 0.75 0.433696 0.75 0.5C0.75 0.566304 0.723661 0.629893 0.676777 0.676777C0.629893 0.723661 0.566304 0.75 0.5 0.75Z"
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

export default ClipPathImage9;  