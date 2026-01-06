
import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-pulse">
      <div className="aspect-video bg-slate-200"></div>
      <div className="p-6 space-y-4">
        <div className="h-6 bg-slate-200 rounded-md w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-100 rounded-md"></div>
          <div className="h-4 bg-slate-100 rounded-md w-5/6"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 bg-slate-50 rounded-md w-12"></div>
          <div className="h-6 bg-slate-50 rounded-md w-12"></div>
          <div className="h-6 bg-slate-50 rounded-md w-12"></div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-4">
          <div className="space-y-1">
            <div className="h-3 bg-slate-100 rounded w-8"></div>
            <div className="h-6 bg-slate-200 rounded w-16"></div>
          </div>
          <div className="h-10 bg-slate-100 rounded-xl w-28"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
