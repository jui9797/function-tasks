/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arr){
     
let sum =0;
let avg =0;
for(let i =0; i<arr.length; i++){
    // console.log(i)
     sum =sum +arr[i];
     avg =sum/arr.length;
}
return avg;
}
const arr =make_avg([1,2,3,4,5,6,7]);
console.log(arr);


