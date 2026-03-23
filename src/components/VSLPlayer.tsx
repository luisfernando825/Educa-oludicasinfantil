import { memo, useState, lazy, Suspense } from 'react';

// Lazy load the actual video player component
const RealVSLPlayer = lazy(() => import('./RealVSLPlayer').then(m => ({ default: m.RealVSLPlayer })));

export const VSLPlayer = memo(() => {
  const [isClicked, setIsClicked] = useState(false);

  if (!isClicked) {
    return (
      <div 
        onClick={() => setIsClicked(true)}
        className="relative w-full max-w-sm md:max-w-xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mb-8 border-4 border-white bg-slate-900 aspect-[9/16] flex items-center justify-center cursor-pointer group"
      >
        <picture className="absolute inset-0 w-full h-full">
          <source type="image/webp" srcSet="https://i.imgur.com/VKCgs8s.webp" />
          <img 
            src="https://i.imgur.com/VKCgs8s.webp" 
            alt="Clique para assistir ao vídeo" 
            width="720"
            height="1280"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
            fetchPriority="high"
          />
        </picture>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative z-10 flex flex-col items-center gap-4 transform group-hover:scale-110 transition-transform duration-300">
            <div className="w-20 h-20 bg-[#FF5A1F] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,90,31,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
            <p className="text-white font-bold text-lg tracking-tight uppercase drop-shadow-md m-0">
              Clique para assistir
            </p>
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
