
import React from 'react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO title="Privacy Policy | ReadySite Marketplace" description="Read our privacy policy to understand how we handle your data at ReadySite Marketplace." />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us through our contact forms, including your name, email address, and WhatsApp number. This information is used solely to facilitate communication regarding the sale of our websites.</p>

          <h2 className="text-2xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <p>The information we collect is used to respond to your inquiries, process your orders for websites, and provide support. We do not sell or lease your personal information to third parties.</p>

          <h2 className="text-2xl font-bold text-slate-900">3. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing and against accidental loss, destruction, or damage.</p>

          <h2 className="text-2xl font-bold text-slate-900">4. Cookies Usage</h2>
          <p>Our website may use essential cookies to enhance your browsing experience. These cookies do not store personal information and are used to ensure the website functions correctly.</p>

          <h2 className="text-2xl font-bold text-slate-900">5. Your Rights</h2>
          <p>You have the right to request access to the personal data we hold about you, to request that it be corrected, or to request its deletion from our records.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
