export function tradeBondsAction(state, action) {
  let { bondName, bondData, numContracts, cashChange } = action.payload;
  state.bonds.portfolio.cash += cashChange;

  if (!(bondName in state.bonds.portfolio.holdings)) {
    state.bonds.portfolio.holdings[bondName] = {};
    state.bonds.portfolio.holdings[bondName].bondData = bondData;
    state.bonds.portfolio.holdings[bondName].numContracts = 0;
    state.bonds.portfolio.holdings[bondName].maturityDate =
      Date.parse(state.bonds.time) + 31556926000 * bondData.maturityLength;
  }
  state.bonds.portfolio.holdings[bondName].numContracts += numContracts;
  if (state.bonds.portfolio.holdings[bondName].numContracts === 0)
    delete state.bonds.portfolio.holdings[bondName];
}

export function bondsTradingStatusAction(state, action) {
  let done = action.payload;
  state.bonds.done = done;
}

export function resetBondsDataAction(state, action) {
  state.bonds.portfolio = {
    cash: 100000,
    holdings: {
      // "T-bond 10-year": 0
    },
  };

  state.bonds.lineChartData = {
    labels: [],
    datasets: [
      {
        label: "$ / Share",
        data: [],
        fill: false,
        pointRadius: 0,
        // backgroundColor: "rgb(166, 233, 132)",
        borderColor: "rgb(166, 233, 132)",
        color: "rbg(255, 255, 255)",
      },
    ],
  };
  state.bonds.time = new Date().toString();
}

export function stepBondsTimeAction(state, action) {
  // push new date and valuation.
  let newDate = new Date(state.bonds.time);
  newDate.setDate(newDate.getDate() + 10);
  state.bonds.time = newDate.toString();
  state.bonds.lineChartData.labels.push(newDate.toLocaleDateString());
  let totalValue = state.bonds.portfolio.cash;
  if (state.bonds.lineChartData.labels.length > 300) {
    state.bonds.lineChartData.labels = state.bonds.lineChartData.labels.filter(
      function (value, index) {
        return (index + 1) % 2 !== 0;
      }
    );
    state.bonds.lineChartData.datasets[0].data =
      state.bonds.lineChartData.datasets[0].data.filter(function (
        value,
        index
      ) {
        return (index + 1) % 2 !== 0;
      });
  }

  // update bonds on the market.
  for (const [bondID, bondData] of Object.entries(state.bonds.bonds)) {
    const newBondData = bondData;
    newBondData.maturityDate = state.bonds.time + bondData.maturityLength;
    state.bonds.bonds[bondID] = newBondData;
  }

  // update holdings: repay bonds, pay interest, update values.
  let timeDate = new Date(state.bonds.time);
  const timeEpoch = timeDate.getTime();

  let startDateEpoch = new Date().getTime();
  let daysDiff = Math.round((timeEpoch - startDateEpoch) / (1000 * 3600 * 24));

  for (const [bondID, holdingData] of Object.entries(
    state.bonds.portfolio.holdings
  )) {
    totalValue += holdingData.numContracts * holdingData.bondData.nominal;
    if (timeEpoch > holdingData.maturityDate) {
      let payment = holdingData.numContracts * holdingData.bondData.nominal;
      delete state.bonds.portfolio.holdings[bondID];
      state.bonds.portfolio.cash += payment;
      continue;
    }
    if (daysDiff % 90 === 0 && holdingData.bondData.frequency === "quarterly") {
      let payment =
        (holdingData.numContracts *
          holdingData.bondData.nominal *
          holdingData.bondData.coupon) /
        400;
      state.bonds.portfolio.cash += payment;
      console.log("Payment: ", payment);
      continue;
    }
    if (
      daysDiff % 180 === 0 &&
      holdingData.bondData.frequency === "semi-annually"
    ) {
      let payment =
        (holdingData.numContracts *
          holdingData.bondData.nominal *
          holdingData.bondData.coupon) /
        200;
      state.bonds.portfolio.cash += payment;
      console.log("Payment: ", payment);
    }
  }

  state.bonds.lineChartData.datasets[0].data.push(totalValue);
}
