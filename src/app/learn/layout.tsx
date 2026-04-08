// Design the store
// Design the actions: add/ mark as resolved/ delete
// Create a reducer
// Setup the store

'use client';

import './redux/helpers/store-testing';

//#region TESTING THE STORE

//#endregion { bugs: [ { id: 1, description: 'Bug 1', resolved: false } ] }

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-7xl mx-auto">{children}</div>;
}
