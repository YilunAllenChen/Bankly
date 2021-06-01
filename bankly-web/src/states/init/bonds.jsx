const bondsInit = {
  portfolio: {
    cash: 100000,
    holdings: {
      // "T-bond 10-year": 0
    },
  },
  bonds: {
    "T-bond 20-year": {
      name: "T-Bond 20-year",
      nominal: 1000,
      maturityDate: null,
      maturityLength: 20,
      coupon: 4.35,
      frequency: "semi-annually",
      rating: "AAA",
      value: 1000,
      numContracts: 0,
    },
    "T-note 5-year": {
      name: "T-note 5-year",
      nominal: 1000,
      maturityDate: null,
      maturityLength: 5,
      coupon: 3.5,
      frequency: "semi-annually",
      rating: "AAA",
      value: 1000,
      numContracts: 0,
    },
    "Amazing Inc. 3 year": {
      name: "Amazing Inc. 3-year",
      nominal: 2000,
      maturityDate: null,
      maturityLength: 3,
      coupon: 4.7,
      frequency: "semi-annually",
      rating: "A",
      value: 2000,
      numContracts: 0,
    },
    "Not Good Inc. 1-year": {
      name: "Risky Inc. 1-year",
      nominal: 1000,
      maturityDate: null,
      maturityLength: 1,
      coupon: 5.35,
      frequency: "semi-annually",
      rating: "C",
      value: 1000,
      numContracts: 0,
    },
  },
  lineChartData: {
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
  },
  done: false,
  time: new Date().toString(),
};

export default bondsInit;
