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
    <div className="relative w-full max-w-md md:max-w-2xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mb-8 border-4 border-white bg-slate-900 aspect-[9/16] group">
      <div className="relative z-10" dangerouslySetInnerHTML={{
        __html: `<lt-v2 v="fd06ccd4-50ba-460b-93b0-5f2dad01538d" ar="9:16" p="ph=8&pi=s&sc=0&pc=dd6808"></lt-v2>`
      }} />
    </div>
  );
});

RealVSLPlayer.displayName = 'RealVSLPlayer';
