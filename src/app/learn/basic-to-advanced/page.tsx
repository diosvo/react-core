// Level 1
import ProductGrid from './foundations/1.2';
import PassingDataDown from './foundations/1.3';
import ConditionalRendering from './foundations/1.5';
import HandlingEvents from './foundations/1.6';

// Level 2
import QuantitySelector from './state-and-interactivity/2.1';

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
      <h2>Level 1. Foundation</h2>
      1+2+4
      <ProductGrid products={products} />
      3.
      <PassingDataDown />
      5.
      <ConditionalRendering />
      6.
      <HandlingEvents />
      <h2>Level 2. State and Interactive</h2>
      <QuantitySelector />
    </>
  );
}
