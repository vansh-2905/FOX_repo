"use client";

import { useState } from "react";

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["News", "Business", "Nation", "Sports", "Weather", "Tubi TV", "Local"];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`absolute bottom-16 right-0 flex flex-col-reverse gap-3 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
              className={`px-6 py-2 bg-black/90 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all duration-300 text-right w-full ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg hover:bg-primary/80 transition-all duration-300 transform hover:scale-105"
        >
          F
        </button>
      </div>
    </>
  );
}
