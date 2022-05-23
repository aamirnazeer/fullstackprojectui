import { createSlice } from "@reduxjs/toolkit";

export const mainState = createSlice({
  name: "main",
  initialState: {data: 'empty'},
  reducers: {
    apiCom: () => {},
    setDataFromApi: (state, action) => {
      state.data = action.payload
    }
  },
});

export const { apiCom, setDataFromApi } = mainState.actions;

export default mainState.reducer;
