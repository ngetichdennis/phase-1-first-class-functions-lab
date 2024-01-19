// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
//Define an array of two functions that we can select from
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Define a function that returns a function that multiplies a fare by a given value
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

// Define a function that doubles a fare using the createFareMultiplier function
const fareDoubler = createFareMultiplier(2);

// Define a function that triples a fare using the createFareMultiplier function
const fareTripler = createFareMultiplier(3);

// Define a function that takes an array of drivers and a function as arguments and returns the result of applying the function to the array
const selectDifferentDrivers = function (drivers, selectDriver) {
  return selectDriver(drivers);
};