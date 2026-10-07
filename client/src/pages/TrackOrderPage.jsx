import { useState } from 'react';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';
import useOrderStore from '../store/useOrderStore';
import { Link } from 'react-router-dom';

const TrackOrderPage = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingStatus, setTrackingStatus] = useState(null);
  const [error, setError] = useState('');
  
  const { getOrderById, orders } = useOrderStore();

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    
    setError('');
    const order = getOrderById(orderId.trim());
    
    if (order) {
      setTrackingStatus(order);
    } else {
      setTrackingStatus(null);
      setError('Order not found. Please check your Order ID and try again.');
    }
  };

  return (
    <div className="bg-brand-ivory min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center">
          <div className="w-20 h-20 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6 text-brand-walnut">
            <Package size={40} />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-walnut mb-4">Track Your Order</h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Enter your Order ID below to get real-time updates on your furniture's journey to your home.
          </p>

          <form onSubmit={handleTrack} className="max-w-md mx-auto relative mb-6">
            <input 
              type="text" 
              placeholder="e.g. MJ-20261007-482" 
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full pl-6 pr-16 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta shadow-sm"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-terracotta text-white rounded-full flex items-center justify-center hover:bg-brand-terracotta/90 transition-colors">
              <Search size={20} />
            </button>
          </form>

          {error && <p className="text-red-500 mb-8">{error}</p>}

          {!trackingStatus && orders.length > 0 && (
            <div className="mb-12 text-left bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-brand-walnut mb-4 flex items-center gap-2">
                <Package size={18} /> Your Recent Orders
              </h3>
              <div className="space-y-3">
                {orders.slice(0, 5).map(order => (
                  <button 
                    key={order.id}
                    onClick={() => {
                      setOrderId(order.id);
                      setTrackingStatus(order);
                      setError('');
                    }}
                    className="w-full bg-white p-4 rounded-lg border border-gray-100 hover:border-brand-terracotta transition-colors flex justify-between items-center text-left shadow-sm group"
                  >
                    <div>
                      <div className="font-bold text-brand-walnut group-hover:text-brand-terracotta transition-colors">#{order.id}</div>
                      <div className="text-sm text-gray-500">
                        {order.items.length} items • ₹{order.totalPrice.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="text-sm font-medium bg-brand-beige px-3 py-1 rounded-full text-brand-walnut">
                      Track
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {trackingStatus && (
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-left">
              <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-6">
                <div>
                  <h3 className="font-bold text-brand-walnut text-lg">Order: {trackingStatus.id}</h3>
                  <p className="text-sm text-gray-500">Estimated Delivery: <span className="font-semibold text-brand-terracotta">{trackingStatus.estimatedDelivery}</span></p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {trackingStatus.status}
                  </span>
                </div>
              </div>

              {/* Items Ordered */}
              <div className="mb-10 bg-white p-6 rounded-xl border border-gray-100">
                <h4 className="font-bold text-brand-walnut mb-4">Items Ordered ({trackingStatus.items.reduce((a, c) => a + c.qty, 0)})</h4>
                <div className="space-y-4 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                  {trackingStatus.items.map(item => (
                    <div key={item.product} className="flex items-center gap-4 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md border border-gray-100" />
                      <div className="flex-1">
                        <Link to={`/product/${item.product}`} className="font-medium text-brand-walnut hover:text-brand-terracotta transition-colors line-clamp-1">{item.name}</Link>
                        <p className="text-sm text-gray-500">Qty: {item.qty} {item.color && `| Color: ${item.color}`}</p>
                      </div>
                      <div className="font-bold text-brand-walnut">₹{(item.price * item.qty).toLocaleString('en-IN')}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between font-bold text-lg text-brand-walnut">
                  <span>Total</span>
                  <span>₹{trackingStatus.totalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <h4 className="font-bold text-brand-walnut mb-6">Tracking Status</h4>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200"></div>
                
                <div className="relative flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white z-10 shadow-md">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-walnut">Order Placed</h4>
                    <p className="text-sm text-gray-500">Your order has been confirmed.</p>
                  </div>
                </div>

                <div className="relative flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white z-10 shadow-md">
                    <Package size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-walnut">Processing</h4>
                    <p className="text-sm text-gray-500">We are preparing your items.</p>
                  </div>
                </div>

                <div className="relative flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white z-10 shadow-md ring-4 ring-blue-100">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-walnut">Shipped</h4>
                    <p className="text-sm text-gray-500">Your order is on the way.</p>
                  </div>
                </div>

                <div className="relative flex items-center gap-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 z-10 border-4 border-white">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400">Delivered</h4>
                    <p className="text-sm text-gray-400">Pending delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage;
