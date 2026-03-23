import { memo, useState } from 'react';
import { Scissors, Palette, Brain, MessageCircle, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { BenefitCard } from './BenefitCard';
import { SectionTitle } from './SectionTitle';

const developments = [
  {
    icon: Scissors,
    title: "Coordenação Motora",
    description: "Desenvolve os movimentos das mãos e do corpo, ajudando a criança a cortar, pintar, montar e ter mais controle e precisão nas atividades do dia a dia."
  },
  {
    icon: Palette,
    title: "Criatividade e Imaginação",
    description: "Estimula a criança a criar, inventar e explorar ideias, desenvolvendo a capacidade de pensar fora do comum e se expressar de forma única."
  },
  {
    icon: Brain,
    title: "Raciocínio Lógico",
    description: "Ajuda a criança a pensar, resolver problemas e entender sequências, fortalecendo a tomada de decisões e o aprendizado."
  },
  {
    icon: MessageCircle,
    title: "Comunicação e Linguagem",
    description: "Melhora a forma de falar, ouvir e se expressar, ajudando a criança a se comunicar melhor e desenvolver o vocabulário."
  },
  {
    icon: Target,
    title: "Concentração e Atenção",
    description: "Aumenta o foco nas atividades, ajudando a criança a prestar mais atenção, concluir tarefas e evitar distrações."
  }
];

export const DevelopmentSlider = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % developments.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + developments.length) % developments.length);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>🧠 O que elas desenvolvem?</SectionTitle>
        
        <div className="relative max-w-xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {developments.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <BenefitCard 
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-orange-50 transition-colors z-20 border border-slate-100"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-orange-50 transition-colors z-20 border border-slate-100"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {developments.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#FF5A1F] w-6' : 'bg-slate-300'
                }`}
                aria-label={`Ir para item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

DevelopmentSlider.displayName = 'DevelopmentSlider';
