
import React from 'react';
import { Link } from 'react-router-dom';
import { Website } from '../types';

interface Props {
  website: Website;
}

const WebsiteCard: React.FC<Props> = ({ website }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out group">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={website.images[0]} 
          alt={website.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
          {website.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {website.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {website.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {website.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100 group-hover:border-indigo-100 group-hover:bg-indigo-50/30 transition-colors duration-500">
              {tech}
            </span>
          ))}
          {website.technologies.length > 3 && (
            <span className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">+{website.technologies.length - 3}</span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-medium">Price</span>
            <span className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">${website.price}</span>
          </div>
          <Link 
            to={`/websites/${website.slug}`} 
            className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 group/link bg-indigo-50 px-4 py-2 rounded-xl transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white"
          >
            View Details
            <i className="fas fa-arrow-right transition-transform group-hover/link:translate-x-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
