import { compose, pipe } from 'lodash/fp';

const input = '    JavaScript!    ';
const output = '<div>' + input.trim().toLowerCase() + '</div>';

const trim = (str: string) => str.trim();
const wrapInDiv = (str: string) => `<div>${str}</div>`;
const toLowerCase = (str: string) => str.toLowerCase();

// Look like the same with wrapInDiv → Currying!
const wrapInSpan = (str: string) => `<span>${str}</span>`;
const wrap = (type: string, children: string) =>
  `<${type}>${children}</${type}>`;
// 🤔 Problem ^: Cannot use wrap('div', 'content') directly in compose/pipe, because it expects a single argument function instead
const wrapCurried = (type: string) => (children: string) =>
  `<${type}>${children}</${type}>`;

const fnComposition = wrapInDiv(toLowerCase(trim(input)));

// ⬆️ Replace with compose: right-to-left
export const composeResult = compose(wrapInDiv, toLowerCase, trim)(input);

// Alternatively, using pipe: left-to-right
export const pipeResult = pipe(trim, toLowerCase, wrapCurried('div'))(input);
