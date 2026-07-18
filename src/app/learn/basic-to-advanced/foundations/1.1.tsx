import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/models';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="p-2">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      {product.onSale && <Badge>Sale</Badge>}
    </article>
  );
}
