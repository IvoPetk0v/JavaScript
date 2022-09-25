function solve(steps, lenghtOfFoot, speedKmPerHour) {

    let distanceInMeter = steps * lenghtOfFoot;
    let neededTimeInMinutes = ((distanceInMeter / 1000) / speedKmPerHour) * 60;
    let additionTimeForRest = Math.floor((distanceInMeter / 500));
    neededTimeInMinutes += additionTimeForRest;
    let neededTime = neededTimeInMinutes * 60;

    let resultSec = Math.round(neededTime % 60);
    neededTime -= resultSec;
    neededTime = neededTime / 60;
    let resultMin = Math.round(neededTime % 60);
    neededTime -= resultMin;
    let resultH = (neededTime <= 0) ? 0 : Math.floor((0), neededTime / 60);
    let hours = (resultH >= 10) ? resultH : '0' + resultH;
    let minutes = (resultMin >= 10) ? resultMin : '0' + resultMin;
    let seconds = (resultSec >= 10) ? resultSec : '0' + resultSec;
    console.log(`${hours}:${minutes}:${seconds}`)
}

solve(4000, 0.60, 5);    // expected output 00:32:48
solve(2564, 0.70, 5.5); //  expected output 00:22:35