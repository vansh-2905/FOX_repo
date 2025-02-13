"use client";

import { PlayCircle, Plus } from "lucide-react";

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=1920&h=1080&fit=crop"
            alt="Desert Storm"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
          <div>
            <div className="flex items-center gap-4 text-white/80 mb-2">
              <img src="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=50&h=50&fit=crop" alt="" className="w-12 h-12 rounded-full" />
              <span>FOX</span>
              <span>|</span>
              <span>Thursdays at 9/8c</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">DESERT STORM</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Elite operatives navigate treacherous desert terrain in this high-stakes military action series.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white/80">
              Season 1 (12 Episodes) • Action, Military • TV-MA
            </p>
            
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Start Watching
              </button>
              <button className="bg-black/50 hover:bg-black/70 text-white px-8 py-3 rounded-full flex items-center gap-2 backdrop-blur-sm border border-white/20">
                <Plus className="w-5 h-5" />
                Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Season 23</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer">
              <img 
                src={`https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=400&h=225&fit=crop&q=80`}
                alt={`Episode ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div>
                  <p className="text-white/60 text-sm">Episode {i + 1}</p>
                  <h3 className="text-white font-semibold">Operation Sandstorm</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
