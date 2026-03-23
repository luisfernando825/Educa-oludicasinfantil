import { memo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const materials = [
  "https://i.imgur.com/h16h3Dw.webp",
  "https://i.imgur.com/aWqR5co.webp",
  "https://i.imgur.com/Qnqf63f.webp",
  "https://i.imgur.com/Gamlx3y.webp",
];

export const MaterialsShowcase = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % materials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + materials.length) % materials.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          🎨 Exemplos de atividades lúdicas
        </h2>
        
        <div className="relative max-w-lg mx-auto">
          <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative group">
            <img 
              src={materials[currentIndex]} 
              alt={`Exemplo de atividade ${currentIndex + 1}`} 
              className="w-full h-full object-contain p-4 transition-opacity duration-300"
              referrerPolicy="no-referrer"
              loading="lazy"
              width="400"
              height="533"
            />
            
            {/* Navigation Buttons */}
            <button 
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-white transition-colors z-20"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-white transition-colors z-20"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {materials.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-orange-600 w-4' : 'bg-slate-300'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

MaterialsShowcase.displayName = 'MaterialsShowcase';
