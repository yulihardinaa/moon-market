// ProductList.tsx

import ProductDisplay from '../ProductDisplay/ProductDisplayt';
import ProductDisplayWrapper from './ProductDisplayWrapper';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: object;
}

const ProductList = async () => {
  async function getData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      return response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  
  const data = await getData();

  return (
    <ProductDisplayWrapper>
      {data.map((product: Product) => (
        <ProductDisplay key={product.id} data={product} />
      ))}
    </ProductDisplayWrapper>
  );
};

export default ProductList;
