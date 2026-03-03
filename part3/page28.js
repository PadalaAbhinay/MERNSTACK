
// const numbers = [25,21,27,20]
// for (let i=0;i<numbers.length;i++){
//     console.log(numbers[i])
// }
// numbers.forEach(()=>{})

// numbers.forEach((number)=>{
//     console.log(number)
// })

// numbers.map((number)=>{
//     console.log(number)
// })

//map is used to loop throug array
//map can be used to create a new array
//with same or modified value
// const numbers = [25, 21, 27, 20];
// const newArray = numbers.map((number) => number + 3);
// console.log(newArray)

// const numbers = [25, 21, 27, 20];
// const newArray = numbers.filter((number) => number > 21);
// console.log(newArray)

const numbers = [25, 21, 27, 20];
const result = numbers.find((number) => number > 21);
console.log(result)
