import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Clock, Headphones } from 'lucide-react';
import { useEffect } from 'react';
import useProductStore from '../store/useProductStore';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { trendingProducts, fetchTrendingProducts, loading } = useProductStore();

  useEffect(() => {
    fetchTrendingProducts();
  }, [fetchTrendingProducts]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-brand-beige overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Modern Indian Living Room" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-walnut/80 via-brand-walnut/50 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Make Every Corner Feel Like Home
            </h1>
            <p className="font-sans text-lg md:text-xl mb-10 text-brand-ivory opacity-90 max-w-lg">
              Stylish. Comfortable. Affordable furniture designed specifically for modern Indian homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white px-8 py-4 rounded-md font-medium transition-colors text-center shadow-lg shadow-brand-terracotta/20">
                Shop Now
              </Link>
              <Link to="/collections" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-md font-medium transition-colors text-center flex items-center justify-center gap-2">
                Explore Collections <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-brand-ivory">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-walnut">Shop by Category</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: 'Sofas', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80' },
              { name: 'Beds', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=300&q=80' },
              { name: 'Dining Tables', img: 'https://images.unsplash.com/photo-1617806118233-18e1c094414f?auto=format&fit=crop&w=300&q=80' },
              { name: 'Chairs', img: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=300&q=80' },
              { name: 'Wardrobes', img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=300&q=80' },
              { name: 'TV Units', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=300&q=80' },
              { name: 'Office', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=300&q=80' },
              { name: 'Outdoor', img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd0b?auto=format&fit=crop&w=300&q=80' }
            ].map((cat, idx) => (
              <Link key={idx} to={`/category/${cat.name.toLowerCase().replace(' ', '-')}`} className="group flex flex-col items-center gap-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-brand-terracotta transition-colors duration-300">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="font-medium text-brand-walnut text-center">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-walnut">Trending in Furniture</h2>
            <Link to="/shop" className="text-brand-terracotta hover:text-brand-walnut font-medium flex items-center gap-1 transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-terracotta"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-brand-beige bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-brand-ivory flex items-center justify-center text-brand-terracotta">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif font-semibold text-lg text-brand-walnut">Premium Quality</h3>
              <p className="text-sm text-gray-600">Expertly crafted with top-grade materials.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-brand-ivory flex items-center justify-center text-brand-terracotta">
                <Truck size={32} />
              </div>
              <h3 className="font-serif font-semibold text-lg text-brand-walnut">Free Delivery</h3>
              <p className="text-sm text-gray-600">On all orders above ₹15,000.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-brand-ivory flex items-center justify-center text-brand-terracotta">
                <Clock size={32} />
              </div>
              <h3 className="font-serif font-semibold text-lg text-brand-walnut">1 Year Warranty</h3>
              <p className="text-sm text-gray-600">Peace of mind guaranteed.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-brand-ivory flex items-center justify-center text-brand-terracotta">
                <Headphones size={32} />
              </div>
              <h3 className="font-serif font-semibold text-lg text-brand-walnut">Expert Support</h3>
              <p className="text-sm text-gray-600">Dedicated team for your assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-20 bg-brand-ivory">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                alt="Bedroom Promotion" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-brand-walnut/60"></div>
            </div>
            <div className="relative py-24 px-8 md:px-20 flex flex-col items-center md:items-start text-center md:text-left text-white max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand-terracotta font-bold mb-4">Limited Time Offer</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
                Beautiful Homes.<br/>Happier Lives.
              </h2>
              <p className="text-xl mb-8 opacity-90">Up to 40% OFF on selected furniture.</p>
              <Link to="/offers" className="bg-white text-brand-walnut hover:bg-brand-beige px-8 py-4 rounded-md font-medium transition-colors">
                Shop Offers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-brand-green/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-walnut mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-brand-walnut/80 mb-8">
            Subscribe to our newsletter for exclusive offers, design tips, and new arrivals.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 rounded-md w-full sm:w-96 border border-gray-300 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
              required
            />
            <button type="submit" className="bg-brand-walnut hover:bg-brand-walnut/90 text-white px-8 py-4 rounded-md font-medium transition-colors whitespace-nowrap">
              Get My Offer
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
