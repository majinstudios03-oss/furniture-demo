import { useEffect, useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import useProductStore from '../store/useProductStore';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, Check } from 'lucide-react';

const formatCategory = (str) => {
  if (!str) return '';
  if (str === 'tv-units') return 'TV Units';
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const ShopPage = () => {
  const { products, fetchProducts, loading } = useProductStore();
  const location = useLocation();
  const { categoryName } = useParams();
  const queryParams = new URLSearchParams(location.search);
  
  const initialCategory = categoryName ? formatCategory(categoryName) : (queryParams.get('category') || '');
  const initialKeyword = queryParams.get('keyword') || '';

  const [category, setCategory] = useState(initialCategory);
  const [keyword, setKeyword] = useState(initialKeyword);
  const [sort, setSort] = useState('newest');

  // Update state when URL changes
  useEffect(() => {
    const newCat = categoryName ? formatCategory(categoryName) : (queryParams.get('category') || '');
    const newKw = queryParams.get('keyword') || '';
    setCategory(newCat);
    setKeyword(newKw);
  }, [categoryName, location.search]);
  
  const categories = [
    'Sofas', 'Beds', 'Dining Tables', 'Chairs', 'Wardrobes', 
    'TV Units', 'Office Furniture', 'Outdoor Furniture', 
    'Coffee Tables', 'Side Tables', 'Storage', 'Home Decor',
    'Lighting', 'Rugs'
  ];

  useEffect(() => {
    fetchProducts(keyword, category, sort);
  }, [keyword, category, sort, fetchProducts]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-200 pb-6">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-walnut mb-2">
            {category ? category : keyword ? `Search Results for "${keyword}"` : 'All Furniture'}
          </h1>
          <p className="text-gray-500 text-sm">
            Showing {products.length} products
          </p>
        </div>
        
        {/* Sort */}
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600">Sort by:</span>
          <select 
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-brand-terracotta bg-white text-brand-walnut cursor-pointer"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white rounded-xl border border-gray-100 p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-brand-walnut font-serif font-bold text-xl">
              <Filter size={20} />
              <h3>Filters</h3>
            </div>
            
            {/* Categories */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-brand-walnut border-b border-gray-100 pb-2">Categories</h4>
              <ul className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                <li>
                  <button 
                    onClick={() => setCategory('')}
                    className={`text-sm flex items-center gap-2 w-full text-left transition-colors ${category === '' ? 'text-brand-terracotta font-medium' : 'text-gray-600 hover:text-brand-walnut'}`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${category === '' ? 'bg-brand-terracotta border-brand-terracotta text-white' : 'border-gray-300'}`}>
                      {category === '' && <Check size={12} />}
                    </div>
                    All Categories
                  </button>
                </li>
                {categories.map(c => (
                  <li key={c}>
                    <button 
                      onClick={() => setCategory(c)}
                      className={`text-sm flex items-center gap-2 w-full text-left transition-colors ${category === c ? 'text-brand-terracotta font-medium' : 'text-gray-600 hover:text-brand-walnut'}`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${category === c ? 'bg-brand-terracotta border-brand-terracotta text-white' : 'border-gray-300'}`}>
                        {category === c && <Check size={12} />}
                      </div>
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full lg:w-3/4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-terracotta"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="bg-brand-beige rounded-xl p-12 text-center">
              <h3 className="font-serif text-2xl font-bold text-brand-walnut mb-3">No products found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any products matching your current filters.</p>
              <button 
                onClick={() => { setCategory(''); setKeyword(''); setSort('newest'); }}
                className="bg-white text-brand-walnut border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
