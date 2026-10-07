import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mockProducts } from '../data/mockProducts';

const normalize = (str) => (str || '').toLowerCase().trim();

const matchCategory = (product, targetCat) => {
  if (!targetCat) return true;
  const normTarget = normalize(targetCat).replace(/-/g, ' ');
  const cat = normalize(product.category);
  const sub = normalize(product.subcategory);

  if (normTarget === 'all' || normTarget === 'all categories') return true;
  if (cat === normTarget || sub === normTarget) return true;

  // Aliases and compound categories
  if (normTarget === 'office furniture' && (cat.includes('office') || sub.includes('desk') || sub.includes('chair'))) return true;
  if (normTarget === 'outdoor furniture' && (cat.includes('outdoor') || sub.includes('patio'))) return true;
  if (normTarget === 'home decor' && (cat.includes('decor') || sub.includes('lighting') || sub.includes('rug') || sub.includes('mirror') || sub.includes('cushion'))) return true;
  if (normTarget === 'lighting' && (sub.includes('lighting') || sub.includes('lamp'))) return true;
  if (normTarget === 'rugs' && sub.includes('rug')) return true;
  if (normTarget === 'tv units' && (sub.includes('tv') || sub.includes('entertainment'))) return true;
  if (normTarget === 'coffee tables' && (sub.includes('coffee') || sub.includes('table'))) return true;
  if (normTarget === 'side tables' && (sub.includes('side') || sub.includes('bedside'))) return true;
  if (normTarget === 'dining tables' && (sub.includes('dining table') || (cat.includes('dining') && sub.includes('table')))) return true;
  if (normTarget === 'dining sets' && (sub.includes('dining set') || cat.includes('dining'))) return true;

  return cat.includes(normTarget) || sub.includes(normTarget) || normTarget.includes(cat) || normTarget.includes(sub);
};

const matchKeyword = (product, keyword) => {
  if (!keyword) return true;
  const kw = normalize(keyword);
  return (
    normalize(product.name).includes(kw) ||
    normalize(product.description).includes(kw) ||
    normalize(product.category).includes(kw) ||
    normalize(product.subcategory).includes(kw) ||
    normalize(product.brand).includes(kw) ||
    normalize(product.material).includes(kw)
  );
};

const useProductStore = create(
  persist(
    (set, get) => ({
      catalog: mockProducts,
      products: mockProducts,
      trendingProducts: mockProducts.filter((p) => p.isTrending).slice(0, 8),
      product: null,
      loading: false,
      error: null,

      fetchTrendingProducts: async () => {
        set({ loading: true, error: null });
        try {
          const trending = get().catalog.filter((p) => p.isTrending).slice(0, 8);
          set({
            trendingProducts: trending.length > 0 ? trending : get().catalog.slice(0, 8),
            loading: false,
          });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },

      fetchProducts: async (keyword = '', category = '', sort = '') => {
        set({ loading: true, error: null });
        try {
          let list = [...get().catalog];

          if (keyword) {
            list = list.filter((p) => matchKeyword(p, keyword));
          }

          if (category) {
            list = list.filter((p) => matchCategory(p, category));
          }

          // Sort
          if (sort === 'price_asc') {
            list.sort((a, b) => a.price - b.price);
          } else if (sort === 'price_desc') {
            list.sort((a, b) => b.price - a.price);
          } else if (sort === 'rating') {
            list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          } else if (sort === 'reviews') {
            list.sort((a, b) => (b.numReviews || 0) - (a.numReviews || 0));
          }

          set({ products: list, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },

      fetchProductById: async (id) => {
        set({ loading: true, error: null });
        try {
          const found = get().catalog.find((p) => String(p._id) === String(id));
          if (!found) {
            set({ product: null, error: 'Product not found', loading: false });
          } else {
            set({ product: found, loading: false });
          }
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },

      addProduct: (newProduct) => {
        const id = `prod-${Date.now()}`;
        const item = {
          _id: id,
          rating: 5.0,
          numReviews: 1,
          isTrending: false,
          images: newProduct.images?.length ? newProduct.images : [newProduct.image],
          ...newProduct,
        };
        const updatedCatalog = [item, ...get().catalog];
        set({
          catalog: updatedCatalog,
          products: updatedCatalog,
        });
        return id;
      },

      updateProduct: (id, updateData) => {
        const updatedCatalog = get().catalog.map((p) =>
          p._id === id ? { ...p, ...updateData } : p
        );
        set({
          catalog: updatedCatalog,
          products: updatedCatalog,
          product: get().product?._id === id ? { ...get().product, ...updateData } : get().product,
        });
      },

      deleteProduct: (id) => {
        const updatedCatalog = get().catalog.filter((p) => p._id !== id);
        set({
          catalog: updatedCatalog,
          products: get().products.filter((p) => p._id !== id),
        });
      },

      resetCatalog: () => {
        set({
          catalog: mockProducts,
          products: mockProducts,
          trendingProducts: mockProducts.filter((p) => p.isTrending).slice(0, 8),
        });
      },
    }),
    {
      name: 'majin-product-catalog',
      partialize: (state) => ({ catalog: state.catalog }),
    }
  )
);

export default useProductStore;
