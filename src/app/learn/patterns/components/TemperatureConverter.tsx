'use client';

import { ReactNode, useState } from 'react';

import { Temperature } from '../utils/models';

export function Kelvin({ value }: Temperature) {
  return (
    <div className="m-4 flex flex-col bg-gray-700 p-4 rounded-lg">
      The temperature in Kelvin is:
      <span className="text-pink-400 text-2xl font-bold">{value}K</span>
    </div>
  );
}

export function Fahrenheit({ value }: Temperature) {
  return (
    <div className="m-4 flex flex-col bg-gray-700 p-4 rounded-lg">
      The temperature in Fahrenheit is:
      <span className="text-pink-400 text-2xl font-bold">{value}°F</span>
    </div>
  );
}

export default function TemperatureConverter(props: {
  renderKelvin: (props: Temperature) => ReactNode;
  renderFahrenheit: (props: Temperature) => ReactNode;
}) {
  const [value, setValue] = useState(0);

  return (
    <div className="bg-gray-900 p-4 rounded-lg text-white">
      <input
        type="number"
        placeholder="Degrees Celcius"
        className="bg-gray-700 px-3 py-2 m-4 rounded border-none text-white"
        onChange={(e) => {
          const num = e.target.value;
          if (!num) return setValue(0);
          setValue(parseInt(num));
        }}
      />
      {props.renderKelvin({ value: Math.floor(value + 273.15) })}
      {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
    </div>
  );
}
