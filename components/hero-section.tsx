"use client";

import { PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1600&auto=format&fit=crop"
          alt="Hero Background"
          className="object-cover w-full h-full brightness-50"
        />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-4">Welcome to FOX</h1>
        <p className="text-xl mb-8">Your premier destination for endless entertainment</p>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
          <PlayCircle className="w-5 h-5" />
          Start Watching
        </button>
      </div>
    </section>
  );
}
