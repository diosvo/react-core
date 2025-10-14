'use client';

import { ComponentType, useEffect, useState } from 'react';

import LoadingSpinner from '../components/LoadingSpinner';
import { WithLoaderProps } from '../utils/models';

export default function withLoader<T>(
  Component: ComponentType<WithLoaderProps<T>>,
  url: string
) {
  const WrappedComponent = (props: WithLoaderProps<T>) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    if (!data) return <LoadingSpinner />;

    return <Component {...(props as T)} data={data} />;
  };

  WrappedComponent.displayName = `withLoader(${Component.name})`;

  return WrappedComponent;
}
