"use client";

import React from "react";

export const FeaturedProjects = () => {
  return (
    <div className="py-24 w-full px-6 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center lg:items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center gap-8 lg:sticky lg:top-32 pt-8">
            <div className="flex items-center gap-3 text-xs text-gray-400 uppercase tracking-[0.2em] font-semibold">
              <span className="w-2 h-2 bg-[#ff6a00]"></span>
              Dự án nổi bật
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
              Khám phá các <br className="hidden lg:block" /> dự án tiên phong.
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              Chúng tôi xây dựng các công cụ và ứng dụng phi tập trung chất lượng cao để thúc đẩy sự phát triển bền vững của hệ sinh thái Pione Chain.
            </p>
            
            <div className="pt-4">
              <button className="flex items-center gap-4 group cursor-pointer border-none bg-transparent p-0">
                <div className="w-12 h-12 rounded bg-[#ff6a00] flex items-center justify-center text-white transition-transform duration-300 group-hover:bg-[#E74041]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <span className="text-xs text-gray-300 font-mono uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
                  Xem tất cả
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="w-full lg:w-[65%]">
            <div className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar">
              
              {/* Card 1: PioneTrace */}
              <div className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-start bg-[#111111] rounded-[24px] overflow-hidden group cursor-pointer border border-white/5 hover:border-[#ff6a00]/20 transition-all duration-500 hover:-translate-y-2">
                <div className="h-[260px] md:h-[320px] bg-[#1a0800] relative overflow-hidden flex items-center justify-center">
                  <span className="text-[#ff6a00] font-mono text-2xl md:text-3xl opacity-80 font-semibold z-10 group-hover:scale-110 transition-transform duration-700">&lt;PioneTrace /&gt;</span>
                  {/* Glowing effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-[#ff6a00] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                  {/* Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#ff6a00] transition-colors duration-300">PioneTrace</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Công cụ Explorer hàng đầu cung cấp khả năng truy xuất nguồn gốc, theo dõi giao dịch và hợp đồng thông minh một cách minh bạch, an toàn.
                  </p>
                </div>
              </div>

              {/* Card 2: PioneWallet */}
              <div className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-start bg-[#111111] rounded-[24px] overflow-hidden group cursor-pointer border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="h-[260px] md:h-[320px] bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
                  <span className="text-gray-500 font-mono text-2xl md:text-3xl opacity-70 font-semibold z-10 group-hover:scale-110 transition-transform duration-700 group-hover:text-white">&lt;PioneWallet /&gt;</span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-[80px] opacity-5 group-hover:opacity-10 transition-opacity duration-700"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3">PioneWallet</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Ví tiền điện tử đa năng, bảo mật cao giúp lưu trữ, gửi và nhận tài sản kỹ thuật số trên mạng lưới một cách dễ dàng và nhanh chóng.
                  </p>
                </div>
              </div>

              {/* Card 3: PioneSwap */}
              <div className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-start bg-[#111111] rounded-[24px] overflow-hidden group cursor-pointer border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="h-[260px] md:h-[320px] bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
                  <span className="text-gray-500 font-mono text-2xl md:text-3xl opacity-70 font-semibold z-10 group-hover:scale-110 transition-transform duration-700 group-hover:text-white">&lt;PioneSwap /&gt;</span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-[80px] opacity-5 group-hover:opacity-10 transition-opacity duration-700"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3">PioneSwap</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Sàn giao dịch phi tập trung (DEX) cung cấp thanh khoản tối ưu, cho phép hoán đổi token với mức phí thấp nhất và độ trượt giá tối thiểu.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

