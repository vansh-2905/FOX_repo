"use client";

import { useEffect, useState } from "react";
import { FeaturedCarousel } from "@/components/featured-carousel";
import { CategorySection } from "@/components/category-section";
import { shows } from "@/lib/data/shows";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black">
      <FeaturedCarousel />
      {Object.entries(shows)
        .filter(([category]) => category !== "featured")
        .map(([category, categoryShows]) => (
          <CategorySection 
            key={category} 
            title={category} 
            shows={categoryShows} 
          />
        ))}
    </main>
  );
}