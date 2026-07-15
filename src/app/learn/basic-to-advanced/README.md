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

**Real-world scenario.** Rendering a product card where the price, title, and a "sale" badge all come from data.
