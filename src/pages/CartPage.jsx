import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../store/useCartStore';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCartStore();
  const navigate = useNavigate();
  const { itemsPrice, shippingPrice, taxPrice, totalPrice } = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-brand-ivory rounded-full flex items-center justify-center text-brand-terracotta mb-6">
          <ShoppingBag size={48} />
        </div>
        <h2 className="font-serif text-3xl font-bold text-brand-walnut mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added any beautiful furniture to your cart yet. Explore our collections and find something you love.</p>
        <Link to="/shop" className="bg-brand-walnut hover:bg-brand-walnut/90 text-white px-8 py-4 rounded-md font-medium transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-walnut mb-10">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 bg-brand-ivory p-4 border-b border-gray-100 text-sm font-semibold text-brand-walnut">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {/* Items */}
            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div key={item.product} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 items-center">
                  <div className="col-span-1 md:col-span-6 flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-24 h-24 object-cover rounded-md" 
                    />
                    <div className="flex flex-col justify-center">
                      <Link to={`/product/${item.product}`} className="font-serif font-semibold text-brand-walnut hover:text-brand-terracotta transition-colors text-lg mb-1">
                        {item.name}
                      </Link>
                      {item.color && <span className="text-sm text-gray-500 mb-2">Color: {item.color}</span>}
                      <button 
                        onClick={() => removeFromCart(item.product)}
                        className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 w-fit"
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-1 md:col-span-2 text-center font-medium text-gray-700 hidden md:block">
                    ₹{item.price.toLocaleString('en-IN')}
                  </div>

                  <div className="col-span-1 md:col-span-2 flex items-center md:justify-center mt-4 md:mt-0">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.product, Math.max(1, item.qty - 1))}
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                      <button 
                        onClick={() => updateQuantity(item.product, Math.min(item.countInStock, item.qty + 1))}
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 text-right font-bold text-brand-walnut text-lg mt-2 md:mt-0">
                    ₹{(item.price * item.qty).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <Link to="/shop" className="text-brand-terracotta font-medium hover:underline flex items-center gap-2">
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-brand-beige/30 rounded-xl p-6 lg:p-8 sticky top-24 border border-brand-beige">
            <h2 className="font-serif text-2xl font-bold text-brand-walnut mb-6 border-b border-gray-200 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)</span>
                <span>₹{itemsPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated Tax (18% GST)</span>
                <span>₹{taxPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>{shippingPrice === 0 ? <span className="text-green-600">Free</span> : `₹${shippingPrice}`}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-8">
              <div className="flex justify-between items-end">
                <span className="font-bold text-lg text-brand-walnut">Total</span>
                <span className="font-bold text-3xl text-brand-terracotta">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">Inclusive of all taxes</p>
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-brand-walnut hover:bg-brand-walnut/90 text-white py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              Proceed to Checkout <ArrowRight size={18} />
            </button>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-500 justify-center">
                <ShieldCheck size={16} /> Secure Payment Processing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
