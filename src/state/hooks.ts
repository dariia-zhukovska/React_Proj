import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import type { AppDispatch, IRootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;
