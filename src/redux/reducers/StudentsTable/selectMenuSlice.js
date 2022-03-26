import { createSlice } from "@reduxjs/toolkit";

const selectMenuSlice = createSlice({
  name: 'select',
  initialState: {
    selectActivated: false,
    selectedStudents: 0,
    selectAll: false,
    selectedID: [],
  },
  reducers: {
    setSelectActivated(state, action) {
      if (action.payload.active){
        state.selectedStudents += 1;
        state.selectActivated = true;
        state.selectedID.push(action.payload.id);
      } else {
        state.selectedStudents -= 1;
        if (state.selectedStudents === 0){
          state.selectActivated = false;
        }
        if (action.payload.id){
          const index = state.selectedID.indexOf(action.payload.id, 0);
          state.selectedID.splice(index, 1);
        }
      }
    },
    resetSelect(state){
      state.selectedStudents = 0;
      state.selectActivated = false;
      state.selectAll = false;
      state.selecectedID = [];
    },
    setSelectAll(state, action) {
      state.selectAll = action.payload.toggle;
      if (action.payload.toggle){
        state.selectActivated = true;
        state.selectedStudents = action.payload.rows;
      } else {
        state.selectActivated = false;
        state.selectedStudents = 0;
        state.selecectedID = []
      }
    },
  },
})

export const { setSelectActivated, resetSelect, setSelectAll } = selectMenuSlice.actions;

export default selectMenuSlice.reducer;