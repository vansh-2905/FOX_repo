"use client";

import { ShowCard } from "@/components/show-card";
import type { Show } from "@/lib/data/shows";

type CategorySectionProps = {
  title: string;
  shows: Show[];
};

export function CategorySection({ title, shows }: CategorySectionProps) {
  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold capitalize mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
}