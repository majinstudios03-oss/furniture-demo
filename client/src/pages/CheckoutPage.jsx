import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../store/useCartStore';
import useOrderStore from '../store/useOrderStore';
import { CheckCircle, ShieldCheck } from 'lucide-react';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCartStore();
  const { addOrder } = useOrderStore();
  const navigate = useNavigate();
  const { itemsPrice, shippingPrice, taxPrice, totalPrice } = getCartTotal();

  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    postalCode: '',
    state: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-serif text-brand-walnut mb-4">Your Cart is Empty</h2>
        <Link to="/shop" className="text-brand-terracotta hover:underline">Go to Shop</Link>
      </div>
    );
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderId = addOrder({
      items: cartItems,
      shippingAddress: address,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice
    });
    clearCart();
    navigate(`/order-success?id=${orderId}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-brand-walnut mb-8">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/3">
          {/* Progress Indicator */}
          <div className="flex items-center mb-8 border-b border-gray-200 pb-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-brand-terracotta' : 'text-gray-400'}`}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-current text-xs font-bold">1</div>
              <span className="font-medium">Shipping</span>
            </div>
            <div className={`h-px w-12 mx-4 ${step >= 2 ? 'bg-brand-terracotta' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-brand-terracotta' : 'text-gray-400'}`}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-current text-xs font-bold">2</div>
              <span className="font-medium">Payment</span>
            </div>
          </div>

          <form onSubmit={handlePlaceOrder}>
            {step === 1 && (
              <div className="bg-white p-6 rounded-xl border border-gray-100 mb-6">
                <h2 className="text-xl font-bold text-brand-walnut mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input required type="text" value={address.fullName} onChange={(e) => setAddress({...address, fullName: e.target.value})} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brand-terracotta" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input required type="text" value={address.phone} onChange={(e) => setAddress({...address, phone: e.target.value})} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brand-terracotta" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input required type="text" value={address.street} onChange={(e) => setAddress({...address, street: e.target.value})} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brand-terracotta" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input required type="text" value={address.city} onChange={(e) => setAddress({...address, city: e.target.value})} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brand-terracotta" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input required type="text" value={address.state} onChange={(e) => setAddress({...address, state: e.target.value})} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brand-terracotta" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                    <input required type="text" value={address.postalCode} onChange={(e) => setAddress({...address, postalCode: e.target.value})} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brand-terracotta" />
                  </div>
                </div>
                <div className="mt-8">
                  <button type="button" onClick={() => setStep(2)} className="bg-brand-walnut text-white px-8 py-3 rounded-md font-medium hover:bg-brand-walnut/90 transition-colors">
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white p-6 rounded-xl border border-gray-100 mb-6">
                <h2 className="text-xl font-bold text-brand-walnut mb-6">Payment Method</h2>
                <div className="space-y-4">
                  {['Credit Card', 'UPI', 'Net Banking', 'Cash on Delivery'].map((method) => (
                    <label key={method} className={`flex items-center p-4 border rounded-md cursor-pointer transition-colors ${paymentMethod === method ? 'border-brand-terracotta bg-brand-terracotta/5' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value={method} 
                        checked={paymentMethod === method}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3 text-brand-terracotta focus:ring-brand-terracotta h-4 w-4"
                      />
                      <span className="font-medium text-brand-walnut">{method}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-8 flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="px-8 py-3 border border-gray-300 rounded-md font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                  <button type="submit" className="bg-brand-terracotta text-white px-8 py-3 rounded-md font-medium hover:bg-brand-terracotta/90 transition-colors shadow-lg">
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-24">
            <h3 className="font-bold text-lg text-brand-walnut mb-4">Order Summary</h3>
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto custom-scrollbar pr-2">
              {cartItems.map((item) => (
                <div key={item.product} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border border-gray-200" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-brand-walnut line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                    <p className="text-sm font-bold text-brand-walnut mt-1">₹{(item.price * item.qty).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 pt-4 border-t border-gray-200 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{itemsPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shippingPrice === 0 ? 'Free' : `₹${shippingPrice}`}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (18%)</span>
                <span>₹{taxPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-brand-walnut pt-3 border-t border-gray-200">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
