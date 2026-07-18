import { Product } from '@/lib/models';
import ProductCard from './1.1';

export default function ProductGrid({
  products,
}: {
  products: Array<Product>;
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
