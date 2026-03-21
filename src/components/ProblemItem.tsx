import { memo } from 'react';
import { AlertCircle } from 'lucide-react';

export const ProblemItem = memo(({ title, description }: { title: string; description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="mt-1">
      <AlertCircle className="w-6 h-6 text-red-500" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
));
ProblemItem.displayName = 'ProblemItem';
