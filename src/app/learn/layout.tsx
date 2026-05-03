// Design the store
// Design the actions: add/ mark as resolved/ delete
// Create a reducer
// Setup the store

'use client';

// import './redux/helpers/store-testing'; // 🧪 Uncomment to test the store

import { Provider } from 'react-redux';
import store from './redux/setup/store';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto">
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
