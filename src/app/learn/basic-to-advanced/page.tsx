import ProductGrid from './foundations/1.2';
import PassingDataDown from './foundations/1.3';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 149.99,
    onSale: true,
    imageUrl: 'https://dummyjson.com/image/50',
  },
  {
    id: 2,
    name: 'Organic Coffee Beans',
    price: 24.99,
    onSale: false,
    imageUrl: 'https://dummyjson.com/image/50',
  },
];

export default function BasicToAdvancedPage() {
  return (
    <>
      <ProductGrid products={products} />
      <PassingDataDown />
    </>
  );
}
