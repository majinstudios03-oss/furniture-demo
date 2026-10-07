import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import useCartStore from '../store/useCartStore';
import useWishlistStore from '../store/useWishlistStore';

const WishlistPage = () => {
  const { wishlistItems, toggleWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-brand-ivory rounded-full flex items-center justify-center text-brand-terracotta mb-6">
          <Heart size={48} />
        </div>
        <h2 className="font-serif text-3xl font-bold text-brand-walnut mb-4">Your Wishlist is Empty</h2>
        <p className="text-gray-500 mb-8 max-w-md">Save items you love to your wishlist. Review them anytime and easily move them to your cart.</p>
        <Link to="/shop" className="bg-brand-walnut hover:bg-brand-walnut/90 text-white px-8 py-4 rounded-md font-medium transition-colors">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-walnut mb-10">My Wishlist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (
          <div key={product._id} className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="relative aspect-square bg-gray-50 overflow-hidden">
              <button 
                onClick={() => toggleWishlist(product)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-brand-terracotta hover:bg-white z-10 shadow-sm"
              >
                <Trash2 size={16} />
              </button>
              <img 
                src={product.image} 
                alt={product.name} 
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <div className="text-xs text-gray-500 mb-1">{product.category}</div>
              <Link to={`/product/${product._id}`} className="font-serif font-bold text-brand-walnut text-lg mb-2 hover:text-brand-terracotta transition-colors line-clamp-1">
                {product.name}
              </Link>
              <div className="flex items-center gap-2 mb-4 mt-auto">
                <span className="font-bold text-brand-walnut">₹{product.price.toLocaleString('en-IN')}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                )}
              </div>
              
              <button 
                onClick={() => addToCart(product)}
                disabled={product.countInStock === 0}
                className="w-full bg-white border border-brand-walnut text-brand-walnut hover:bg-brand-walnut hover:text-white py-2 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
