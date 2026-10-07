import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-walnut text-brand-beige pt-16 pb-8 border-t-4 border-brand-terracotta">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold text-white tracking-wide">MAJIN</span>
              <span className="font-sans text-sm font-light tracking-[0.2em] block text-brand-beige">FURNITURES</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 opacity-90">
              Stylish, comfortable, and affordable furniture for modern Indian homes. We believe every corner of your home deserves to be beautiful.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-colors text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-colors text-xs font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-colors text-xs font-bold">
                YT
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Shop</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li><Link to="/category/living-room" className="hover:text-white hover:underline transition-all">Living Room</Link></li>
              <li><Link to="/category/bedroom" className="hover:text-white hover:underline transition-all">Bedroom</Link></li>
              <li><Link to="/category/dining" className="hover:text-white hover:underline transition-all">Dining</Link></li>
              <li><Link to="/category/storage" className="hover:text-white hover:underline transition-all">Storage</Link></li>
              <li><Link to="/offers" className="text-brand-terracotta font-medium">Special Offers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Support</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li><Link to="/about" className="hover:text-white hover:underline transition-all">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:underline transition-all">Contact Us</Link></li>
              <li><Link to="/help" className="hover:text-white hover:underline transition-all">Help Center</Link></li>
              <li><Link to="/shipping" className="hover:text-white hover:underline transition-all">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-white hover:underline transition-all">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* Contact & Policy */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm opacity-90">
              <li>
                <p className="font-medium text-white">Call Us:</p>
                <p>1800-123-4567 (Mon-Sat, 9AM-8PM)</p>
              </li>
              <li>
                <p className="font-medium text-white">Email:</p>
                <p>support@majinfurnitures.com</p>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-2 text-xs opacity-75">
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-75">
          <p>&copy; {new Date().getFullYear()} MAJIN FURNITURES. All rights reserved.</p>
          <div className="flex gap-2 items-center">
            <span>Secure Payments by Razorpay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
