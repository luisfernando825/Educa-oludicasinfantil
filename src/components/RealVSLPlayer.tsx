import { memo, useEffect } from 'react';

export const RealVSLPlayer = memo(() => {
  useEffect(() => {
    // Dynamically load the script only when the component mounts (after user clicks play)
    const script = document.createElement('script');
    script.src = 'https://app.litevideo.net/p.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm md:max-w-xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mb-8 border-4 border-white bg-slate-900 aspect-[9/16] group">
      <div className="relative z-10" dangerouslySetInnerHTML={{
        __html: `<lt-v2 v="24b04097-3207-473e-81f4-3198d2204571" ar="9:16" p="ph=8&sc=0&pc=e15509"></lt-v2>`
      }} />
    </div>
  );
});

RealVSLPlayer.displayName = 'RealVSLPlayer';
