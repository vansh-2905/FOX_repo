"use client";

import { PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Show } from "@/lib/data/shows";
import { useRouter } from "next/navigation";

type ShowCardProps = {
  show: Show;
  showGenre?: boolean;
  featured?: boolean;
};

export function ShowCard({ show, showGenre = false, featured = false }: ShowCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (show.title === "Desert Storm") {
      router.push("/technologies");
    } else if (show.title === "Urban Warriors") {
      router.push("/me");
    }
  };

  return (
    <Card 
      className="border-0 group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <CardContent className="p-0 relative">
        <img
          src={show.image}
          alt={show.title}
          className={`w-full object-cover rounded-lg ${
            featured ? 'aspect-[16/9]' : 'aspect-[16/10]'
          }`}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
          <PlayCircle className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
          <h3 className="text-xl text-white font-semibold mb-2">
            {show.title}
          </h3>
          {showGenre && show.genre && (
            <span className="text-white/80 text-base">{show.genre}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}