import ProductDisplay from '../ProductDisplay/ProductDisplayt';
import ProductDisplayWrapper from './ProductDisplayWrapper';
import { Product } from '@/store/ProductStore';

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
