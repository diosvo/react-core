'use client';

import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = SECONDS_IN_MINUTE * MS_IN_SECOND;
const MS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MS_IN_SECOND;

function formatTime(timeParam: number) {
  let time = timeParam;
  const parts = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  };

  if (time > MINUTES_IN_HOUR) {
    parts.hours = Math.floor(time / MS_IN_HOUR);
    time %= MS_IN_HOUR;
  }

  if (time > MS_IN_MINUTE) {
    parts.minutes = Math.floor(time / MS_IN_MINUTE);
    time %= MS_IN_MINUTE;
  }

  if (time > MS_IN_SECOND) {
    parts.seconds = Math.floor(time / MS_IN_SECOND);
    time %= MS_IN_SECOND;
  }

  parts.ms = time;

  return parts;
}

function padTwoDigit(number: number) {
  return number > 10 ? String(number) : `0${number}`;
}

export default function Stopwatch() {
  // Total time that passed so far
  const [totalDuration, setTotalDuration] = useState(0);
  // Timer id ID of active interval, if one is running
  const [timerId, setTimerId] = useState(null);
  const lastTickTiming = useRef<Nullable<number>>(null);

  // Derived state to determine if there's timer running
  const isRunning = timerId !== null;

  const startTimer = () => {
    lastTickTiming.current = Date.now();
    setTimerId(
      window.setInterval(() => {
        const now = Date.now();
        const timePassed = now - (lastTickTiming.current ?? 0);
        setTotalDuration(
          (duration) =>
            // Use the callback form of setState to ensure
            // we are using the latest value of duration.
            duration + timePassed,
        );
        lastTickTiming.current = now;
      }, 1) as unknown as null,
    );
  };

  const stopInterval = () => {
    if (timerId) window.clearInterval(timerId);
    setTimerId(null);
  };

  const resetTimer = () => {
    stopInterval();
    setTotalDuration(0);
  };

  const toggleTimer = () => {
    if (isRunning) {
      stopInterval();
    } else {
      startTimer();
    }
  };

  const formattedTime = formatTime(totalDuration);

  return (
    <div>
      <button className="flex items-baseline gap-1" onClick={toggleTimer}>
        {formattedTime.hours > 0 && (
          <span>
            <span className="text-lg">{formattedTime.hours}</span>
            <small>h</small>
          </span>
        )}
        {formattedTime.minutes > 0 && (
          <span>
            <span className="text-lg">{formattedTime.minutes}</span>
            <small>m</small>
          </span>
        )}
        <span>
          <span className="text-lg">{formattedTime.seconds}</span>
          <small>s</small>
        </span>
        <span>{padTwoDigit(Math.floor(formattedTime.ms / 10))}</span>
      </button>
      <Button onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</Button>
      <Button variant="destructive" onClick={resetTimer} className="ml-2">
        Reset
      </Button>
    </div>
  );
}
