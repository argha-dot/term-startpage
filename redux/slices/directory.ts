import { createSlice } from "@reduxjs/toolkit";
import { directoryInterface } from "../../interfaces/directoryInterfaces";


interface initialInstance {
  value: directoryInterface
}

const initialState: initialInstance = {
  value: {
    "reddit": {
      type: "file",
      link: "https://www.reddit.com",
    },
    "folder": {
      "something": {
        type: "file",
        link: "https://www.youtube.com",
      }
    }
  }
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
