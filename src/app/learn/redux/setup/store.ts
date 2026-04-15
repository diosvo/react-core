import { configureStore } from '@reduxjs/toolkit';
import reducer from '../setup/slices';

const store = configureStore({ reducer });

export default store;
