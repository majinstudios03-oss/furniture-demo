import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';
import useCartStore from '../store/useCartStore';

const Header = () => {
  const { cartItems } = useCartStore();
  const [keyword, setKeyword] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/shop?keyword=${keyword}`);
    } else {
      navigate('/shop');
    }
    setIsMobileMenuOpen(false);
  };
  
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-ivory/95 backdrop-blur-md border-b border-brand-beige shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu */}
        <button 
          className="md:hidden p-2 text-brand-walnut"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center md:items-start" onClick={closeMenu}>
          <span className="font-serif text-2xl font-bold text-brand-walnut tracking-wide">MAJIN FURNITURES</span>
          <span className="text-[10px] uppercase tracking-widest text-brand-terracotta hidden md:block">Furniture for a better home</span>
        </Link>

        {/* Search Bar - Hidden on Mobile */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <input 
            type="text" 
            placeholder="Search for sofas, beds, tables..." 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta bg-white"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-terracotta">
            <Search size={20} />
          </button>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-4 text-brand-walnut">
          <Link to="/track" className="hidden lg:block text-sm hover:text-brand-terracotta transition-colors">Track Order</Link>
          <div className="h-4 w-px bg-gray-300 hidden lg:block"></div>
          <Link to="/wishlist" className="hover:text-brand-terracotta transition-colors relative" onClick={closeMenu}>
            <Heart size={22} />
          </Link>
          <Link to="/login" className="hover:text-brand-terracotta transition-colors flex items-center gap-1" onClick={closeMenu}>
            <User size={22} />
            <span className="hidden md:block text-sm font-medium">Login</span>
          </Link>
          <Link to="/cart" className="hover:text-brand-terracotta transition-colors relative flex items-center gap-1" onClick={closeMenu}>
            <ShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-terracotta text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block bg-brand-walnut text-brand-ivory">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-3 text-sm font-medium uppercase tracking-wider flex-wrap">
            <li><Link to="/shop" className="hover:text-brand-beige transition-colors">All Categories</Link></li>
            <li><Link to="/category/living-room" className="hover:text-brand-beige transition-colors">Living Room</Link></li>
            <li><Link to="/category/bedroom" className="hover:text-brand-beige transition-colors">Bedroom</Link></li>
            <li><Link to="/category/dining" className="hover:text-brand-beige transition-colors">Dining</Link></li>
            <li><Link to="/category/storage" className="hover:text-brand-beige transition-colors">Storage</Link></li>
            <li><Link to="/category/office" className="hover:text-brand-beige transition-colors">Office</Link></li>
            <li><Link to="/category/outdoor" className="hover:text-brand-beige transition-colors">Outdoor</Link></li>
            <li><Link to="/category/decor" className="hover:text-brand-beige transition-colors">Decor</Link></li>
            <li><Link to="/offers" className="text-brand-terracotta hover:text-white transition-colors">Offers</Link></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl max-h-[70vh] overflow-y-auto">
          <div className="p-4 bg-brand-ivory border-b border-gray-200">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="Search for furniture..." 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full py-2.5 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta bg-white text-sm shadow-sm"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-terracotta">
                <Search size={18} />
              </button>
            </form>
          </div>
          <ul className="flex flex-col py-2 font-medium text-brand-walnut">
            <li><Link to="/shop" className="block px-6 py-3 border-b border-gray-50 hover:bg-brand-beige/20" onClick={closeMenu}>All Categories</Link></li>
            <li><Link to="/category/living-room" className="block px-6 py-3 border-b border-gray-50 hover:bg-brand-beige/20" onClick={closeMenu}>Living Room</Link></li>
            <li><Link to="/category/bedroom" className="block px-6 py-3 border-b border-gray-50 hover:bg-brand-beige/20" onClick={closeMenu}>Bedroom</Link></li>
            <li><Link to="/category/dining" className="block px-6 py-3 border-b border-gray-50 hover:bg-brand-beige/20" onClick={closeMenu}>Dining</Link></li>
            <li><Link to="/category/storage" className="block px-6 py-3 border-b border-gray-50 hover:bg-brand-beige/20" onClick={closeMenu}>Storage</Link></li>
            <li><Link to="/category/office" className="block px-6 py-3 border-b border-gray-50 hover:bg-brand-beige/20" onClick={closeMenu}>Office</Link></li>
            <li><Link to="/category/outdoor" className="block px-6 py-3 border-b border-gray-50 hover:bg-brand-beige/20" onClick={closeMenu}>Outdoor</Link></li>
            <li><Link to="/category/decor" className="block px-6 py-3 border-b border-gray-50 hover:bg-brand-beige/20" onClick={closeMenu}>Decor</Link></li>
            <li><Link to="/offers" className="block px-6 py-3 text-brand-terracotta font-bold hover:bg-brand-beige/20" onClick={closeMenu}>Offers</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
