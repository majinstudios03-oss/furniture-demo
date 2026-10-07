import AdminLayout from '../../components/AdminLayout';
import { TrendingUp, DollarSign, ShoppingBag, Users, Package } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-walnut mb-2">Welcome Back, Admin</h1>
        <p className="text-gray-500">Here's what's happening with your store today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Total Revenue</p>
            <h3 className="text-2xl font-bold text-brand-walnut">₹24,86,450</h3>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-2">
              <TrendingUp size={12} /> +12.5% from last month
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-brand-terracotta/10 flex items-center justify-center text-brand-terracotta">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Total Orders</p>
            <h3 className="text-2xl font-bold text-brand-walnut">486</h3>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-2">
              <TrendingUp size={12} /> +5.2% from last month
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <ShoppingBag size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Total Customers</p>
            <h3 className="text-2xl font-bold text-brand-walnut">1,284</h3>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-2">
              <TrendingUp size={12} /> +8.1% from last month
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
            <Users size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Total Products</p>
            <h3 className="text-2xl font-bold text-brand-walnut">142</h3>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
              12 running low on stock
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
            <Package size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm lg:col-span-2 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-brand-walnut">Recent Orders</h3>
            <button className="text-sm text-brand-terracotta hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-medium">Order ID</th>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Amount</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-medium text-brand-walnut">#MJ908234</td>
                  <td className="p-4 text-gray-600">Rahul Sharma</td>
                  <td className="p-4 font-medium">₹28,999</td>
                  <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Processing</span></td>
                  <td className="p-4 text-gray-500">2 mins ago</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brand-walnut">#MJ908233</td>
                  <td className="p-4 text-gray-600">Priya Patel</td>
                  <td className="p-4 font-medium">₹45,999</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Delivered</span></td>
                  <td className="p-4 text-gray-500">2 hours ago</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brand-walnut">#MJ908232</td>
                  <td className="p-4 text-gray-600">Amit Kumar</td>
                  <td className="p-4 font-medium">₹12,499</td>
                  <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Shipped</span></td>
                  <td className="p-4 text-gray-500">1 day ago</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brand-walnut">#MJ908231</td>
                  <td className="p-4 text-gray-600">Sneha Gupta</td>
                  <td className="p-4 font-medium">₹32,999</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Delivered</span></td>
                  <td className="p-4 text-gray-500">1 day ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-brand-walnut">Low Stock Alerts</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="font-medium text-brand-walnut text-sm mb-1">Aria Velvet Sofa</p>
                <p className="text-xs text-gray-500">SKU: MJ-LV-003</p>
              </div>
              <span className="text-red-500 font-bold bg-red-50 px-3 py-1 rounded-full text-sm">5 left</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="font-medium text-brand-walnut text-sm mb-1">Arjun Solid Wood Bed</p>
                <p className="text-xs text-gray-500">SKU: MJ-BD-002</p>
              </div>
              <span className="text-red-500 font-bold bg-red-50 px-3 py-1 rounded-full text-sm">5 left</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-brand-walnut text-sm mb-1">Executive Walnut Desk</p>
                <p className="text-xs text-gray-500">SKU: MJ-OF-003</p>
              </div>
              <span className="text-red-500 font-bold bg-red-50 px-3 py-1 rounded-full text-sm">4 left</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
