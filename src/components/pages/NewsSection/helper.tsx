export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  type: "announcement" | "tutorial" | "news" | "partnership";
  image_url: string;
  created_at: string;
};

// Dữ liệu tiếng Việt
export const viBlogs: BlogPost[] = [
  {
    id: 1,
    title: "Pione Chain chính thức ra mắt Mainnet vào Q4 2025",
    slug: "pione-chain-ra-mat-mainnet",
    summary:
      "Mainnet Pione Chain sẽ ra mắt ngày 15/12/2025 với TPS 100,000+ và phí gas gần bằng 0.",
    content: `
      <h2>Chào mừng đến với Mainnet Pione Chain!</h2>
      <p>Sau 2 năm phát triển không ngừng, chúng tôi tự hào công bố <strong>Mainnet Pione Chain</strong> sẽ chính thức ra mắt vào <strong>15/12/2025</strong>.</p>

      <h3>Điểm nổi bật</h3>
      <ul>
        <li>Tốc độ: <strong>100,000+ TPS</strong></li>
        <li>Phí gas: <strong>$0.0001</strong>/giao dịch</li>
        <li>EVM tương thích 100%</li>
        <li>Hỗ trợ cross-chain với BSC, Polygon, Solana</li>
      </ul>

      <div class="bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-xl text-white my-6">
        <p class="font-bold">Airdrop 10 triệu PIONE cho người dùng sớm!</p>
        <p class="text-sm mt-1">Staking ngay trên <a href="#" class="underline">Pione Wallet</a></p>
      </div>

      <h3>Lộ trình</h3>
      <p><strong>Tháng 11</strong>: Audit bởi CertiK<br>
         <strong>15/12</strong>: <span class="text-green-400 font-bold">MAINNET LAUNCH</span></p>

      <blockquote class="border-l-4 border-orange-500 pl-4 italic text-gray-300 my-8">
        "Pione Chain sẽ là Layer 1 nhanh nhất Đông Nam Á." — <strong>CEO Pione Labs</strong>
      </blockquote>
    `,
    image_url:
      "https://images.unsplash.com/photo-1621503854074-7dd24b5d7f5b?w=1200&h=600&fit=crop",
    type: "announcement",
    created_at: "2025-10-25T14:20:00Z",
  },
  {
    id: 2,
    title: "Hướng dẫn Staking PIONE Token trên Pione Wallet",
    slug: "staking-pione-token",
    summary:
      "Hướng dẫn chi tiết từng bước staking PIONE để nhận thưởng lên đến 18% APY.",
    content: `
      <h2>Cách Staking PIONE Token để nhận thưởng</h2>
      <p>Staking là cách đơn giản nhất để gia tăng tài sản mà không cần giao dịch.</p>

      <h3>Các bước thực hiện</h3>
      <ol>
        <li><strong>Tải Pione Wallet</strong>: App Store / Google Play</li>
        <li><strong>Tạo hoặc import ví</strong></li>
        <li><strong>Chuyển PIONE vào ví</strong></li>
        <li>Chọn <strong>Staking → PIONE Pool</strong></li>
        <li>Nhập số lượng → Xác nhận</li>
      </ol>

      <div class="bg-zinc-800 p-5 rounded-lg my-6 border border-zinc-700">
        <p class="text-sm"><strong>APY hiện tại:</strong> <span class="text-green-400 text-xl font-bold">18.5%</span></p>
        <p class="text-xs text-gray-400 mt-1">Thưởng được cộng hàng ngày, rút linh hoạt</p>
      </div>

      <p><strong>Lưu ý</strong>: Phí rút thưởng: 0.5%. Không khóa vốn.</p>
    `,
    image_url:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop",
    type: "tutorial",
    created_at: "2025-10-20T09:15:00Z",
  },
  {
    id: 3,
    title: "Pione Chain hợp tác chiến lược với Binance Labs",
    slug: "binance-labs-dau-tu-pione",
    summary:
      "Binance Labs chính thức rót vốn vòng Seed cho Pione Chain với định giá 500 triệu USD.",
    content: `
      <h2>Binance Labs đầu tư vào Pione Chain</h2>
      <p>Chúng tôi vui mừng thông báo <strong>Binance Labs</strong> đã dẫn dắt vòng Seed với số vốn <strong>25 triệu USD</strong>.</p>

      <h3>Mục tiêu hợp tác</h3>
      <ul>
        <li>Phát triển hệ sinh thái DeFi trên Pione Chain</li>
        <li>Niêm yết PIONE trên Binance trong Q1 2026</li>
        <li>Hỗ trợ kỹ thuật từ team Binance</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" alt="Binance Labs" class="rounded-lg my-6 w-full" />

      <p>Theo đại diện Binance Labs: <em>"Pione Chain có tiềm năng trở thành Layer 1 hàng đầu châu Á."</em></p>
    `,
    image_url:
      "https://images.unsplash.com/photo-1518186288438-02d94b5e9c58?w=1200&h=600&fit=crop",
    type: "partnership",
    created_at: "2025-10-15T11:45:00Z",
  },
];

// Dữ liệu tiếng Anh
export const enBlogs: BlogPost[] = [
  {
    id: 1,
    title: "Pione Chain Mainnet Launches in Q4 2025",
    slug: "pione-chain-mainnet-launch",
    summary:
      "Pione Chain Mainnet goes live on December 15, 2025 with 100,000+ TPS and near-zero gas fees.",
    content: `
      <h2>Welcome to Pione Chain Mainnet!</h2>
      <p>After 2 years of development, we're proud to announce <strong>Pione Chain Mainnet</strong> launches on <strong>December 15, 2025</strong>.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Speed: <strong>100,000+ TPS</strong></li>
        <li>Gas fee: <strong>$0.0001</strong>/tx</li>
        <li>100% EVM compatible</li>
        <li>Native cross-chain with BSC, Polygon, Solana</li>
      </ul>

      <div class="bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-xl text-white my-6">
        <p class="font-bold">10M PIONE Airdrop for Early Users!</p>
        <p class="text-sm mt-1">Stake now on <a href="#" class="underline">Pione Wallet</a></p>
      </div>

      <blockquote class="border-l-4 border-orange-500 pl-4 italic text-gray-300 my-8">
        "Pione Chain will be the fastest Layer 1 in Southeast Asia." — <strong>CEO, Pione Labs</strong>
      </blockquote>
    `,
    image_url:
      "https://images.unsplash.com/photo-1621503854074-7dd24b5d7f5b?w=1200&h=600&fit=crop",
    type: "announcement",
    created_at: "2025-10-25T14:20:00Z",
  },
  // ... thêm 2 bài en tương tự nếu cần
];
