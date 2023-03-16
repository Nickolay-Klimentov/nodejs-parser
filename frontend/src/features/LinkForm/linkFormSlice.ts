import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/api.link';

import { Link, State } from './Types/types';

const initialState: State = {
  link: {},
  error: undefined,
};

export const newLink = createAsyncThunk('links/create', ({ url }: Link) =>
  api.newLink({
    url,
  }),
);

const linkFormSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newLink.fulfilled, (state, action) => {
        state.link = { ...action.payload };
      })
      .addCase(newLink.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default linkFormSlice.reducer;
