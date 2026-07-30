import ProductGrid from './foundations/1.2';
import PassingDataDown from './foundations/1.3';
import ConditionalRendering from './foundations/1.5';
import HandlingEvents from './foundations/1.6';

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
      1+2+4
      <ProductGrid products={products} />
      3.
      <PassingDataDown />
      5.
      <ConditionalRendering />
      <ProductGrid products={products} />
      <PassingDataDown />
    </>
  );
}
