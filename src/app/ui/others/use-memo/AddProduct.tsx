'use client';

import { useMemo, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface Product {
  name: string;
  price: number;
}

export default function AddProduct() {
  const [name, setName] = useState<Product['name']>('');
  const [price, setPrice] = useState<Product['price']>(0);
  const [products, setProducts] = useState<Array<Product>>([]);

  const nameRef = useRef<Nullable<HTMLInputElement>>(null);

  // 🚩 Without useMemo, "total" is recalculated on every render
  const total = useMemo(
    () =>
      products.reduce((acc, product) => {
        console.log('Re-calculate');
        return acc + product.price;
      }, 0),
    [products]
  );

  const handleAdd = () => {
    setProducts([
      ...products,
      {
        name,
        price,
      },
    ]);

    // Reset
    setName('');
    setPrice(0);

    // Focus on Name field
    nameRef.current?.focus();
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        ref={nameRef}
        name="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="number"
        name="price"
        value={price}
        placeholder="Price"
        min={0}
        max={1000}
        onChange={(e) => setPrice(e.target.valueAsNumber)}
      />
      <Button onClick={handleAdd}>Add</Button>
      <Separator />
      <p>Total: {total}</p>
      <Separator />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            &bull; {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
