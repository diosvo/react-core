# Redux Toolkip

# Structuring Files and Folders

[React]

src/

- components/<name> (index+styles) -- shared components
- features/<name> -- feature-specific components
  - .../components/ -- shared components for the feature
  - ../pages/ -- pages related to the feature
  - index
  - styles

[Redux]

src/

Previous:

- store/<feature>
  - index
  - actions
  - reducer

Now (prefer) - **Ducks Pattern** -- Collocates actions, action types and reducers

- store/<feature> (includes all into one file)

👍🏻 Rules of thumb

- Export default function reducer
- Export action creators as functions
- Action types in the form: `<feature>/reducer/ACTION_TYPE` (Uppercase with underscores)
