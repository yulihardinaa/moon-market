"use client";

import {useEffect} from 'react';
import Image from 'next/image'

// interface ProductValue {
//     product:any
// }

const ProductList = ({
    data
}:{
    data:any
}) => {

    useEffect(() => {
        console.log(data); 
    },[data])

    return(
        <div>
            {/* {data?.map((product:any)=>{
                <>
            <div>
                <div className="bg-slate-200 h-96">
                    {product.image}
                </div>
            </div>
            <div>
                <p>
                    {product.title}
                </p>
            </div>
            <div className="relative gap-3 justify-between flex">
                <div className="relative bg-purple-700 w-20 py-2 text-center">
                    <p>
                      Add Cart        
                    </p>
                </div>
                <div className="flex gap-1">
                 <div className="relative bg-slate-200 w-20 py-2 text-center">
                 <p>
                      -      
                    </p>
                </div>
                <div className="relative bg-slate-200 w-20 py-2 text-center">
                <p>
                     0       
                    </p>
                </div>
                <div className="relative bg-slate-200 w-20 py-2 text-center">
                <p>
                   +       
                    </p>
                </div>   
                </div>
                
            </div>
                </>
            })} */}
         
            <div>
                <div>
                    <Image src={data[0].image} alt='product' width={300} height={300}/>
                </div>
            </div>
            <div>
                <p>
                    {data[0].title}
                </p>
            </div>
            <div className="relative gap-3 justify-between flex">
                <div className="relative bg-purple-700 w-20 py-2 text-center">
                    <p>
                      Add Cart        
                    </p>
                </div>
                <div className="flex gap-1">
                 <div className="relative bg-slate-200 w-20 py-2 text-center">
                 <p>
                      -      
                    </p>
                </div>
                <div className="relative bg-slate-200 w-20 py-2 text-center">
                <p>
                     0       
                    </p>
                </div>
                <div className="relative bg-slate-200 w-20 py-2 text-center">
                <p>
                   +       
                    </p>
                </div>   
                </div>
                
            </div>
        </div>
    );
}

export default ProductList;