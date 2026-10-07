import AdminLayout from '../../components/AdminLayout';
import { Edit, Trash2, Plus, Search } from 'lucide-react';
import useProductStore from '../../store/useProductStore';
import { useEffect } from 'react';

const AdminProducts = () => {
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-walnut mb-2">Products</h1>
          <p className="text-gray-500">Manage your product catalog</p>
        </div>
        <button className="bg-brand-terracotta text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-brand-terracotta/90 transition-colors">
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta w-64"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex gap-2 text-sm">
            <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none">
              <option>All Categories</option>
              <option>Living Room</option>
              <option>Bedroom</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">Loading products...</td>
                </tr>
              ) : products.map(product => (
                <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover" />
                    <div>
                      <p className="font-medium text-brand-walnut line-clamp-1">{product.name}</p>
                      <p className="text-xs text-gray-500">SKU: MJ-{product.category.substring(0,2).toUpperCase()}-{product._id.substring(0,4)}</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{product.category}</td>
                  <td className="p-4 font-medium">₹{product.price.toLocaleString('en-IN')}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.countInStock > 10 ? 'bg-green-100 text-green-700' : product.countInStock > 0 ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>
                      {product.countInStock} in stock
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="p-1.5 text-gray-500 hover:text-brand-terracotta hover:bg-brand-beige rounded transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                      <Trash2 size={16} />
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

export default AdminProducts;
