const today =new Date();
const date =new Date('2062-10-19');
console.log(date.getMonth()); //9
console.log(date.getDay());   //4
const specialDate =new Date(2091, 0, 26);
console.log(specialDate.toISOString());
console.log(specialDate);  //2091-01-25T18:00:00.000Z
specialDate.setMonth(10);
console.log(specialDate.toLocaleString('en-GB'));
