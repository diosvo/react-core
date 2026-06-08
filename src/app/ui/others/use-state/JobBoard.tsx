'use client';

import useQuery from '@/app/hooks/utilities/use-query/use-query';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface Job {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

function Job({ id }: { id: number }) {
  const { data, loading, error } = useQuery<Job>(async () => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    );
    return response.json();
  }, [id]);

  return (
    <article className="border border-slate-200 p-2 rounded">
      {loading && <p className="text-slate-500">Loading job {id}...</p>}
      {error && <p className="text-red-500">{error.message}</p>}

      {data && (
        <>
          {data.url ? (
            <a
              className="font-semibold hover:text-sky-600"
              href={data.url}
              target="_blank"
              rel="noreferrer"
            >
              {data.title}
            </a>
          ) : (
            <p className="font-semibold text-slate-900">{data.title}</p>
          )}

          <p className="text-slate-500">
            By {data.by} · {new Date(data.time * 1000).toLocaleString()}
          </p>
        </>
      )}
    </article>
  );
}

export default function JobBoard() {
  const {
    data: jobIds,
    loading,
    error,
  } = useQuery<Array<number>>(async () => {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/jobstories.json',
    );
    return response.json();
  }, []);
  const [currentIDs, setCurrentIDs] = useState<Array<number>>([]);

  useEffect(() => {
    if (jobIds?.length) {
      setCurrentIDs(jobIds.slice(0, 6));
    }
  }, [jobIds]);

  const totalCount = jobIds?.length;

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error.message}</p>;

  if (!totalCount) return <p className="text-slate-500">No data found.</p>;

  const handleLoadMore = () => {
    setCurrentIDs((prev) => {
      const nextCount = prev.length + 6;
      return jobIds ? jobIds.slice(0, nextCount) : prev;
    });
  };

  return (
    <>
      <p className="text-slate-500 text-right">
        {currentIDs.length} / {totalCount}
      </p>
      <div className="flex max-h-112 flex-col gap-3 overflow-y-auto my-4">
        {currentIDs.map((id) => (
          <Job key={id} id={id} />
        ))}
      </div>
      {currentIDs.length < totalCount && (
        <Button onClick={handleLoadMore} className="w-full">
          Load More
        </Button>
      )}
    </>
  );
}
