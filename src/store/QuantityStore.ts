import { create } from "zustand";

interface Product {
  id: number;
  count: number;
}

interface QuantityCounter {
  amount: Record<number, Product>;
  emptyItem: (productId: number) => void;
  addItem: (productId: number) => void;
  increase: (productId: number, by: number) => void;
  decrease: (productId: number, by: number) => void;
}

export const useCounter = create<QuantityCounter>()((set) => ({
  amount: {},
  emptyItem: (productId) => 
  set((state) => ({
    amount: {
    ...state.amount,
    [productId]: {
      ...state.amount[productId],
      count: 0 ,
    },
  },
})),
addItem: (productId) => 
  set((state) => ({
    amount: {
    ...state.amount,
    [productId]: {
      ...state.amount[productId],
      count: 1 ,
    },
  },
})),
  increase: (productId, by) =>
    set((state) => ({
        amount: {
        ...state.amount,
        [productId]: {
          ...state.amount[productId],
          count: (state.amount[productId]?.count || 0) + by,
        },
      },
    })),
  decrease: (productId, by) =>
    set((state) => ({
        amount: {
        ...state.amount,
        [productId]: {
          ...state.amount[productId],
          count:
            (state.amount[productId]?.count || 0) - by < 0
              ? 0
              : (state.amount[productId]?.count || 0) - by,
        },
      },
    })),
}));
