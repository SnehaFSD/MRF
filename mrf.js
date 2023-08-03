// const arr = [1,2,3,4,5]  // [2,4,6,8,10]

// function double(ele){
//     return ele*2
// }
// const result = arr.map(double)//fn is written seperately and called here
// console.log(result);
//------------------------------------------
//const arr = [1,2,3,4,5]
// function triple(x){
//     return x*3
// }
// const result = arr.map(triple)   //already written function is called inside a map
// console.log(result);
//------------------------------------------------------------------
// const result = arr.map(function(x){  //a function is written inside a map
//     return x*3;
// })
// console.log(result);
//--------------------------------------------------------
// const arr = [1,2,3,4,5]
// const result = arr.map((x)=>{  //arrow function is written so "function" word is discarded
//     return x*3
// })
// console.log(result);
//-------------------------------------------------------------
// const arr = [1,2,3,4,5]
// const result = arr.map((x)=>x*4)  //when written in single line return is discarded
// console.log(result);
//--------------------------------------------
//FILTER
// const arr = [1,2,3,4,5]
// function odd(x){
//     return x%2 !=0
// }
// const result = arr.filter(odd)   //already written function is called inside a filter
// console.log(result);
//-----------------------------------------
// const arr = [1,2,3,4,5]
// const result = arr.filter(function(x){    //fn is writter freshley
//     return x%2 !=0;    //Filtered odd numbers
// })
// console.log(result);
//--------------------------------------
// const arr = [1,2,3,4,5]
// const result = arr.filter((x) => x%2!=0) //written in single line
// console.log(result);
//------------------
//REDUCE

// SYNTAX 
// arrayname.reduce(function(acc,curr){

// },0)
//--------------------------------------------
//Normal example  sum of elements in array
// const arr = [1,2,3,4,5];
// let sum =0;
//     for(let i=0;i<arr.length;i++){
//       sum = sum + arr[i]; 
//     }
// console.log(sum);
//------------------------------------------------------
// const arr = [1,2,3,4,5];
// const result = arr.reduce(function(sum,curr){
//     sum = sum + curr;
//     return sum;
// },0)
// console.log(result)
//------------------------------------------------------
//EXAMPLE 2: FINDING MAXI ELEMENTS IN ARRAY
// const arr = [1,2,3,4,5,6,7,8,9]
// let max=0;
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);
//------------------------------------------------
// //using reduce
// const arr = [1,2,3,4,5,6,7,8,9]
// var result =  arr.reduce(function(acc,curr){  //here (max=0 is acc) and (a[i] is curr)
//     if(curr>acc)
// {
//     acc = curr;
// }
// return acc;
// },0)
// console.log(result)
//-----------------------------------------------------
const users = [
    {firstName: "Kamal",lastName: "Hasan",age:60},
    {firstName: "Donald",lastName: "Trump",age:60},
    {firstName: "Rajini",lastName: "Kanth",age:50},
    {firstName: "Ajith",lastName: "Kumar",age:40},
    ];
     //List full names
    var output = users.map((x)=>x.name.common +" "+ x.lastName)
    console.log(output);

