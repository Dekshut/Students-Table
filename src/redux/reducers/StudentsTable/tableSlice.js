import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTable = createAsyncThunk(
  'table/fetchTable',
  async (options, {rejectWithValue}) => {
    try {
      const searchOption = options.searchValue ? `&search=${options.searchValue}` : '';
      const sortOption = options.sortBy ? `&sortBy=${options.sortBy}&sortDir=${options.dir}` : '';

      const response = await fetch(`https://test-task-j.herokuapp.com/data?page=${options.pageForFetch}
    &size=${options.rowsForFetch}${searchOption}${sortOption}`);
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    table: [],
    archivedTable: [],
    totalPages: null,
    status: null,
    error: null,
    rows: 10,
    currentPage: 1,
  },
  reducers: {
    setRowsForPage(state, action){
      state.rows = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setArchivedTable(state, action){
      if (action.payload.type === 'add'){
        action.payload.arr.forEach(id => {
          state.archivedTable.push(...state.table.filter(item => item.id === id));
        });
      } else if (action.payload.type === 'remove'){
        const index = state.archivedTable.indexOf(state.archivedTable.id === action.payload.id, 0);

        state.archivedTable.splice(index, 1);
      }
    }
  },
  extraReducers: {
    [fetchTable.pending]: (state) => {
      state.status = 'loading';
      state.error = null; 
    },
    [fetchTable.fulfilled]: (state, action) => { 
      state.status = 'resolved';
      state.table = action.payload.data;
      state.totalPages = action.payload.totalPages;
    },
    [fetchTable.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
})

export const { setRowsForPage, setCurrentPage, setArchivedTable } = tableSlice.actions;

export default tableSlice.reducer;