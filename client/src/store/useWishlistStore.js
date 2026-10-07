import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlistItems: [],
      
      toggleWishlist: (product) => {
        const currentItems = get().wishlistItems;
        const exists = currentItems.find(x => x._id === product._id);
        
        if (exists) {
          set({
            wishlistItems: currentItems.filter(x => x._id !== product._id)
          });
        } else {
          set({ wishlistItems: [...currentItems, product] });
        }
      },

      isInWishlist: (id) => {
        return get().wishlistItems.some(x => x._id === id);
      },

      clearWishlist: () => set({ wishlistItems: [] }),
    }),
    {
      name: 'majin-wishlist-storage',
    }
  )
);

export default useWishlistStore;
