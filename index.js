
function createFareMultiplier(number = 5){
    return function (fare = 60){
        return fare * number;
    }


}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(driversArray){
    return [driversArray[0], driversArray[1]]
}

console.log(returnFirstTwoDrivers(driversArray))

// const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnLastTwoDrivers = function (driversArray){
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers[0]();


// const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const selectDifferentDrivers =  function (driversArray, returnFirstTwoDrivers){
    return driversArray(returnFirstTwoDrivers);
}
