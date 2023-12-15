import { create } from "zustand";
import { useCounter } from "./QuantityStore";


export interface Product {
    id: number,
    category: string,
    description: string,
    image: string,
    rating: object,
    title: string,
    price: number
}

interface CartStore {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: number) => void;
}

export const useCart = create<CartStore>((set) => ({

    products: [],
    addProduct: (product) => set((state) => {
        const itemAdded =  state.products.some((itemExist) => itemExist.id === product.id);

        if(!itemAdded){
            return{
                 products: [...state.products, product],
            };
        }
        return state;
    }),
    removeProduct: (productId) => set((state) => ({
        products: state.products.filter((product) => product.id !== productId)
        })),

}))

