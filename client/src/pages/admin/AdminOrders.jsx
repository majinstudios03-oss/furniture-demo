import AdminLayout from '../../components/AdminLayout';
import { Search, Eye } from 'lucide-react';

const AdminOrders = () => {
  const dummyOrders = [
    { id: 'MJ-20261007-482', customer: 'Rahul Sharma', amount: 28999, date: '07 Oct 2026', status: 'Processing', items: 1 },
    { id: 'MJ-20261006-481', customer: 'Priya Patel', amount: 45999, date: '06 Oct 2026', status: 'Shipped', items: 2 },
    { id: 'MJ-20261005-480', customer: 'Amit Kumar', amount: 12499, date: '05 Oct 2026', status: 'Delivered', items: 1 },
    { id: 'MJ-20261004-479', customer: 'Sneha Gupta', amount: 32999, date: '04 Oct 2026', status: 'Delivered', items: 3 },
    { id: 'MJ-20261003-478', customer: 'Vikram Singh', amount: 8999, date: '03 Oct 2026', status: 'Cancelled', items: 1 },
    { id: 'MJ-20261002-477', customer: 'Neha Jain', amount: 54999, date: '02 Oct 2026', status: 'Delivered', items: 4 },
  ];

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-walnut mb-2">Orders</h1>
          <p className="text-gray-500">Manage and track customer orders</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by Order ID..." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta w-64"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex gap-2 text-sm">
            <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none">
              <option>All Status</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {dummyOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-brand-walnut">{order.id}</td>
                  <td className="p-4 text-gray-600">{order.date}</td>
                  <td className="p-4 text-gray-600">{order.customer}</td>
                  <td className="p-4 font-medium">₹{order.amount.toLocaleString('en-IN')} <span className="text-xs text-gray-400 font-normal ml-1">({order.items} items)</span></td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium 
                      ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-red-100 text-red-700'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end">
                    <button className="p-1.5 text-gray-500 hover:text-brand-terracotta hover:bg-brand-beige rounded transition-colors">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
