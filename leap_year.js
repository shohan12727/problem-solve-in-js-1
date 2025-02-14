function isLeapYear (year){
    if (year%100 !==0 && year%4 === 0){
        return true;
    }
    else if (year%100 === 0 && year%400 ===0){
        return false;
    }
    else {
        return false;
    }
}
const leapYear = isLeapYear(2020);
console.log (leapYear);