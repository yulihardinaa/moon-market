"use client";

import {useEffect} from 'react';
import Image from 'next/image'
import { Button } from '../ui/button';


const ProductDisplay = ({
    data
}:{
    data:any
}) => {

    useEffect(() => {
        console.log(data); 
    },[data])

    return(
        <div className='relative text-left border rounded-xl shadow-lg shadow-purple-200 p-5 w-96'>         
            <div className='relative mb-10 h-[300px] '>
                <div className='relative w-[300px] h-[300px] translate-x-1/4 flex align-middle items-center'>
                    <Image src={data.image} alt='product' width={180} height={180} className='object-cover'/>
                </div>
            </div>
            <div>
                <p className='font-semibold h-10'>
                    {data.title}
                </p>
            </div>
            <div>
                <p>
                   Price:{" "}${data.price}
                </p>
            </div>
            <div className="relative gap-3 justify-between flex">
                <div className="relative text-center">
                <Button>
                    Add to Cart  
                </Button>
                </div>
                <div className="flex gap-1">
                 <div className="relative bg-slate-200 w-10 text-center rounded-l">
                    <p>
                      -      
                    </p>
                </div>
                <div className="relative bg-slate-200 w-10 text-center">
                <p>
                     0       
                    </p>
                </div>
                <div className="relative bg-slate-200 w-10 text-center rounded-r ">
                <p>
                   +       
                    </p>
                </div>   
                </div>
                
            </div>
        </div>
    );
}

export default ProductDisplay;