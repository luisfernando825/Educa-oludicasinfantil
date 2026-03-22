import { memo, useState, lazy, Suspense } from 'react';
import { Play } from 'lucide-react';

// Lazy load the actual video player component
const RealVSLPlayer = lazy(() => import('./RealVSLPlayer').then(m => ({ default: m.RealVSLPlayer })));

export const VSLPlayer = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return (
      <div 
        className="relative w-full max-w-sm md:max-w-xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mb-8 border-4 border-white bg-slate-900 aspect-[9/16] group cursor-pointer flex items-center justify-center"
        onClick={(e) => { e.stopPropagation(); setIsLoaded(true); }}
      >
        {/* Tag Picture com AVIF e WebP */}
        <picture className="absolute inset-0 w-full h-full">
          <source type="image/avif" srcSet="https://i.imgur.com/VKCgs8s.avif" />
          <source type="image/webp" srcSet="https://i.imgur.com/VKCgs8s.webp" />
          <img 
            src="https://i.imgur.com/VKCgs8s.webp" 
            alt="Clique para assistir ao vídeo"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
            loading="eager"
            fetchPriority="high"
            width="600"
            height="1066"
          />
        </picture>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-[#FF5A1F] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,90,31,0.5)] group-hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            </div>
            <p className="text-white font-bold text-lg tracking-tight uppercase">Clique para assistir</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="relative w-full max-w-sm md:max-w-xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mb-8 border-4 border-white bg-slate-900 aspect-[9/16] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#FF5A1F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <RealVSLPlayer />
    </Suspense>
  );
});
VSLPlayer.displayName = 'VSLPlayer';
