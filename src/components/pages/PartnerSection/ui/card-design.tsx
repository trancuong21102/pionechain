import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PartnerData {
  id: number;
  name: string;
  logo: string;
  category: string; // ví dụ: "Technology Partner", "Strategic Partner"
  description: string;
  website: string;
}

interface PartnerCardProps {
  data: PartnerData;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ data }) => {
  const { name, logo, category, description, website } = data;

  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col gap-6">
      {/* Logo */}
      <div className="flex justify-center mb-3 h-[160px] items-center overflow-hidden">
        <Image
          src={logo}
          alt={name}
          width={200}
          height={200}
          className="rounded-lg object-contain opacity-90 group-hover:opacity-100 transition"
        />
      </div>

      {/* Name + Description */}
      <div className="flex flex-col gap-4 flex-1 justify-between">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-gray-300 text-sm mb-2">{description}</p>
        </div>
        <div>
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition"
          >
            <span>Visit Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
