'use client';

import TemperatureConverter, {
  Fahrenheit,
  Kelvin,
} from './components/TemperatureConverter';
import Listings from './presentational/Listings';
import ListingsInput from './presentational/ListingsInput';
import { ListingsProvider } from './presentational/ListingsProvider';

export default function PatternsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
          <a
            href="https://javascriptpatterns.vercel.app/patterns/react-patterns/conpres"
            target="_blank"
          >
            Component/Presentational
          </a>
          {' - '}
          <a
            href="https://javascriptpatterns.vercel.app/patterns/react-patterns/higher-order-component"
            target="_blank"
          >
            HOC
          </a>
          {' - '}
          <a
            href="https://javascriptpatterns.vercel.app/patterns/react-patterns/hooks-pattern"
            target="_blank"
          >
            Hooks
          </a>
          {' - '}
          <a
            href="https://javascriptpatterns.vercel.app/patterns/react-patterns/provider-pattern"
            target="_blank"
          >
            Provider
          </a>
        </h1>
        <ListingsProvider>
          <div className="flex flex-col items-center gap-4">
            <ListingsInput />
            <Listings />
          </div>
        </ListingsProvider>
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
          <a
            href="https://javascriptpatterns.vercel.app/patterns/react-patterns/render-props"
            target="_blank"
          >
            Render Props
          </a>
        </h1>
        <TemperatureConverter
          renderKelvin={Kelvin}
          renderFahrenheit={Fahrenheit}
        />
      </div>
    </>
  );
}
