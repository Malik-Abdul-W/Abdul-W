
import React from 'react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Terms of Service | ReadySite Marketplace" 
        description="Read the terms and conditions for using ReadySite Marketplace and purchasing our ready-made websites." 
      />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <p className="text-sm italic">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the ReadySite Marketplace website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
            <p>
              ReadySite provides a platform for browsing and purchasing pre-built, ready-made websites ("Products"). Our service includes the sale of the source code, design assets, and basic documentation associated with these Products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purchase Process & Handover</h2>
            <p>
              Our marketplace operates on a "Contact to Buy" basis. No automated payments are processed through this website. 
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Inquiries are made via WhatsApp or our Contact Form.</li>
              <li>Handover begins only after full payment is confirmed via our agreed-upon payment methods.</li>
              <li>Delivery consists of a digital transfer of source code files (typically via ZIP or GitHub repository) and database exports where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. License and Ownership</h2>
            <p>
              Upon successful purchase and full payment, you are granted a non-exclusive, perpetual license to use, modify, and deploy the Product for your personal or commercial use. You gain full ownership of the specific instance of the code delivered to you.
            </p>
            <p className="mt-2">
              <strong>Restrictions:</strong> You may not resell the Product as a "ready-made template" or "stock item" on other marketplaces without significant modifications or explicit written permission from ReadySite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Support and Maintenance</h2>
            <p>
              We provide 30 days of complimentary email support for technical issues related to the initial setup and deployment. This support does not cover:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>General programming education or tutorials.</li>
              <li>Extensive custom feature development.</li>
              <li>Issues caused by third-party hosting providers or external API changes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Refunds Policy</h2>
            <p>
              Due to the digital nature of our Products, all sales are final. Once the source code has been delivered, we cannot offer refunds or exchanges. We encourage all buyers to review the "Live Demo" and "Features List" thoroughly before initiating a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Modifications to the Service</h2>
            <p>
              ReadySite reserves the right to modify prices, descriptions, or availability of any Product at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ReadySite operates, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
