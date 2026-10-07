import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      
      addToCart: (product, qty = 1, color = '') => {
        const item = {
          product: product._id,
          name: product.name,
          image: product.image,
          price: product.price,
          countInStock: product.countInStock,
          qty,
          color: color || (product.colors && product.colors.length > 0 ? product.colors[0] : '')
        };

        const existItem = get().cartItems.find(x => x.product === item.product);

        if (existItem) {
          set({
            cartItems: get().cartItems.map(x =>
              x.product === existItem.product ? item : x
            )
          });
        } else {
          set({ cartItems: [...get().cartItems, item] });
        }
      },
      
      removeFromCart: (id) => {
        set({
          cartItems: get().cartItems.filter(x => x.product !== id)
        });
      },

      updateQuantity: (id, qty) => {
        set({
          cartItems: get().cartItems.map(x =>
            x.product === id ? { ...x, qty } : x
          )
        });
      },

      clearCart: () => set({ cartItems: [] }),

      getCartTotal: () => {
        const { cartItems } = get();
        const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
        const shippingPrice = itemsPrice > 15000 ? 0 : itemsPrice > 0 ? 499 : 0;
        const taxPrice = Number((0.18 * itemsPrice).toFixed(2));
        const totalPrice = itemsPrice + shippingPrice + taxPrice;

        return {
          itemsPrice,
          shippingPrice,
          taxPrice,
          totalPrice
        };
      }
    }),
    {
      name: 'majin-cart-storage',
    }
  )
);

export default useCartStore;
