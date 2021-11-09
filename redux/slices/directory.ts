import { createSlice } from "@reduxjs/toolkit";
import { fileInterface, folderInterface } from "../../interfaces/directoryInterfaces";


interface initialInstance {
  value: (folderInterface | fileInterface)[]
}

const initialState: initialInstance = {
  value: [
  ]
}

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {
    setDirectory: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setDirectory } = directorySlice.actions;
export default directorySlice.reducer;
