import { createSlice } from "@reduxjs/toolkit";
import { commandInterface } from "../../interfaces/commandInterface";

interface initialInstance {
  value: commandInterface[],
}

const initialState: initialInstance = {
  value: [
    {
      command: "ls",
    },
  ]
}

const commandSlice = createSlice({
  name: "command",
  initialState,
  reducers: {
    setCommand: (state, action) => {
      state.value = action.payload;
    },
    clearCommands: (state) => {
      state.value = [];
    }
  }
});

export const { setCommand, clearCommands }  = commandSlice.actions;
export default commandSlice.reducer;
