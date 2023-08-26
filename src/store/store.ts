import { configureStore } from "@reduxjs/toolkit";
import jokes from "./jokesSlice";

export const store = configureStore({
  reducer: {
    jokes,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
