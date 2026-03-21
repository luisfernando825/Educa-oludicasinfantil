import { memo, type ReactNode } from 'react';

export const SectionTitle = memo(({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${light ? 'text-white' : 'text-slate-900'}`}>
    {children}
  </h2>
));
SectionTitle.displayName = 'SectionTitle';
