import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Joke {
  categories: string[],
  created_at: string,
  icon_url: string,
  id: string,
  updated_at: string,
  url: string,
  value: string,
}

interface ApiResponse {
  result: Joke[],
  total: number,
}

export interface JokesState {
  total: number,
  jokes: Joke[],
  loading: boolean;
  error: string;
}

const initialState: JokesState = {
  total: 0,
  jokes: [],
  loading: false,
  error: "",
};

export const fetchJokes = createAsyncThunk<ApiResponse, string>("jokes/fetchJokes", (query) => axios
  .get<ApiResponse>(`https://api.chucknorris.io/jokes/search?query=${query}`)
  .then((response) => response.data));

const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJokes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJokes.fulfilled, (state, action) => {
      state.loading = false;
      state.jokes = action.payload.result;
      state.total = action.payload.total;
      state.error = "";
    });
    builder.addCase(fetchJokes.rejected, (state, action) => {
      state.loading = false;
      state.jokes = [];
      state.error = action.error.message || "";
    });
  },
});

export default jokesSlice.reducer;
