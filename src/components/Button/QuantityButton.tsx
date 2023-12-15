"use client"

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useCounter } from "@/store/QuantityStore";
import { useCart } from "@/store/ProductStore";

const QuantityButton = ({ className, cart, productId, product }: { className?: string, cart:boolean, productId:number, product?:any}) => {
  const { amount, increase, decrease, addItem } = useCounter();
  const { addProduct } = useCart();
  
  return (
    <div className={cn("relative gap-3 justify-between flex", className)}>

      {cart ?
      <>
      <div className={cn("flex gap-1", cart && "mt-[20px]")}>
        <div className="relative bg-slate-200 w-10 text-center rounded-l cursor-pointer" onClick={() => decrease(productId, 1)}>
          <p>-</p>
        </div>
        <div className="relative bg-slate-200 w-10 text-center">
          <p>{amount[productId]?.count || 0 }</p>
        </div>
        <div className="relative bg-slate-200 w-10 text-center rounded-r cursor-pointer" onClick={() => increase(productId, 1)}>
          <p>+</p>
        </div>
      </div>
      
      </>
      :
      <div className="relative text-center">
        <Button onClick={() => {addProduct(product); increase(productId, 1)}}>Add to Cart</Button>
      </div>      
      }
      
    </div>
  );
};

export default QuantityButton;
