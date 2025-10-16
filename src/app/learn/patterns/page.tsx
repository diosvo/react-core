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
    <div className="m-8">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
          {[
            {
              name: 'Component/Presentational',
              path: 'conpres',
            },
            {
              name: 'HOC',
              path: 'higher-order-component',
            },
            {
              name: 'Hooks',
              path: 'hooks-pattern',
            },
            {
              name: 'Provider',
              path: 'provider-pattern',
            },
            {
              name: 'Compound',
              path: 'compound-pattern',
            },
          ].map(({ name, path }) => (
            <a
              key={path}
              href={`https://javascriptpatterns.vercel.app/patterns/react-patterns/${path}`}
              target="_blank"
            >
              {name + ' - '}
            </a>
          ))}
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
    </div>
  );
}
