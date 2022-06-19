import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Agent } from "../agentTypes";

interface AgentsState {
  loading: boolean;
  error: string | undefined;
  data: Agent[];
  singleAgent: Agent | undefined;
}

const initialState: AgentsState = {
  loading: false,
  error: "",
  data: [],
  singleAgent: undefined,
};

export const fetchAgents = createAsyncThunk(
  "agents/fetchAgents",
  async (): Promise<Agent[]> => {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();
    return data.data;
  }
);

export const fetchSelectedAgent = createAsyncThunk(
  "agents/fetchSelectedAgent",
  async (id: string): Promise<Agent> => {
    const response = await fetch(`https://valorant-api.com/v1/agents/${id}`);
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
    });
    builder.addCase(fetchAgents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
    builder.addCase(fetchSelectedAgent.pending, (state, action) => {
      state.loading = true;
      state.singleAgent = undefined;
    });
    builder.addCase(fetchSelectedAgent.fulfilled, (state, action) => {
      state.loading = false;
      state.singleAgent = action.payload;
    });
    builder.addCase(fetchSelectedAgent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.singleAgent = undefined;
    });
  },
});

export const selectAgents = (state: RootState) => state.agents.data;
export default agentsSlice.reducer;
