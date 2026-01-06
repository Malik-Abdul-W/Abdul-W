
import React, { useState } from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call with a realistic delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', whatsapp: '', subject: 'General Inquiry', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Contact ReadySite | Buy a Professional Website Today" 
        description="Have questions about our websites for sale? Contact ReadySite today for support, custom development inquiries, or to buy a ready-made website online."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Let's Get Your <span className="text-indigo-600">Business Online.</span></h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have questions about a specific listing? Need help with migration? Or maybe you want a custom-built solution from scratch? 
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Email Us</h4>
                  <p className="text-slate-500 mb-2">For general inquiries and support.</p>
                  <a href="mailto:hello@readysite.com" className="text-indigo-600 font-bold hover:underline">hello@readysite.com</a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">WhatsApp Chat</h4>
                  <p className="text-slate-500 mb-2">Fastest way to get answers.</p>
                  <a href="#" className="text-green-600 font-bold hover:underline">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Office Location</h4>
                  <p className="text-slate-500">Silicon Valley Tech Hub, California, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden">
            {status === 'submitting' && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center animate-fade-in">
                <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-indigo-900 font-bold">Processing Inquiry...</p>
              </div>
            )}

            {status === 'success' ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-8">We've received your inquiry and will be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      disabled={status === 'submitting'}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      disabled={status === 'submitting'}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      disabled={status === 'submitting'}
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+1 (234) 567..."
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Inquiry Subject</label>
                    <select 
                      name="subject"
                      disabled={status === 'submitting'}
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all appearance-none disabled:opacity-50"
                    >
                      <option>General Inquiry</option>
                      <option>Buying a Website</option>
                      <option>Custom Development</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    disabled={status === 'submitting'}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or the website you're interested in..."
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2 relative shadow-xl disabled:cursor-not-allowed group"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <i className="fas fa-circle-notch fa-spin"></i> Submitting...
                    </span>
                  ) : (
                    <>
                      Send Message <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
