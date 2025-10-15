'use client';

import TemperatureConverter, {
  Fahrenheit,
  Kelvin,
} from './components/TemperatureConverter';
import Listings from './container/Listings';

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
          {' & '}
          <a
            href="https://javascriptpatterns.vercel.app/patterns/react-patterns/higher-order-component"
            target="_blank"
          >
            HOC Pattern
          </a>
        </h1>
        <Listings data={{ listings: [] }} />
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
          <a
            href="https://javascriptpatterns.vercel.app/patterns/react-patterns/render-props"
            target="_blank"
          >
            Render Props Pattern
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
