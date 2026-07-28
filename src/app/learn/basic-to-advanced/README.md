# A Structured React Learning Path (Basic → Advanced)

_Current for React 19. Each concept includes the "why," a real-world scenario, and a working example._

---

## How to use this guide

The path is ordered so each concept builds on the previous one. Don't skip ahead — Level 3 (effects) will confuse we if Level 2 (state) isn't solid. Type out every example ourselves rather than copy-pasting; muscle memory matters more than reading comprehension here.

A note on scope: React has ~15 built-in hooks, but we'll use 5 of them 95% of the time. This guide teaches the essential ones in depth and explicitly tells us which ones are rare so we don't waste time. At the end there's a "hooks we can ignore for now" section with the reasoning.

---

# LEVEL 1 — Foundations

## [1.1](./foundations/1.1.tsx) JSX: what it actually is

**Concept.** JSX is not HTML. It's syntactic sugar that compiles to `React.createElement(...)` calls.

Understanding this explains every "weird" rule:

- `className` instead of `class`
- `{}` to embed JavaScript
- Can only return one root element.

**Why it matters.** Once we internalize that JSX is _just JavaScript expressions_, we stop memorizing rules and start reasoning. `{condition && <X/>}` isn't special syntax — it's a plain boolean expression that happens to evaluate to an element.

**Scenario.** Rendering a product card where the price, title, and a "sale" badge all come from data.

## [1.2](./foundations/1.2.tsx) Components and composition

**Concept.** A component is a function that returns JSX. Components render other components. That's the entire mental model. Our whole UI is a tree of functions calling functions.

**Why it matters.** Beginners write one giant component. Experienced developers break UIs into small, named, reusable pieces. The skill we're building is knowing _where to draw the boundaries_.

**Scenario.** A product grid on an e-commerce page composes many ProductCards.

### 👍🏻 Rules:

Extract a component when a chunk of JSX

- repeats
- has its own logic/ state
- make the parent hard to read

Don't extract just because a function feels long

## [1.3](./foundations/1.3.tsx) Props: passing data down

**Concept.** _one direction_: parent → child. A child can never modify its own props; they're read-only.

**Why it matters.** When something on screen is wrong, we trace _up_ the tree to find where the data came from

**Scenario.** A reusable button that changes label, style, and behavior purely through props.

### 👍🏻 Rules:

Extract a component when a chunk of JSX

- repeats
- has its own logic/ state
- make the parent hard to read

Don't extract just because a function feels long
