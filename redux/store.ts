import { configureStore } from "@reduxjs/toolkit";
import commandReducer from "./slices/commands";
import directoryReducer from "./slices/directory";

const store = configureStore({
  reducer: {
    command: commandReducer,
    directory: directoryReducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
