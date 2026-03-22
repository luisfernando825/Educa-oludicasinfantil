import { memo, useState, useEffect, lazy, Suspense } from 'react';

// Lazy load the actual video player component
const RealVSLPlayer = lazy(() => import('./RealVSLPlayer').then(m => ({ default: m.RealVSLPlayer })));

export const VSLPlayer = memo(() => {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    // Wait for the window load event to ensure everything is rendered
    const handleLoad = () => {
      // Small delay to ensure React has finished rendering and the page is stable
      setTimeout(() => setPageReady(true), 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!pageReady) {
    return (
      <div className="relative w-full max-w-sm md:max-w-xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mb-8 border-4 border-white bg-slate-100 aspect-[9/16] animate-pulse flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-400 rounded-full animate-spin"></div>
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
