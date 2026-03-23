import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  "https://i.imgur.com/6nUY4py.webp",
  "https://i.imgur.com/I03h2on.webp",
  "https://i.imgur.com/NglAwWr.webp",
  "https://i.imgur.com/vx9ljKJ.webp"
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-sm md:max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] bg-slate-100 border-4 border-white">
        {testimonials.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Depoimento ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>
      
      <div 
        role="button"
        tabIndex={0}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }} 
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); prev(); } }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-3 rounded-full shadow-xl z-20 text-slate-800 hover:text-[#FF5A1F] hover:scale-110 transition-all cursor-pointer"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </div>
      
      <div 
        role="button"
        tabIndex={0}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }} 
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); next(); } }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-3 rounded-full shadow-xl z-20 text-slate-800 hover:text-[#FF5A1F] hover:scale-110 transition-all cursor-pointer"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(index); }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); setCurrentIndex(index); } }}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? 'bg-[#FF5A1F] scale-125' : 'bg-slate-300 hover:bg-slate-400'}`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
