import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/AuthSlice";
import { apiSlice } from "./features/ApiSlice";
import OrderStatusSlice from "./features/analyticSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    orderStatus: OrderStatusSlice,
  },
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
