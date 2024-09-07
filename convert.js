// inch to feet------12inch = 1feet
function inchToFeet(inch){
const feet =inch/12;
return feet;
}
const result =inchToFeet(224);
console.log(result);

// other way
function inchTofeet2(inch2){
    const feetFraction =inch2/12;
    const feetNumber =parseInt(feetFraction);
    const inchRemaining =inch2/12;
    const result2 =feetNumber + 'ft ' + inchRemaining + ' inch';
    return result2;
}
const feet =inchTofeet2(75);
console.log(feet);


// mile to kilometer
function mileToKilometer(mile){
    const kilo =mile*1.60934;
    return kilo;
}
console.log(mileToKilometer(5))