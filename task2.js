/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function action(number){
    
     if(number%2 === 1){
        let odd =number*2;
        return odd;
    }
    else if(number%2 === 0){
        let even =number/2;
        return even;
    }
}
const numb =action(44);
console.log(numb);