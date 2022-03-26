import { configureStore } from "@reduxjs/toolkit";
import selectMenuSlice from "../reducers/StudentsTable/selectMenuSlice";
import tableSlice from "../reducers/StudentsTable/tableSlice";

export default configureStore({
  reducer: {
    table: tableSlice,
    select: selectMenuSlice,
  }
})