import { createSlice, configureStore } from "@reduxjs/toolkit";
import {
  appendEquityLineChartDataPointAction,
  equityTradingStatusAction,
  resetStockDataAction,
  tradeStockAction,
} from "./actions/equity";
import { tradeBondsAction, stepBondsTimeAction } from "./actions/bonds";

import equityInit from "./init/equity";
import bondsInit from "./init/bonds";

const rootReducer = createSlice({
  name: "counter",
  initialState: {
    view: "welcome",
    equity: equityInit,
    bonds: bondsInit,
  },
  reducers: {
    toPage: (state, action) => {
      state.view = action.payload.view;
    },
    appendEquityLineChartDataPoint: appendEquityLineChartDataPointAction,
    tradeStock: tradeStockAction,
    equityTradingStatus: equityTradingStatusAction,
    resetStockData: resetStockDataAction,

    tradeBonds: tradeBondsAction,
    stepBondsTime: stepBondsTimeAction
  },
});

export const {
  toPage,
  appendEquityLineChartDataPoint,
  tradeStock,
  equityTradingStatus,
  resetStockData,

  tradeBonds,
  stepBondsTime,
} = rootReducer.actions;

export const store = configureStore({
  reducer: rootReducer.reducer,
});

export default rootReducer.reducer;
