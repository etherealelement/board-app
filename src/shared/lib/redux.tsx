import {
  configureStore,
  createListenerMiddleware,
  combineSlices,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const rootSlice = combineSlices();

export const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: rootSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware),
});

// Infer the RootState and AppDispatch types from the store
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RootState = any;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const startAppListening = listenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();
