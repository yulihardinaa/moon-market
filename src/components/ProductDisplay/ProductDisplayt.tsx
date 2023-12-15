"use client";

import {useEffect} from 'react';
import Image from 'next/image'
import QuantityButton from '../Button/QuantityButton';


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
            <QuantityButton cart={false} key={data.id} productId={data.id} product={data}/>
        </div>
    );
}

export default ProductDisplay;