# Redux Toolkip

# Structuring Files and Folders

## [React]

src/

- components/<name> (index+styles) -- shared components
- features/<name> -- feature-specific components
  - .../components/ -- shared components for the feature
  - ../pages/ -- pages related to the feature
  - index
  - styles

## [Redux]

Inside `src/`

### Structuring the store

#### Slice of state

- Fast lookup: Object
- Ordered data: Array

Need both?

> If user change the order of the array, we simply reorder the items in the array.

```js
{
  byId: {
    1: { ... },
    2: { ... },
    3: { ... },
  },
  allIds: [1, 2, 3],
}
```

#### Store structure

```js
{
  entities: {
    tags: [],
    products: [],
    ...
  },
  auth: {
    user: null,
    token: null,
  },
  ui: {
    products: {
      query: '',
      sort: 'asc',
    }
  }
}
```

Hierarchy:

```text
Store → Root
       → Entities
        → <feature>
        → ...
       → UI
       → Auth
```

### Standard Pattern (Old)

- store/<feature>
  - index
  - actions
  - reducer

**Ducks Pattern** -- Collocates actions, action types and reducers

- store/<feature> (includes all into one file)

#### 👍🏻 Rules of thumb

- Export default function reducer
- Export action creators as functions
- Action types in the form: `<feature>/reducer/ACTION_TYPE` (Uppercase with underscores)

### Toolkit (New)

- store/<slice-name>
  - export default slice.reducer
  - export const { ... } = slice.actions
