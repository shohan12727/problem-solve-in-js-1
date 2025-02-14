// 1 feet = 12 inch

function inchToFeet (inch){
    const feet = inch /12 ;
    return feet;

}

const shohan_height = inchToFeet(75);
console.log("amar height",shohan_height);

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12 ;
    const result = feetNumber + ' ft '+inchRemaining + ' inch';
    return result;
}


const tamim_height = inchToFeet2(125);
console.log("tamim_height is :",tamim_height);

function kmToMiles (mile){
    const km = 0.621371 * mile;
    return km;
}

const sakib_mile = kmToMiles(5)
console.log ("sakib_mile",sakib_mile);