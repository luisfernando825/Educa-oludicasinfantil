import { memo } from 'react';

const materials = [
  "https://i.imgur.com/JQOal4s.webp",
  "https://i.imgur.com/A3r6wX0.webp",
  "https://i.imgur.com/yM5I7LT.webp",
  "https://i.imgur.com/xTF8pTf.webp",
  "https://i.imgur.com/1s4lj4w.webp",
  "https://i.imgur.com/xD4B8M9.webp",
  "https://i.imgur.com/HXwtksq.webp",
  "https://i.imgur.com/JQOal4s.webp",
  "https://i.imgur.com/A3r6wX0.webp",
  "https://i.imgur.com/yM5I7LT.webp",
  "https://i.imgur.com/xTF8pTf.webp",
  "https://i.imgur.com/1s4lj4w.webp",
  "https://i.imgur.com/xD4B8M9.webp",
  "https://i.imgur.com/HXwtksq.webp",
];

export const MaterialsShowcase = memo(() => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
        Alguns materiais que você irá receber
      </h2>
    </div>
      
    <div className="relative mt-8">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex gap-6 w-max py-8 px-6 will-change-transform animate-marquee"
      >
        {materials.map((src, index) => (
          <div key={index} className="w-64 md:w-80 aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex-shrink-0">
            <img 
              src={src} 
              alt={`Material ${index}`} 
              className="w-full h-full object-contain p-4"
              referrerPolicy="no-referrer"
              loading="lazy"
              width="320"
              height="426"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
));

MaterialsShowcase.displayName = 'MaterialsShowcase';
