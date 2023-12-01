import {useEffect} from 'react';
import ProductList from "../ProductList/ProductList";
import ProductDisplayWrapper from "./ProductDisplayWrapper";



const ProductDisplay = async () => {
    async function getData(){
        const res:any = await fetch('https://fakestoreapi.com/products')   
        return res.json(); 
    }
    const data = await getData();
    return(
        <ProductDisplayWrapper>
            <ProductList data={data} />
        </ProductDisplayWrapper>
    );
}

export default ProductDisplay;