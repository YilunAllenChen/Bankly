export function tradeBondsAction(state, action) {
  let { bondName, numContracts, cashChange } = action.payload;
  state.bonds.portfolio.cash += cashChange;
  if (!(bondName in state.bonds.portfolio.holdings)) {
    state.bonds.portfolio.holdings[bondName] = 0;
  }
  state.bonds.portfolio.holdings[bondName] += numContracts;
  if (state.bonds.portfolio.holdings[bondName] === 0)
    delete state.bonds.portfolio.holdings[bondName];
}

export function stepBondsTimeAction(state, action) {
  let newDate = new Date(state.bonds.time);
  newDate.setDate(newDate.getDate() + 1);
  state.bonds.time = newDate.toString();

  state.bonds.lineChartData.labels.push(newDate.toLocaleDateString());
  let totalValue = state.bonds.portfolio.cash;
  state.bonds.lineChartData.datasets[0].data.push(totalValue);

  if (state.bonds.lineChartData.labels.length > 300) {
    state.bonds.lineChartData.labels = state.bonds.lineChartData.labels.filter(
      function (value, index) {
        return (index + 1) % 2 != 0;
      }
    );
    state.bonds.lineChartData.datasets[0].data =
      state.bonds.lineChartData.datasets[0].data.filter(function (
        value,
        index
      ) {
        return (index + 1) % 2 != 0;
      });
  }

  let daysDiff = parseInt(
    (Date.parse(state.bonds.time) - Date.now()) / 86400000
  );
  if (daysDiff % 90 === 0) {
    for (const [bondID, numContracts] of Object.entries(
      state.bonds.portfolio.holdings
    )) {
      console.log(bondID);
      if (state.bonds.bonds[bondID].frequency === "quarterly") {
        state.bonds.portfolio.cash +=
          (state.bonds.bonds[bondID].coupon / 100 / 4) *
          state.bonds.bonds[bondID].nominal *
          numContracts;
        return;
      }

      if (
        daysDiff % 180 == 0 &&
        state.bonds.bonds[bondID].frequency === "semi-annualy"
      ) {
        state.bonds.portfolio.cash +=
          (state.bonds.bonds[bondID].coupon / 100 / 2) *
          state.bonds.bonds[bondID].nominal *
          numContracts;
      }
    }
  }
  if (daysDiff % 365 === 0) {
    let yearsPassed = parseInt(daysDiff / 365);
    for (const [bondID, numContracts] of Object.entries(
      state.bonds.portfolio.holdings
    )) {
      if (yearsPassed === state.bonds.bonds[bondID].maturityLength) {
        state.bonds.portfolio.cash +=
          state.bonds.bonds[bondID].nominal * numContracts;
          delete state.bonds.portfolio.holdings[bondID];
      }
    }
  }
}
