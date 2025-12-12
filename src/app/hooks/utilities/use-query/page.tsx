'use client';

import useQuery from './use-query';

export default function UseQueryPage() {
  const request = useQuery(async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    return response.json();
  }, []);

  return (
    <>
      {request.loading && <p>Loading...</p>}
      {request.error && <p>Error: {request.error.message}</p>}
      {request.data && (
        <div>
          <p>Title: {request.data.title}</p>
          <p>User ID: {request.data.userId}</p>
          <p>ID: {request.data.id}</p>
        </div>
      )}
    </>
  );
}
