"use client";

import { Film, Search, User, Tv } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-8 border border-primary/20">
      <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
        <Film className="w-5 h-5" />
        <span className="font-bold">FOY</span>
      </Link>
      
      <div className="flex items-center gap-6">
        <Link 
          href="/" 
          className="text-white/80 hover:text-primary transition-all transform hover:scale-110"
        >
          Home
        </Link>
        <Link 
          href="/sports" 
          className="text-white/80 hover:text-primary transition-all transform hover:scale-110"
        >
          Sports
        </Link>
        <Link 
          href="/local" 
          className="text-white/80 hover:text-primary transition-all transform hover:scale-110"
        >
          Local
        </Link>
        <Link 
          href="/news" 
          className="text-white/80 hover:text-primary transition-all transform hover:scale-110"
        >
          News
        </Link>
        <Link 
          href="/schedule" 
          className="text-white/80 hover:text-primary transition-all transform hover:scale-110"
        >
          Schedule
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white/80 hover:text-primary transition-all transform hover:scale-110">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-white/80 hover:text-primary transition-all transform hover:scale-110">
          <Tv className="w-5 h-5" />
        </button>
        <button className="text-white/80 hover:text-primary transition-all transform hover:scale-110">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}