function oddavg(numbers){
    const odd =[];
    for(let number of numbers){
        if(number%2 === 1){
            odd.push(number)
        }
    }
    let sum =0;
    for(let num of odd){
        sum =sum+num;
        
        
    }
    const avg =sum/odd.length;
    return avg;
}
const numbers =oddavg([11,22, 33, 44, 55]);
console.log(numbers);

// evenAverage
function evenAgerage(numbers2){
    let even =[];
    for(let num of numbers2){
        if(num%2 === 0){
         even.push(num);
        }
        
    }
    console.log(even);
    let sum =0;
    for( let num of even){
        sum =sum+num;
    }
    let average =sum/even.length;
    return average
}
let number2 =evenAgerage([12,1,3,4,6,8,6,7,9]);
console.log(number2);
