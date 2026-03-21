import { memo, useState, useEffect } from 'react';
import { Play } from 'lucide-react';

export const VSLPlayer = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      // Dynamically load the script only when needed
      const script = document.createElement('script');
      script.src = 'https://app.litevideo.net/p.js';
      script.async = true;
      document.head.appendChild(script);

      return () => {
        // Optional: cleanup if needed, but usually scripts are fine to stay
      };
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div 
        className="relative w-full max-w-md md:max-w-2xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mb-8 border-4 border-white bg-slate-900 aspect-[9/16] group cursor-pointer flex items-center justify-center"
        onClick={() => setIsLoaded(true)}
      >
        {/* Thumbnail Facade */}
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
          {/* Background Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-50" />
          
          {/* Mock Video Content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-full h-full bg-[url('https://i.imgur.com/YOAt61G.png')] bg-cover bg-center blur-sm" />
          </div>

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
    <div className="relative w-full max-w-md md:max-w-2xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mb-8 border-4 border-white bg-slate-900 aspect-[9/16] group">
      <div className="relative z-10" dangerouslySetInnerHTML={{
        __html: `<lt-v2 v="fd06ccd4-50ba-460b-93b0-5f2dad01538d" ar="9:16" p="ph=8&pi=s&sc=0&pc=dd6808"></lt-v2>`
      }} />
    </div>
  );
});
VSLPlayer.displayName = 'VSLPlayer';
