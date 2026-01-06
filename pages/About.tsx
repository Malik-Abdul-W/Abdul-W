
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="About ReadySite | Premium Ready-Made Website Marketplace" 
        description="Learn about ReadySite Marketplace. We provide professional, pre-built websites to help entrepreneurs launch faster. Discover our mission to simplify the way you buy websites online."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-6">
              OUR MISSION
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              We're changing the way <span className="text-indigo-600">Digital Businesses</span> start.
            </h1>
            <div className="prose prose-slate text-slate-600 space-y-6">
              <p className="text-lg">
                At ReadySite, we believe that the biggest barrier to starting a business shouldn't be technical. 
                Waiting 3-6 months for a custom website can kill the momentum of a great idea.
              </p>
              <p>
                Founded by a team of senior developers and SEO experts, we noticed a gap in the market: 
                Entrepreneurs needed high-quality, production-ready websites that they could own instantly. 
                Not generic builders, but real code built for performance.
              </p>
              <p>
                Our mission is to empower entrepreneurs by providing a library of professionally engineered 
                websites that are ready for immediate launch. We handle the complex development so you can 
                focus on what matters most—growing your business.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-indigo-100 rounded-[3rem] overflow-hidden relative shadow-2xl">
              <img src="https://picsum.photos/seed/about-img/800/1000" alt="Team working" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">10+</div>
              <div className="text-slate-900 font-bold mb-1">Years Experience</div>
              <p className="text-slate-500 text-sm">Deep expertise in full-stack development and SEO.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-slate-100 mb-24">
          {[
            { label: 'Websites Sold', value: '250+' },
            { label: 'Happy Customers', value: '180+' },
            { label: 'Team Members', value: '12' },
            { label: 'Global Reach', value: '35+' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Why Trust <span className="text-indigo-600">ReadySite?</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Our values define how we build and how we treat our customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { 
              title: 'Quality First', 
              desc: 'We never compromise on code quality. Every site is rigorously tested for speed, SEO, and security.',
              icon: 'fa-star'
            },
            { 
              title: 'Transparent Pricing', 
              desc: 'No hidden fees or recurring costs. What you see is what you pay for the entire codebase.',
              icon: 'fa-tag'
            },
            { 
              title: 'Lifetime Ownership', 
              desc: 'When you buy from us, the site is yours. Forever. No proprietary "platforms" locking you in.',
              icon: 'fa-key'
            }
          ].map((value, idx) => (
            <div key={idx} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                <i className={`fas ${value.icon} text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA for internal linking */}
        <div className="bg-indigo-50 rounded-[2.5rem] p-12 md:p-16 text-center border border-indigo-100">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Ready to find your perfect website?</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">Join hundreds of entrepreneurs who saved months of work by choosing ReadySite.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/websites" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                    Browse All Sites
                </Link>
                <Link to="/contact" className="bg-white text-indigo-600 border border-indigo-200 px-8 py-4 rounded-xl font-bold hover:border-indigo-600 transition-all">
                    Contact Our Team
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
