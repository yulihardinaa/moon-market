"use client"

import React  from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"
import Image from "next/image";
import QuantityButton from "../Button/QuantityButton";
import { useCart } from "@/store/ProductStore";
import { Product } from "@/store/ProductStore";
import { Button } from '../ui/button';
import { useCounter } from '@/store/QuantityStore';

interface ProductProps {
    product: Product;
    onRemoveProduct: (productId: number) => void;
    emptyItem: (productId: number) => void;
}

const ProductCart: React.FC<ProductProps> = ({ product, onRemoveProduct, emptyItem}) => (
<div className='relative flex max-w-full h-[200px] align-middle items-center'>
    <Checkbox />
            <div className="relative flex max-h-[80%]">
                <Image alt="product" src={product.image} width={150} height={150} className='object-contain'/>
                <div className="h-[200px] align-middle items-center ml-4">
                    <div>
                    <Label>
                    {product.title}
                    </Label>                        
                    </div>
                    <div>
                    <Label>
                    Price: ${product.price}
                    </Label>                        
                    </div>
                    <div className="relative">
                    <QuantityButton cart={true} productId={product.id} key={product.id} />
                    <Button className='bg-red-500 mt-3' onClick={() =>{ onRemoveProduct(product.id); emptyItem(product.id) }}>
                        Remove item
                    </Button>                       
                    </div>

                </div>
            </div>
</div>
);


const CheckoutProduct = () => {
    const { products, removeProduct } = useCart();
    const { emptyItem, amount } = useCounter();

    return(
        <div className="relative max-w-full h-[88vh] align-middle items-center">
            {products.length === 0 ? 
            <>
             <div className="relative text-gray-600 text-center">
                No Product yet
            </div>   
            </>:<>
            <div className="grid">
                {products.map((product: Product) =>(
                <ProductCart
                key={product.id}
                product={product}
                onRemoveProduct={removeProduct}
                emptyItem={emptyItem}
                />                    
                ))}
                 <h3 className='text-2xl'>Total: ${products.reduce((total, product) => total + (product.price * amount[product.id].count), 0).toFixed(2)}</h3>
            </div>
            </> }
        </div>
    );

};

export default CheckoutProduct;