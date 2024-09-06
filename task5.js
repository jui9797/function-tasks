
/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(int){
    if(int%2 ===0){
        return 'even'
    }
    else if(int%2 ===1){
        return 'odd'
    }
}
let number =odd_even(22);
console.log(number)