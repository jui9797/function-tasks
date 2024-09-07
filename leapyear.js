function isLipi(year){
    if(year%4 === 0){
        return true;
    }
    return false;
}
const leapYear =isLipi(2040);
console.log(leapYear);

// leapyear hower condition
// year divisible by 100 and 4 and 400 then it will be a leapyear
function islipiYear(year){
    if(year%100 === 0 && year%4 === 0){
        return true;
    }
    else if(year%100 === 0 && year%400 === 0){
        return true;
    }
    return false;
}
const isleap =islipiYear(2100);
const isleap2 =islipiYear(2026);
const isleap3 =islipiYear(2044);

console.log(isleap, isleap2, isleap3);