import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [],
  trendingProducts: [],
  product: null,
  loading: false,
  error: null,

  fetchTrendingProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('http://localhost:5000/api/products/trending');
      if (!res.ok) throw new Error('Failed to fetch trending products');
      const data = await res.json();
      set({ trendingProducts: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchProducts: async (keyword = '', category = '', sort = '') => {
    set({ loading: true, error: null });
    try {
      let url = `http://localhost:5000/api/products?`;
      if (keyword) url += `keyword=${encodeURIComponent(keyword)}&`;
      if (category) url += `category=${encodeURIComponent(category)}&`;
      if (sort) url += `sort=${encodeURIComponent(sort)}`;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      set({ products: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  fetchProductById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      if (!res.ok) throw new Error('Failed to fetch product');
      const data = await res.json();
      set({ product: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useProductStore;
