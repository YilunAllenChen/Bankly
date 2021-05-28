import { createSlice, configureStore } from "@reduxjs/toolkit";
import {
  appendEquityLineChartDataPointAction,
  equityTradingStatusAction,
  resetStockDataAction,
  tradeStockAction,
} from "./actions/equity";

import equityInit from "./init/equity"

const rootReducer = createSlice({
  name: "counter",
  initialState: {
    view: "welcome",
    equity: equityInit,
  },
  reducers: {
    toPage: (state, action) => {
      state.view = action.payload.view;
    },
    appendEquityLineChartDataPoint: appendEquityLineChartDataPointAction,
    tradeStock: tradeStockAction,
    equityTradingStatus: equityTradingStatusAction,
    resetStockData: resetStockDataAction,
  },
});

export const {
  toPage,
  appendEquityLineChartDataPoint,
  tradeStock,
  equityTradingStatus,
  resetStockData,
} = rootReducer.actions;

export const store = configureStore({
  reducer: rootReducer.reducer,
});

export default rootReducer.reducer;
