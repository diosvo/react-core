import { configureStore } from '@reduxjs/toolkit';
import reducer from '../setup/toolkit';

const store = configureStore({ reducer });

export default store;
