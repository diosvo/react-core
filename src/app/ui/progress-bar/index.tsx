const MIN = 0;
const MAX = 100;

export default function ProgressBar({ value }: { value: number }) {
  // Handled invalid values and covert them to be within [0,100]
  const clampedValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <div className="bg-gray-100 rounded-full border-1 border-solid overflow-hidden">
      <div
        className="text-sm text-center bg-indigo-500 text-white"
        style={{ width: `${clampedValue}%` }}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
      >
        {clampedValue}%
      </div>
    </div>
  );
}
