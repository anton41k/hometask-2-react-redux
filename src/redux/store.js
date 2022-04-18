import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";

export default configureStore({
  reducer: {
    notes: noteReducer,
  },
  //   devTools: process.env.NODE_ENV === "development",
});
