import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Map } from "../mapTypes";
import { RootState } from "../store/store";

interface MapsState {
  loading: boolean;
  error: string | undefined;
  data: Map[];
}

const initialState: MapsState = {
  loading: false,
  error: "",
  data: [],
};

export const fetchMaps = createAsyncThunk(
  "maps/fetchMaps",
  async (): Promise<Map[]> => {
    const response = await fetch("https://valorant-api.com/v1/maps");
    const data = await response.json();
    return data.data;
  }
);

export const mapsSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMaps.pending, (state, action) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(fetchMaps.fulfilled, (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload];
    });
    builder.addCase(fetchMaps.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});

export default mapsSlice.reducer;
export const selectMaps = (state: RootState) => state.maps.data;
