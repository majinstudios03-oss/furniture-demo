import AdminLayout from '../../components/AdminLayout';
import { Search, Mail, ExternalLink } from 'lucide-react';

const AdminCustomers = () => {
  const dummyCustomers = [
    { id: 'CUST-001', name: 'Rahul Sharma', email: 'rahul.s@example.com', orders: 4, spent: 85400, lastOrder: '07 Oct 2026', status: 'Active' },
    { id: 'CUST-002', name: 'Priya Patel', email: 'priya.p@example.com', orders: 2, spent: 45999, lastOrder: '06 Oct 2026', status: 'Active' },
    { id: 'CUST-003', name: 'Amit Kumar', email: 'amit.k@example.com', orders: 1, spent: 12499, lastOrder: '05 Oct 2026', status: 'Active' },
    { id: 'CUST-004', name: 'Sneha Gupta', email: 'sneha.g@example.com', orders: 6, spent: 145000, lastOrder: '04 Oct 2026', status: 'Active' },
    { id: 'CUST-005', name: 'Vikram Singh', email: 'vikram.s@example.com', orders: 1, spent: 8999, lastOrder: '03 Oct 2026', status: 'Inactive' },
    { id: 'CUST-006', name: 'Neha Jain', email: 'neha.j@example.com', orders: 3, spent: 112000, lastOrder: '02 Oct 2026', status: 'Active' },
  ];

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-walnut mb-2">Customers</h1>
          <p className="text-gray-500">Manage your customer base</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta w-64"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex gap-2 text-sm">
            <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Orders</th>
                <th className="p-4 font-medium">Total Spent</th>
                <th className="p-4 font-medium">Last Order</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {dummyCustomers.map(customer => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-beige flex items-center justify-center text-brand-walnut font-bold text-xs">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-brand-walnut">{customer.name}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1"><Mail size={10} /> {customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{customer.orders}</td>
                  <td className="p-4 font-medium">₹{customer.spent.toLocaleString('en-IN')}</td>
                  <td className="p-4 text-gray-600">{customer.lastOrder}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium 
                      ${customer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end">
                    <button className="p-1.5 text-gray-500 hover:text-brand-terracotta hover:bg-brand-beige rounded transition-colors">
                      <ExternalLink size={16} />
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

export default AdminCustomers;
