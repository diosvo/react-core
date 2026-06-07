'use client';

import { CircleDashed, Heart } from 'lucide-react';
import { useState, useTransition } from 'react';

import { Button } from '@/components/ui/button';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<Nullable<string>>(null);

  const handleClick = () => {
    setError(null);

    startTransition(async () => {
      const response = await fetch(
        'https://questions.greatfrontend.com/api/questions/like-button',
        {
          method: 'POST',
          body: JSON.stringify({ action: liked ? 'unlike' : 'like' }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );

      if (!response.ok) {
        const { message } = await response.json();
        setError(message);
        return;
      }

      setLiked((prev) => !prev);
    });
  };

  return (
    <>
      <Button
        variant={liked ? 'destructive' : 'outline'}
        className="hover:text-red-500 hover:bg- hover:border-red-500"
        onClick={handleClick}
      >
        {isPending ? <CircleDashed /> : <Heart />}
        Like
      </Button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </>
  );
}
