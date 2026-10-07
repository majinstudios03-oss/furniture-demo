import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccessPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('id') || `MJ${Math.floor(Math.random() * 10000000)}`;

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
        <CheckCircle size={48} />
      </div>
      <h1 className="font-serif text-4xl font-bold text-brand-walnut mb-4">Order Confirmed!</h1>
      <p className="text-lg text-gray-600 mb-2">Thank you for shopping with MAJIN FURNITURES.</p>
      <p className="text-gray-500 mb-8">Your order ID is <span className="font-bold text-brand-walnut">#{orderId}</span>. We'll send a confirmation email shortly.</p>
      
      <div className="flex gap-4">
        <Link to="/shop" className="bg-brand-walnut hover:bg-brand-walnut/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
