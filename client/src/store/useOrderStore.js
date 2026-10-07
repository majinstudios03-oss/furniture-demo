import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useOrderStore = create(
  persist(
    (set, get) => ({
      orders: [],
      
      addOrder: (orderData) => {
        const newOrder = {
          ...orderData,
          id: `MJ-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`,
          createdAt: new Date().toISOString(),
          status: 'Processing',
          estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        
        set({ orders: [newOrder, ...get().orders] });
        return newOrder.id;
      },

      getOrderById: (id) => {
        return get().orders.find(order => order.id === id);
      }
    }),
    {
      name: 'majin-order-storage',
    }
  )
);

export default useOrderStore;
