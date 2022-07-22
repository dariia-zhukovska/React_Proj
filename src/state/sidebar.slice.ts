import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import sideBarData from '../data/sidebar.data';
import { ISideBarData } from '../types';

const initialState: { data: ISideBarData[] } = {
	data: [],
};

const asyncFn = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(sideBarData);
		}, 1000);
	})
};

export const fetchData = createAsyncThunk(
  'fetchData',
  async () => {
    const response = await asyncFn();
    return response;
  }
)

export const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
		getData: (state) => {
			state.data = sideBarData;
		},
  },
	extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
      // Add user to the state array
      state.data = action.payload;
    })
  },
});

// Action creators are generated for each case reducer function
export const { getData } = counterSlice.actions

export default counterSlice.reducer
