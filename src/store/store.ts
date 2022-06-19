import { configureStore } from "@reduxjs/toolkit";
import AgentsRedcuer from "../features/agentsSlice";
import WeaponsReducer from "../features/weaponsSlice";
import MapsReducer from "../features/mapsSlice";

export const store = configureStore({
  reducer: {
    agents: AgentsRedcuer,
    weapons: WeaponsReducer,
    maps: MapsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
