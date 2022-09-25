function solve(currSpeed, driveArea) {
    let speedLimit;
    switch (driveArea) {
        case 'city':
            speedLimit = 50;
            if (currSpeed <= speedLimit) {
                console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`)
            } else {
                let difference = currSpeed - speedLimit;
                let status;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (currSpeed <= speedLimit) {
                console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`)
            } else {
                let difference = currSpeed - speedLimit;
                let status;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (currSpeed <= speedLimit) {
                console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`)
            } else {
                let difference = currSpeed - speedLimit;
                let status;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'motorway':
            speedLimit = 130;
            if (currSpeed <= speedLimit) {
                console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`)
            } else {
                let difference = currSpeed - speedLimit;
                let status;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
    }
}
                              //expected outputs:
solve(40, 'city');           // Driving 40 km/h in a 50 zone
solve(21, 'residential');   //  The speed is 1 km/h faster than the allowed speed of 20 - speeding
solve(120, 'interstate');  //   The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
solve(200, 'motorway');   //    The speed is 70 km/h faster than the allowed speed of 130 - reckless driving

