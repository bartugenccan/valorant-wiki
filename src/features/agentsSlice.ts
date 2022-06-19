import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Agent } from "../agentTypes";

interface AgentsState {
  loading: boolean;
  error: string | undefined;
  data: Agent[];
}

const initialState: AgentsState = {
  loading: false,
  error: "",
  data: [],
};

export const fetchAgents = createAsyncThunk(
  "agents/fetchAgents",
  async (): Promise<Agent[]> => {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();
    return data.data;
  }
);

export const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAgents.pending, (state, action) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(fetchAgents.fulfilled, (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload];
      console.log(state.data);
    });
    builder.addCase(fetchAgents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});

export const selectAgents = (state: RootState) => state.agents.data;
export default agentsSlice.reducer;
