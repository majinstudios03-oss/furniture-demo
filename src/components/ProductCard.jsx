import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import useCartStore from '../store/useCartStore';
import useWishlistStore from '../store/useWishlistStore';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product._id);
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-brand-terracotta text-white text-xs font-bold px-2 py-1 rounded z-10">
            {product.discount}% OFF
          </div>
        )}
        
        {/* Wishlist Button */}
        <button 
          onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
          className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-brand-terracotta hover:bg-white z-10 transition-colors"
        >
          <Heart size={16} className={isWishlisted ? "fill-brand-terracotta text-brand-terracotta" : ""} />
        </button>

        {/* Product Image */}
        <Link to={`/product/${product._id}`} className="block w-full h-full">
          <img 
            src={product.image} 
            alt={product.name} 
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80';
            }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product._id}`} className="hover:text-brand-terracotta transition-colors">
            <h3 className="font-serif font-medium text-brand-walnut line-clamp-1">{product.name}</h3>
          </Link>
        </div>

        <div className="flex items-center gap-1 mb-3 text-sm">
          <div className="flex text-yellow-400">
            <Star size={14} fill="currentColor" />
          </div>
          <span className="font-medium">{product.rating}</span>
          <span className="text-gray-400">({product.numReviews})</span>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
          <div>
            <div className="font-bold text-lg text-brand-walnut">₹{product.price.toLocaleString('en-IN')}</div>
            {product.originalPrice > product.price && (
              <div className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</div>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <a 
              href={`https://wa.me/919491554114?text=${encodeURIComponent(`Hi, I'm interested in this item "${product.name}" (Price: ₹${product.price.toLocaleString('en-IN')}) and would like to talk to you.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Inquire on WhatsApp"
              className="w-9 h-9 rounded-full bg-green-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow-xs"
            >
              <WhatsAppIcon size={17} />
            </a>
            <button 
              onClick={(e) => { e.preventDefault(); addToCart(product); }}
              title="Add to Cart"
              className="w-9 h-9 rounded-full bg-brand-ivory flex items-center justify-center text-brand-walnut hover:bg-brand-terracotta hover:text-white transition-colors"
            >
              <ShoppingCart size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
