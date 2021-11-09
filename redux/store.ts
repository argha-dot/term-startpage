import { configureStore } from "@reduxjs/toolkit";
import commandReducer from "./slices/commands";

const store = configureStore({
  reducer: {
    command: commandReducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
