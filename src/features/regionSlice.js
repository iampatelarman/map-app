// ==============  REDUX SLICE ================

import { createSlice } from "@reduxjs/toolkit";

// SETTING INITIAL STATE
let initialState = [
  {
    position: [28.5275817, 77.0685524],
  },
];

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    // REDUCER ACTION FOR FILTERING JSON DATA
    regionState: (state, { payload }) => {
      return (state = countries.filter(({ country }) => {
        return country === payload;
      }));
    },
  },
});

export const { regionState } = regionSlice.actions;

export default regionSlice.reducer;

// JSON DATA FOR SHOWING UNITS
const countries = [
  {
    country: "India",
    position: [28.5275817, 77.0685524],
    currency: "Rupee",
    speedUnit: "Km/hour",
    distUnit: "meter",
    volumeUnit: "meter cube",
    flag: "https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?w=1060&t=st=1677669614~exp=1677670214~hmac=43f55f87a670dcb89ad133dea7dfb76c09db11f65b08ff9d5fcfbcb2d1da85dd",
  },
  {
    country: "United Kingdom",
    position: [51.5287336, -0.3824758],
    currency: "Pound",
    speedUnit: "miles/hour",
    distUnit: "yard",
    volumeUnit: "fluid ounce",
    flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?w=1060&t=st=1677669666~exp=1677670266~hmac=27d636c6272f5cae67df3fc40594bb2c8b28b4f4e63f86edd6ac665ec8873a27",
  },
  {
    country: "United States",
    position: [36.2311512, -113.8206255],
    currency: "Dollar",
    speedUnit: "miles/hour",
    distUnit: "Miles",
    volumeUnit: "gallon",
    flag: "https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?w=1060&t=st=1677669498~exp=1677670098~hmac=406e024f59b6af628d34255b31ba4e745a339499a64adbda3bef95a14c17becf",
  },
];
