// duplicate element
// duplicate array theke new array banano & noton array r moddhe noton element akbar bosbe r baki golo soriye fela.
const biriyanikhor =['habul', 'kabul', 'cabul', 'babul', 'kabul', 'habul'];
 const uniqueArray =noDuplicate(biriyanikhor);
function noDuplicate(array){
    const unique =[];
    for(let item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
console.log(uniqueArray);


function uniqueNumber(numbers){
    let unique =[];
    for(let item of numbers){
   if(unique.includes(item) === false){
    unique.push(item);
   }
    }
    return unique;
}
const oldNumbers =uniqueNumber([11,3,4,55,4,3,76,85,4, 3,3,11]);
console.log(oldNumbers);