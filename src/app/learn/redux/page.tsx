import { compose, pipe } from 'lodash/fp';

export default function ReduxPage() {
  const input = '    JavaScript!    ';
  const output = '<div>' + input.trim().toLowerCase() + '</div>';

  const trim = (str: string) => str.trim();
  const wrapInDiv = (str: string) => `<div>${str}</div>`;
  const toLowerCase = (str: string) => str.toLowerCase();

  const fnComposition = wrapInDiv(toLowerCase(trim(input)));

  // ⬆️ Replace with compose: right-to-left
  const composeResult = compose(wrapInDiv, toLowerCase, trim)(input);

  // Alternatively, using pipe: left-to-right
  const pipeResult = pipe(trim, toLowerCase, wrapInDiv)(input);

  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full p-4">
      <h1 className="text-2xl font-bold">Redux</h1>
      <p>Compose: {composeResult}</p>
      <p>Pipe: {pipeResult}</p>
    </div>
  );
}
