import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Weapon } from "../weaponTypes";

interface WeaponsState {
  loading: boolean;
  error: string | undefined;
  data: Weapon[];
}

const initialState: WeaponsState = {
  loading: false,
  error: "",
  data: [],
};

export const fetchWeapons = createAsyncThunk(
  "weapons/fetchWeapons",
  async (): Promise<Weapon[]> => {
    const response = await fetch("https://valorant-api.com/v1/weapons");
    const data = await response.json();
    return data.data;
  }
);

export const weaponsSlice = createSlice({
  name: "weapons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeapons.pending, (state, action) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(fetchWeapons.fulfilled, (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload];
      console.log(state.data);
    });
    builder.addCase(fetchWeapons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});

export const selectWeapons = (state: RootState) => state.weapons.data;
export default weaponsSlice.reducer;
