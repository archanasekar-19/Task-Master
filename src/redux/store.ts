import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers';

export type RootState = ReturnType<typeof todoReducer>;

const store = configureStore({
  reducer: todoReducer,
});

export default store;
