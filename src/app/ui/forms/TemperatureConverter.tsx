'use client';

import { Dispatch, SetStateAction } from 'react';

import { Equal } from 'lucide-react';
import { parseAsString, useQueryState } from 'nuqs';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function format(input: number) {
  // Show 4 d.p. if number has more than 4 decimal places.
  return /\.\d{5}/.test(input.toString()) ? input.toFixed(4) : input.toString();
}

export default function TemparatureCoverter() {
  const [celsius, setCelsius] = useQueryState(
    'celsius',
    parseAsString.withDefault('')
  );
  const [fahrenheit, setFahrenheit] = useQueryState(
    'fahrenheit',
    parseAsString.withDefault('')
  );

  function converter(
    value: string,
    setDestination: Dispatch<SetStateAction<string>>,
    calculateValue: (value: number) => number
  ) {
    const numericValue = Number(value);
    const isValid = !Number.isNaN(numericValue) && Boolean(value);
    setDestination(isValid ? format(calculateValue(numericValue)) : '');
  }

  return (
    <form>
      <div className="grid gap-2">
        <Label htmlFor="celsius">Celsius</Label>
        <Input
          type="number"
          id="celsius"
          aria-label="Celsius"
          className="w-full"
          value={celsius}
          onChange={(event) => {
            const newValue = event.target.value;
            setCelsius(newValue);
            converter(newValue, setFahrenheit, (value) => (value * 9) / 5 + 32);
          }}
        />
      </div>
      <div className="flex justify-center my-2">
        <Equal />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="fahrenheit">Fahrenheit</Label>
        <Input
          type="number"
          id="fahrenheit"
          aria-label="Fahrenheit"
          className="w-full"
          value={fahrenheit}
          onChange={(event) => {
            const newValue = event.target.value;
            setFahrenheit(newValue);
            converter(newValue, setCelsius, (value) => ((value - 32) * 5) / 9);
          }}
        />
      </div>
    </form>
  );
}
