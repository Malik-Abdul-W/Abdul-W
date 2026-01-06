
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white">
                <i className="fas fa-rocket"></i>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">ReadySite</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium marketplace for ready-made, high-conversion websites. Launch your business in minutes, not months.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/websites" className="hover:text-white transition-colors">All Websites</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal Info</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-indigo-400"></i>
                <span>Bhikhi Road, Sheikhupura<br />CA 94025, SKP</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-indigo-400"></i>
                <a href="mailto:Malikwahab98@gmail.com" className="hover:text-white">Malikwahab98@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-indigo-400 text-lg"></i>
                <span>+92 3432560985</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} ReadySite Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
