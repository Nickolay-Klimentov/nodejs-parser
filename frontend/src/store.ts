import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import linkFormSlice from './features/LinkForm/linkFormSlice';

const store = configureStore({
  reducer: {
    linkFormState: linkFormSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
