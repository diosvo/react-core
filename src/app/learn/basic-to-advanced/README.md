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

## [1.4](./foundations/1.2.tsx) List and keys

**Concept.** Each items needs a stable, unique `key`

**Why it matters.** Using the array **index** as a key breaks the moment we sort, filter or delete items. → React reuse the wrong DOM node and state gets attached to the wrong row.

**Scenario.** Product list where items can be reorder or deleted.

## [1.5](./foundations/1.5.tsx) Conditional rendering

**Concept.** Decide what to show: `&&`, ternaries (`? :`), or early `return`s.

**Why it matters.** The difference between readable and spaghetti components.

**Scenario.** A data panel handling the 3 or 4 states every real fetch has.

## [1.6](./foundations/1.5.tsx) Handling events

**Concept.** `onClick`, `onChange`, `onSubmit` and pass a function - not call it!

**Why it matters.**

- `onClick=handleClick` - pass the function
- `onClick=handleClick()` calls it during render - fire the handler immediately and infinitely.

**Scenario.** A form submit that prevents the browser's default page reload.

# LEVEL 2 — State and Interactivity

## 2.1 `useState`

**Concept.** State is data that changes over time and, when it changes, re-renders the component.

**Why it matters.** This is _the_ fundamental React hook. Two rules that prevent 90% of state bugs:

1. **Never mutate state directly.** `state.push(x)` won't re-render. Create a new value: `setItems([...items, x])`.
2. **Use the updater function when the new state depends on the old one:** `setCount(c => c + 1)`. This avoids stale-value bugs when updates batch.

**Real-world scenario.** A quantity selector in a cart.

**Updating objects and arrays immutably** (the pattern we'll repeat constantly):

```jsx
// Object: copy, then override one field
setUser((prev) => ({ ...prev, email: newEmail }));

// Array add
setItems((prev) => [...prev, newItem]);

// Array remove
setItems((prev) => prev.filter((item) => item.id !== targetId));

// Array update one item
setItems((prev) =>
  prev.map((item) => (item.id === targetId ? { ...item, done: true } : item)),
);
```
