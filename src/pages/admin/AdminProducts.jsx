import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Trash2, Plus, Search, X, Check, Image as ImageIcon } from 'lucide-react';
import useProductStore from '../../store/useProductStore';

const AdminProducts = () => {
  const { products, fetchProducts, addProduct, deleteProduct, loading } = useProductStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Living Room',
    subcategory: 'Sofas',
    price: '',
    originalPrice: '',
    countInStock: 10,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    description: '',
    material: 'Solid Wood + Fabric',
    dimensions: 'Standard Dimensions',
    isTrending: false,
  });

  useEffect(() => {
    fetchProducts(searchTerm, selectedCategory === 'All' ? '' : selectedCategory);
  }, [searchTerm, selectedCategory, fetchProducts]);

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove "${name}" from the store catalog?`)) {
      deleteProduct(id);
    }
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    const newProduct = {
      ...formData,
      price: Number(formData.price),
      originalPrice: formData.originalPrice ? Number(formData.originalPrice) : Math.round(Number(formData.price) * 1.25),
      discount: formData.originalPrice ? Math.round(((Number(formData.originalPrice) - Number(formData.price)) / Number(formData.originalPrice)) * 100) : 20,
      countInStock: Number(formData.countInStock) || 1,
      brand: 'MAJIN FURNITURES',
      colors: ['Classic Finish'],
      weight: '25 kg',
      warranty: '1 Year Manufacturer Warranty',
    };

    addProduct(newProduct);
    setIsAddModalOpen(false);
    setFormData({
      name: '',
      category: 'Living Room',
      subcategory: 'Sofas',
      price: '',
      originalPrice: '',
      countInStock: 10,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      description: '',
      material: 'Solid Wood + Fabric',
      dimensions: 'Standard Dimensions',
      isTrending: false,
    });
  };

  const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Storage', 'Outdoor', 'Decor'];

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-walnut mb-1">Products Catalog</h1>
          <p className="text-gray-500 text-sm">
            Showing {products.length} products in local store inventory
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-brand-terracotta text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-brand-terracotta/90 transition-colors shadow-sm font-medium text-sm"
        >
          <Plus size={18} /> Add New Product
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search products by name or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-medium text-gray-500">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none bg-white text-gray-700"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === 'All' ? 'All Categories' : c}
                </option>
              ))}
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
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-12 text-center text-gray-400">
                    No products found matching your filters.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-12 h-12 rounded-lg object-cover bg-gray-100 border border-gray-200"
                      />
                      <div className="max-w-xs">
                        <p className="font-medium text-brand-walnut line-clamp-1">{product.name}</p>
                        <p className="text-xs text-gray-400">
                          SKU: MJ-{product.category.substring(0, 2).toUpperCase()}-{product._id}
                        </p>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">
                      <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {product.category}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-brand-walnut">
                      ₹{product.price.toLocaleString('en-IN')}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          product.countInStock > 10
                            ? 'bg-green-100 text-green-700'
                            : product.countInStock > 0
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {product.countInStock} in stock
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleDelete(product._id, product.name)}
                        title="Delete product"
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <h3 className="font-serif text-xl font-bold text-brand-walnut">Add New Product</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-md"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                  Product Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Sheesham Coffee Table"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none bg-white"
                  >
                    <option value="Living Room">Living Room</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Dining">Dining</option>
                    <option value="Office">Office</option>
                    <option value="Storage">Storage</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Decor">Decor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                    Subcategory
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sofas, Beds, Tables"
                    value={formData.subcategory}
                    onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="19999"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                    MRP Price (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="24999"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    value={formData.countInStock}
                    onChange={(e) => setFormData({ ...formData, countInStock: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                  Description
                </label>
                <textarea
                  rows="3"
                  placeholder="Detailed description of craftsmanship and materials..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-terracotta"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="trendingCheck"
                  checked={formData.isTrending}
                  onChange={(e) => setFormData({ ...formData, isTrending: e.target.checked })}
                  className="rounded text-brand-terracotta"
                />
                <label htmlFor="trendingCheck" className="text-sm text-gray-700 cursor-pointer">
                  Feature in Trending Products
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm bg-brand-terracotta hover:bg-brand-terracotta/90 text-white rounded-lg font-medium shadow-sm"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminProducts;
