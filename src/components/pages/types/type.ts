/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from "next/image";

export interface TagSystemItem {
  img: StaticImageData;
  title: string;
  desc: string;
  url: string;
  name: string;
  isComing: boolean;
}

export interface infoCardType {
  id: number;
  title: string;
  description: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  tele: string;
  linked: string;
  facebook: string;
  image: string; // Đây có thể là đường dẫn hoặc URL hình ảnh
  bio: any;
  // skills?: string[]; // Nếu bạn có một danh sách kỹ năng có thể bỏ dấu // phía trước
}

export interface InternalLinkProps {
  href: string;
  target: string;
  className?: string;
  children: React.ReactNode;
}

export interface MenuChildItem {
  name: string;
  link: string;
}

export interface NavItem {
  name: string;
  link: string;
  MenuChild?: MenuChildItem[];
}

export interface formContactData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface listPartnerRoot {
  status: boolean
  data: listPartnerData
  message: string
}

export interface listPartnerData {
  count: number
  rows: listPartnerRow[]
}

export interface listPartnerRow {
  id: number
  name: string
  description: string
  logo_url: string
  field_id: number[]
  field_name: string[]
  website_url: string
  twitter_url: string
  discord_url: any
  telegram_url?: string
  youtube_url: string
  active: boolean
  created_at: string
}
