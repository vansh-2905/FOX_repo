"use client";

import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { shows } from "@/lib/data/shows";
import useEmblaCarousel from "embla-carousel-react";

export function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false,
    duration: 20
  });
  const autoplayRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!emblaApi) return;

    const startAutoplay = () => {
      stopAutoplay();
      autoplayRef.current = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        }
      }, 2000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };

    const onMouseEnter = () => stopAutoplay();
    const onMouseLeave = () => startAutoplay();

    startAutoplay();
    
    const rootNode = emblaApi.rootNode();
    rootNode.addEventListener('mouseenter', onMouseEnter);
    rootNode.addEventListener('mouseleave', onMouseLeave);

    emblaApi.on('destroy', stopAutoplay);

    return () => {
      stopAutoplay();
      if (rootNode) {
        rootNode.removeEventListener('mouseenter', onMouseEnter);
        rootNode.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [emblaApi]);

  return (
    <section className="relative bg-background group">
      <div className="relative h-[80vh]">
        <Carousel
          ref={emblaRef}
          className="w-full h-full"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {shows.featured.map((show) => (
              <CarouselItem key={show.id} className="w-full">
                <div className="relative w-full h-[80vh]">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-4xl font-bold text-white mb-2">
                      {show.title}
                    </h3>
                    {show.genre && (
                      <span className="text-xl text-white/90">{show.genre}</span>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 bg-black/50 hover:bg-black/70 border-primary text-primary" />
          <CarouselNext className="absolute right-4 bg-black/50 hover:bg-black/70 border-primary text-primary" />
        </Carousel>
      </div>
    </section>
  );
}