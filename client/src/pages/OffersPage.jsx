import { Link } from 'react-router-dom';

const OffersPage = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <div className="bg-brand-walnut py-20 text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Current Offers</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto px-4">
          Upgrade your home with our exclusive seasonal discounts and bundle offers.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Offer 1 */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80" 
                alt="Living Room Offer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-walnut/90 via-brand-walnut/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
              <span className="inline-block bg-brand-terracotta text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-3">Ends in 3 days</span>
              <h2 className="font-serif text-3xl font-bold mb-2">Living Room Refresh</h2>
              <p className="opacity-90 mb-6">Up to 30% off on all Sofas and Coffee Tables.</p>
              <Link to="/category/sofas" className="bg-white text-brand-walnut px-6 py-2.5 rounded font-medium hover:bg-brand-beige transition-colors">
                Shop Sofas
              </Link>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80" 
                alt="Bedroom Offer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-walnut/90 via-brand-walnut/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
              <span className="inline-block bg-brand-terracotta text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-3">New Launch</span>
              <h2 className="font-serif text-3xl font-bold mb-2">The Sleep Bundle</h2>
              <p className="opacity-90 mb-6">Buy any King Bed, get a side table absolutely free.</p>
              <Link to="/category/beds" className="bg-white text-brand-walnut px-6 py-2.5 rounded font-medium hover:bg-brand-beige transition-colors">
                Shop Beds
              </Link>
            </div>
          </div>

          {/* Offer 3 */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80" 
                alt="Office Offer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-walnut/90 via-brand-walnut/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
              <span className="inline-block bg-brand-terracotta text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-3">WFH Special</span>
              <h2 className="font-serif text-3xl font-bold mb-2">Work From Home Upgrade</h2>
              <p className="opacity-90 mb-6">Flat 15% off on all Ergonomic Chairs and Desks.</p>
              <Link to="/category/office" className="bg-white text-brand-walnut px-6 py-2.5 rounded font-medium hover:bg-brand-beige transition-colors">
                Shop Office
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OffersPage;
