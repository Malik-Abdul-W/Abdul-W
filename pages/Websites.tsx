
import React, { useState, useMemo, useEffect } from 'react';
import SEO from '../components/SEO';
import WebsiteCard from '../components/WebsiteCard';
import SkeletonCard from '../components/SkeletonCard';
import { WEBSITES } from '../constants';

const Websites: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Initial load simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter change simulation
  const handleFilterChange = (newCategory: string) => {
    setIsLoading(true);
    setCategory(newCategory);
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // Debounced-style loading trigger
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  };

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(WEBSITES.map(w => w.category)))];
  }, []);

  const filteredWebsites = useMemo(() => {
    return WEBSITES.filter(w => {
      const matchesSearch = w.title.toLowerCase().includes(search.toLowerCase()) || 
                            w.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || w.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Browse Ready-Made Websites for Sale | Website Marketplace" 
        description="Explore our full collection of professional ready-made websites for sale. Buy a website online today and launch your business instantly with our high-quality templates."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our <span className="text-indigo-600">Inventory</span></h1>
          <p className="text-slate-600">
            Explore our curated list of professional websites. Each one is a complete product ready to be moved to your domain.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Search websites..."
              value={search}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-6 py-3 rounded-xl font-bold transition-all text-sm ${category === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-600 hover:text-indigo-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid or Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
          </div>
        ) : filteredWebsites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebsites.map(website => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <i className="fas fa-search-minus text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No websites found</h3>
            <p className="text-slate-600">Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => { setSearch(''); handleFilterChange('All'); }}
              className="mt-6 text-indigo-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Websites;
