import { Badge } from '@/components/ui/badge';

export default function ProductCard({
  product,
}: {
  product: { name: string; price: number; onSale: boolean; imageUrl: string };
}) {
  return (
    <article className="p-2">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      {product.onSale && <Badge>Sale</Badge>}
    </article>
  );
}
