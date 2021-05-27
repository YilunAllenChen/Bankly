import { createSlice, configureStore } from "@reduxjs/toolkit";

const rootReducer = createSlice({
  name: "counter",
  initialState: {
    view: "welcome",
    equity: {
      lineChartData: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "$ / Share",
            data: [40, 38, 36, 35, 37, 34],
            fill: false,
            backgroundColor: "rgb(166, 233, 132)",
            borderColor: "rgba(166, 233, 132, 0.2)",
            color: "rbg(255, 255, 255)",
          },
        ],
      },
      portfolio: {
        cash: 10000,
        stocks: {
          PEAR: 0,
        },
      },
      stocks: {
        yields: {
          PEAR: 8.02,
        },
      },
      done: false,
    },
  },
  reducers: {
    toPage: (state, action) => {
      state.view = action.payload.view;
    },
    appendEquityLineChartDataPoint: (state, action) => {
      let { value } = action.payload;
      let labels = state.equity.lineChartData.labels;
      let newLabel = (parseInt(labels[labels.length - 1]) + 1).toString();
      state.equity.lineChartData.labels.push(newLabel);
      state.equity.lineChartData.datasets[0].data.push(value);
      if (state.equity.lineChartData.labels.length > 15) {
        state.equity.lineChartData.labels.shift();
        state.equity.lineChartData.datasets[0].data.shift();
      }
    },
    tradeStock: (state, action) => {
      let { symbol, numShares, cashChange } = action.payload;
      state.equity.portfolio.cash += cashChange;
      state.equity.portfolio.stocks[symbol] += numShares;
    },
    equityTradingStatus: (state, action) => {
      let { done } = action.payload;
      state.equity.done = done;
    },
    resetStockData: (state, action) => {
      state.equity = {
        lineChartData: {
          labels: ["1", "2", "3", "4", "5", "6"],
          datasets: [
            {
              label: "$ / Share",
              data: [40, 38, 36, 35, 37, 34],
              fill: false,
              backgroundColor: "rgb(166, 233, 132)",
              borderColor: "rgba(166, 233, 132, 0.2)",
              color: "rbg(255, 255, 255)",
            },
          ],
        },
        portfolio: {
          cash: 10000,
          stocks: {
            PEAR: 0,
          },
        },
        stocks: {
          yields: {
            PEAR: 8.02,
          },
        },
        done: false,
      };
    },
  },
});

export const {
  toPage,
  appendEquityLineChartDataPoint,
  tradeStock,
  equityTradingStatus,
  resetStockData
} = rootReducer.actions;

export const store = configureStore({
  reducer: rootReducer.reducer,
});

export default rootReducer.reducer;
