import { configureStore } from "@reduxjs/toolkit";
import AgentsRedcuer from "../features/agentsSlice";
import WeaponsReducer from "../features/weaponsSlice";

export const store = configureStore({
  reducer: {
    agents: AgentsRedcuer,
    weapons: WeaponsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
