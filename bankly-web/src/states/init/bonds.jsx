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
      frequency: "semi-annualy",
      rating: "AAA",
      value: 1000,
    },
    "T-note 5-year": {
      name: "T-note 5-year",
      nominal: 1000,
      maturityDate: null,
      maturityLength: 5,
      coupon: 3.5,
      frequency: "semi-annualy",
      rating: "AAA",
      value: 1000,
    },
    "Amazing Inc. 2-year": {
      name: "Amazing Inc.",
      nominal: 1000,
      maturityDate: null,
      maturityLength: 3,
      coupon: 4.55,
      frequency: "semi-annualy",
      rating: "AA",
      value: 1000,
    },
    "Amazing Inc. 5-year": {
      name: "Amazing Inc.",
      nominal: 3000,
      maturityDate: null,
      maturityLength: 5,
      coupon: 4.85,
      frequency: "quarterly",
      rating: "AA",
      value: 3000,
    },
    "OK Inc. 3 year": {
      name: "OK Inc.",
      nominal: 2000,
      maturityDate: null,
      maturityLength: 3,
      coupon: 4.7,
      frequency: "semi-annualy",
      rating: "A",
      value: 2000,
    },
    "Not Good Inc. 2-year": {
      name: "Not Good Inc. ",
      nominal: 1000,
      maturityDate: null,
      maturityLength: 1,
      coupon: 5.35,
      frequency: "semi-annualy",
      rating: "C",
      value: 1000,
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
