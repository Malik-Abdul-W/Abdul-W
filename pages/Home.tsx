
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import WebsiteCard from '../components/WebsiteCard';
import { WEBSITES } from '../constants';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
          <i className="fas fa-chevron-down text-xs"></i>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const featuredWebsites = WEBSITES.filter(w => w.isFeatured);

  const faqs = [
    {
      question: "What exactly is a 'ready-made' website?",
      answer: "A ready-made website is a pre-built, fully functional digital product. Instead of starting from scratch, you buy a finished codebase that includes design, functionality, and basic content. It's like buying a move-in ready house instead of building one."
    },
    {
      question: "How does the handover process work?",
      answer: "Once payment is confirmed, we'll reach out to coordinate the transfer. We provide a zip file of the entire source code, database exports, and documentation. If you need help, our team can assist with deploying it to your hosting provider."
    },
    {
      question: "Can I customize the website after purchase?",
      answer: "Absolutely! You get 100% ownership of the source code. You can change colors, logos, content, or add new features yourself. If you're not a developer, we offer affordable customization services to handle it for you."
    },
    {
      question: "Do I need to pay monthly fees to ReadySite?",
      answer: "No. Our business model is a one-time purchase. You pay for the website once, and it's yours forever. You'll only need to pay your own choice of hosting provider and domain registrar for ongoing maintenance."
    },
    {
      question: "What technologies are used in your websites?",
      answer: "We use modern, industry-standard stacks like React, Next.js, Tailwind CSS, and Node.js. Every site is built with clean code and follows SEO best practices to ensure high performance and scalability."
    }
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Ready-Made Websites for Sale | Buy Professional Websites Online" 
        description="Looking for websites for sale? ReadySite is the premier marketplace to buy ready-made websites online. Explore professional, SEO-optimized pre-built websites for e-commerce, SaaS, and more."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-6 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              The #1 Marketplace for Ready-Made Websites
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 animate-fade-in">
              Launch Your Next <span className="text-indigo-600">Digital Venture</span> in Minutes
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Skip the months of development. Browse our curated collection of professional, 
              SEO-optimized <span className="font-semibold text-slate-900 underline decoration-indigo-300 underline-offset-4">Ready-Made Websites</span> and start selling today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/websites" className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-2">
                Browse Websites <i className="fas fa-search"></i>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center gap-2">
                Request a Custom Site <i className="fas fa-pencil-alt"></i>
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Secure Delivery', icon: 'fa-shield-alt' },
              { label: '24/7 Support', icon: 'fa-headset' },
              { label: 'SEO Ready', icon: 'fa-chart-line' },
              { label: 'Premium Designs', icon: 'fa-gem' }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-slate-50/50 rounded-2xl border border-slate-100 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                <i className={`fas ${feature.icon} text-3xl text-indigo-500 mb-4`}></i>
                <span className="font-bold text-slate-900">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Websites */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Featured <span className="text-indigo-600">Websites</span></h2>
              <p className="text-slate-600 max-w-xl">
                Hand-picked, high-conversion templates ready for immediate handover and setup.
              </p>
            </div>
            <Link to="/websites" className="font-bold text-indigo-600 hover:underline flex items-center gap-2">
              View All Listings <i className="fas fa-external-link-alt"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWebsites.map(website => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/choose/800/800" alt="Why choose us" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-slate-500">Satisfied Clients</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">48h</div>
                    <div className="text-sm text-slate-500">Average Handover</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Why Buy Your Website <span className="text-indigo-600">From Us?</span></h2>
              <div className="space-y-8">
                {[
                  { title: 'Immediate Digital Presence', desc: 'No more waiting for designers. Buy today, launch tomorrow.', icon: 'fa-bolt' },
                  { title: 'Production Ready Code', desc: 'Every line is optimized for speed, accessibility, and SEO.', icon: 'fa-code' },
                  { title: 'Easy Handover Process', desc: 'We help you migrate files and database to your hosting provider.', icon: 'fa-handshake' },
                  { title: 'Documentation & Support', desc: 'Get full access to guides and direct email support for 30 days.', icon: 'fa-book' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <i className={`fas ${item.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked <span className="text-indigo-600">Questions</span></h2>
            <p className="text-slate-600">Got questions about our <Link to="/websites" className="text-indigo-600 hover:underline font-bold">ready-made websites</Link>? We've got answers.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4 italic">Still have more questions?</p>
            <Link to="/contact" className="text-indigo-600 font-bold hover:underline flex items-center justify-center gap-2">
              Contact our support team <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Own Your <span className="text-indigo-400">Perfect Website?</span></h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Join hundreds of successful entrepreneurs who saved thousands of dollars and months of time by buying a ready-made solution from ReadySite.
              </p>
              <Link to="/websites" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl inline-flex items-center gap-3">
                Shop All Websites <i className="fas fa-shopping-cart text-lg"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
