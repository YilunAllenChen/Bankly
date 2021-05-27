const equityInit = {
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

export default equityInit;
