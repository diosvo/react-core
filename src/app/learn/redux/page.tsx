import { composeResult, pipeResult } from './helpers/functional-programming';
import { updatedObject } from './helpers/immutability';

export default function ReduxPage() {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full p-4">
      <h1 className="text-2xl font-bold">Redux</h1>
      <p>Compose: {composeResult}</p>
      <p>Pipe: {pipeResult}</p>
      <p>Updating objects: {updatedObject.address.city}</p>
    </div>
  );
}
