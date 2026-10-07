import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useProductStore from '../store/useProductStore';
import useCartStore from '../store/useCartStore';
import useWishlistStore from '../store/useWishlistStore';
import { Star, Truck, ShieldCheck, Heart, Minus, Plus, ChevronRight, Check } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, fetchProductById, loading, error } = useProductStore();
  const { addToCart } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    setActiveImage(0);
  }, [product]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-terracotta"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-serif text-brand-walnut mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">We couldn't find the product you're looking for.</p>
        <Link to="/shop" className="bg-brand-walnut text-white px-6 py-3 rounded-md">Return to Shop</Link>
      </div>
    );
  }

  const images = product.images?.length > 0 ? product.images : [product.image];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-gray-500 mb-8 items-center gap-2">
        <Link to="/" className="hover:text-brand-terracotta">Home</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-brand-terracotta">Shop</Link>
        <ChevronRight size={14} />
        <Link to={`/shop?category=${product.category}`} className="hover:text-brand-terracotta">{product.category}</Link>
        <ChevronRight size={14} />
        <span className="text-brand-walnut font-medium truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4 border border-gray-100">
            {product.discount > 0 && (
              <div className="absolute top-4 left-4 bg-brand-terracotta text-white font-bold px-3 py-1 rounded-md z-10">
                {product.discount}% OFF
              </div>
            )}
            <button 
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-brand-terracotta hover:bg-white z-10 transition-colors shadow-sm"
            >
              <Heart size={20} className={isInWishlist(product?._id) ? "fill-brand-terracotta text-brand-terracotta" : ""} />
            </button>
            <img 
              src={images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-colors ${activeImage === idx ? 'border-brand-terracotta' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-6 border-b border-gray-100 pb-6">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-walnut mb-3">{product.name}</h1>
            <div className="flex items-center gap-4 text-sm mb-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className={i >= Math.floor(product.rating) ? 'text-gray-300' : ''} />
                ))}
                <span className="text-brand-walnut font-medium ml-2">{product.rating}</span>
              </div>
              <span className="text-gray-400 underline cursor-pointer">{product.numReviews} Reviews</span>
              <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded font-medium text-xs">Free delivery available</span>
            </div>
            <div className="flex items-end gap-3 mb-2">
              <span className="text-3xl font-bold text-brand-walnut">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-400 line-through mb-1">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              )}
            </div>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h4 className="font-medium text-brand-walnut mb-3 flex items-center justify-between">
                <span>Color: <span className="text-gray-600 font-normal">{selectedColor}</span></span>
              </h4>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md text-sm transition-all ${selectedColor === color ? 'border-brand-terracotta bg-brand-terracotta/5 text-brand-terracotta font-medium ring-1 ring-brand-terracotta' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Area */}
          <div className="bg-brand-beige/30 p-6 rounded-xl mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium text-brand-walnut">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md bg-white">
                <button 
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-brand-walnut transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium text-brand-walnut">{qty}</span>
                <button 
                  onClick={() => setQty(q => Math.min(product.countInStock, q + 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-brand-walnut transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <span className="text-sm text-gray-500">{product.countInStock > 0 ? `${product.countInStock} items available` : 'Out of Stock'}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => addToCart(product, qty, selectedColor)}
                disabled={product.countInStock === 0}
                className="flex-1 bg-white text-brand-walnut border border-brand-walnut hover:bg-gray-50 px-8 py-4 rounded-md font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
              <button 
                onClick={() => {
                  addToCart(product, qty, selectedColor);
                  navigate('/cart');
                }}
                disabled={product.countInStock === 0}
                className="flex-1 bg-brand-terracotta text-white hover:bg-brand-terracotta/90 px-8 py-4 rounded-md font-bold transition-colors shadow-lg shadow-brand-terracotta/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-ivory flex items-center justify-center text-brand-walnut">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-walnut uppercase">Warranty</p>
                <p className="text-xs text-gray-500">{product.warranty}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-ivory flex items-center justify-center text-brand-walnut">
                <Truck size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-walnut uppercase">Delivery</p>
                <p className="text-xs text-gray-500">In 5-7 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs / Specifications */}
      <div className="mt-16 border-t border-gray-200 pt-16">
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          <button className="px-8 py-4 font-serif text-lg font-bold text-brand-walnut border-b-2 border-brand-terracotta whitespace-nowrap">
            Specifications
          </button>
          <button className="px-8 py-4 font-serif text-lg font-medium text-gray-400 hover:text-brand-walnut whitespace-nowrap">
            Material & Care
          </button>
          <button className="px-8 py-4 font-serif text-lg font-medium text-gray-400 hover:text-brand-walnut whitespace-nowrap">
            Reviews ({product.numReviews})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">Brand</span>
            <span className="font-medium text-brand-walnut">{product.brand}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">Category</span>
            <span className="font-medium text-brand-walnut">{product.category}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">Material</span>
            <span className="font-medium text-brand-walnut text-right">{product.material}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">Dimensions</span>
            <span className="font-medium text-brand-walnut text-right">{product.dimensions}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">Weight</span>
            <span className="font-medium text-brand-walnut">{product.weight || 'N/A'}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">Assembly</span>
            <span className="font-medium text-brand-walnut">Carpenter Assembly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
