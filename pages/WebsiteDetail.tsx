
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { WEBSITES } from '../constants';

const WebsiteDetail: React.FC = () => {
  const { slug } = useParams();
  const website = WEBSITES.find(w => w.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!website) {
    return <Navigate to="/websites" />;
  }

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title={website.title} 
        description={website.shortDescription}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <i className="fas fa-chevron-right text-[10px]"></i>
          <Link to="/websites" className="hover:text-indigo-600 transition-colors">Websites</Link>
          <i className="fas fa-chevron-right text-[10px]"></i>
          <span className="text-slate-900 truncate">{website.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Images Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[3/2] rounded-3xl overflow-hidden bg-slate-100 shadow-lg border border-slate-100">
              <img 
                src={website.images[activeImage]} 
                alt={website.title} 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            
            <div className="grid grid-cols-5 gap-4">
              {website.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-indigo-600 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Full Description</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>{website.longDescription}</p>
                <p>Built with modern architectural patterns, this template ensures that your business can scale without technical debt. We've prioritized user experience to make sure every visitor has a high chance of converting into a customer.</p>
              </div>
              
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i className="fas fa-check-circle text-indigo-500"></i> Core Features
                  </h3>
                  <ul className="space-y-3">
                    {website.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i className="fas fa-layer-group text-indigo-500"></i> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {website.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 sticky top-28">
              <div className="mb-6">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">{website.category}</span>
                <h1 className="text-3xl font-extrabold text-slate-900 mt-4 mb-2">{website.title}</h1>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5"><i className="fas fa-check-circle text-green-500"></i> In Stock</span>
                  <span className="flex items-center gap-1.5"><i className="fas fa-clock"></i> 48h Delivery</span>
                </div>
              </div>

              <div className="py-6 border-y border-slate-50 mb-8">
                <div className="text-sm text-slate-400 mb-1 font-medium uppercase tracking-wider">Purchase Price</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">${website.price}</span>
                  <span className="text-slate-400 text-sm">One-time payment</span>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href={`https://wa.me/1234567890?text=I'm interested in buying ${website.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:scale-[1.02] transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3"
                >
                  <i className="fab fa-whatsapp text-2xl"></i> Contact to Buy
                </a>
                
                <a 
                  href={website.demoUrl} 
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-3"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo Preview
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-50 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Secure Handover</h4>
                    <p className="text-xs text-slate-500">Full ownership transfer guaranteed.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <i className="fas fa-wrench"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Migration Support</h4>
                    <p className="text-xs text-slate-500">We help you set it up on your hosting.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <i className="fas fa-lightbulb absolute -right-4 -bottom-4 text-8xl opacity-10 rotate-12"></i>
              <h4 className="text-xl font-bold mb-4 relative z-10">Need Customizations?</h4>
              <p className="text-indigo-100 text-sm mb-6 relative z-10">
                Found a site you love but need some tweaks? We offer affordable customization services to make it perfectly yours.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-white hover:underline relative z-10">
                Let's discuss your needs <i className="fas fa-chevron-right text-[10px]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDetail;
