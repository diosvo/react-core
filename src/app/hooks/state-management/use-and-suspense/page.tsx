'use client';

import { Suspense, use } from 'react';
import z from 'zod';

const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

type Post = z.infer<typeof PostSchema>;

const fetchPost = async (id: number) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
  );
  const possiblePost = await response.json();
  const post = PostSchema.parse(possiblePost);

  return post;
};

function Post({ postPromise }: { postPromise: Promise<Post> }) {
  const post = use(postPromise);

  return <p>&bull; Title: {post.title}</p>;
}

export default function UseAndSuspense() {
  const postPromise = fetchPost(1);

  return (
    <Suspense fallback={<p>Loading posts...</p>}>
      <Post postPromise={postPromise} />
    </Suspense>
  );
}
