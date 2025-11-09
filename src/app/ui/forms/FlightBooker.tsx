'use client';

import { useState } from 'react';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TODAY = formatDate(new Date());
const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return [year, month, day].join('-');
}

export default function FlightBookerPage() {
  const [flightOption, setFlightOption] = useState('one-way');
  const [departureDate, setDepartureDate] = useState(
    formatDate(new Date(Date.now() + DAY_IN_MILLISECONDS)) // Tomorrow.
  );
  const [returnDate, setReturnDate] = useState(departureDate);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (flightOption === 'one-way') {
      toast('You have booked a one-way flight on ' + departureDate);
      return;
    }

    toast(
      `You have booked a round-trip flight, departing on ${departureDate} and returning on ${returnDate}`
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <Select value={flightOption} onValueChange={setFlightOption}>
          <SelectTrigger>
            <SelectValue placeholder="Select a flight" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one-way">One-way flight</SelectItem>
            <SelectItem value="round-trip">Round-trip flight</SelectItem>
          </SelectContent>
        </Select>
        <div className="grid gap-2">
          <Label htmlFor="departure-date">Departure Date</Label>
          <Input
            type="date"
            id="departure-date"
            aria-label="Departure date"
            min={TODAY}
            className="w-full"
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
          />
        </div>
        {flightOption === 'round-trip' && (
          <div className="grid gap-2">
            <Label htmlFor="return-date">Return Date</Label>
            <Input
              type="date"
              id="return-date"
              aria-label="Return date"
              min={departureDate}
              value={returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
            />
          </div>
        )}
        <Button className="w-full">Submit</Button>
      </div>
    </form>
  );
}
