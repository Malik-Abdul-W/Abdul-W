
import React from 'react';
import SEO from '../components/SEO';

const Disclaimer: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO title="Legal Disclaimer | ReadySite Marketplace" description="Important legal information and disclaimer regarding the purchase of ready-made websites from ReadySite." />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-8">Disclaimer</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="bg-amber-50 border-l-4 border-amber-400 p-4 text-amber-800 font-medium">
            Please read this disclaimer carefully before purchasing any digital assets from ReadySite Marketplace.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">1. Nature of the Service</h2>
          <p>ReadySite Marketplace provides ready-made website templates and complete digital assets "as is". While we strive for excellence in code and design, we do not guarantee that the provided websites will meet every specific requirement of your business without further customization.</p>

          <h2 className="text-2xl font-bold text-slate-900">2. No Guarantee of Earnings</h2>
          <p>The purchase of a website does not guarantee any financial gain, traffic, or success. Success in digital business depends on numerous factors beyond the website code, including marketing, product-market fit, and operational management.</p>

          <h2 className="text-2xl font-bold text-slate-900">3. Third-Party Services</h2>
          <p>Our websites may contain links to or integrations with third-party services (e.g., hosting providers, payment processors). We are not responsible for the performance, security, or terms of these external services.</p>

          <h2 className="text-2xl font-bold text-slate-900">4. Responsibility for Content</h2>
          <p>Once ownership of a website is transferred to the buyer, the buyer assumes full legal and ethical responsibility for all content, data, and activities associated with that website.</p>

          <h2 className="text-2xl font-bold text-slate-900">5. Limitation of Liability</h2>
          <p>In no event shall ReadySite Marketplace be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the purchased digital assets.</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
