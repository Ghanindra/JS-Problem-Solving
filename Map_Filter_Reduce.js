// Q1: Square all numbers in an array
// let arr = [1,2,3,4,5];
// // Output: [1,4,9,16,25]

// const newArr=arr.map((elem)=>{
//  return elem*elem
// })
// console.log(newArr);


// Q2: Get only even numbers from an array
// let arr = [1,2,3,4,5];

// let newArr=arr.filter(elem=>elem%2==0)
// console.log(newArr);

//3 Sum of all numbers in an array using reduce
// let arr = [5,10,15];
// // Output: 30
// const sum=arr.reduce((acc,curr)=>{
// return acc+curr
// },0)
// console.log(sum);

// 4 Convert array of numbers to array of strings with prefix
// let arr = [1,2,3];
// // Output: ["Item 1", "Item 2", "Item 3"]
// const prefix=arr.map((elem)=>`item ${elem}`)
// console.log(prefix);

// Q5: Count total vowels in an array of strings
// using loop
// let arr = ["apple","banana","mango"];
// let vowels="AEIOUaeiou"
// let count=0
//  for(let char of arr){
//     for(let str of char){
//         if(vowels.includes(str)){
//             count++
//         }
//     }
    
  
//  }
// console.log(count);

// using loop plus reduce
// let arr = ["apple","banana","mango"];
// let vowels="AEIOUaeiou"
// const s=arr.reduce((acc,curr)=>{
// for(let char of curr){
//     if(vowels.includes(char)){
//         acc++
//          console.log(char);
//     }
   
    

// }
//     return acc
// },0)

// console.log(s);

// Output: 8 (a,e,a,a,a,o)

//6 Print all elements of a 2D array
// let arr = [
//   [1,2],
//   [3,4],
//   [5,6]
// ];
// // Output: 1 2 3 4 5 6
// for(let char of arr){
//     for(let num of char){
//         console.log(num);
        
//     }

    
// }

// // Q7: Sum of each row
// let arr = [
//   [1,2],
//   [3,4],
//   [5,6]
// ];
// // Output: [3, 7, 11]


// for(let row of arr){
//    let sum=0
//    for(let column of row){
//       sum=sum+column

    
//    }
//      console.log(sum);
    
    
// }



// next method

//8 count total element in array
// let total = 0;

// for (let i = 0; i < arr.length; i++) {

    

//   total += arr[i].length;
// //   console.log(arr[i].length);
  
// }

// console.log(total);


// let arr = [
//   [1,2],
//   [3,4],
//   [5,6]
// ];
//     let max=-Infinity
// for(let row of arr){

//    for (let column of row){
//         if(column>max){
//             max=column
                 
//         }
  
    
//     }
   
    
// }
// console.log(max);
    
// 9 Convert an array of prices to add 13% VAT
// let arr= [100, 200, 300]
// let vat=arr.map(val=>val+val*(13/100))
// console.log(vat);

// 10 Extract only names from user objects
// let arr=[
//   { name: "Ram", age: 20 },
//   { name: "Shyam", age: 25 }
// ]
// let username=arr.map(nam=>nam.name)
// console.log(username);
// Convert strings to uppercase


// 11 Convert strings to first letter uppercase of each word
// let arr=["apple", "banana", "mango"]



// let capital=arr.map((str)=>{
//    return str[0].toUpperCase()+str.slice(1).toLowerCase()
// })
// console.log(capital);


// let arr=["a", "b", "c"]
// // "0-a", "1-b", "2-c"
// let newarr=arr.map((elem,idx)=>{
//     return (`${idx} ${elem}`);
    
    
// })
// console.log(newarr);

//12 Filter numbers greater than 50

// let num=[10, 60, 30, 90, 20]
// const greater=num.filter(val=>val>50);
// console.log(greater);

// 13 Filter words with length more than 5
// let arr=["apple", "banana", "kiwi", "pineapple"]
// const newarr=arr.filter(word=>word.length>5)
// console.log(newarr);

// 14 Filter users who are adults (age ≥ 18)
// let users=[
//   { name: "Ram", age: 16 },
//   { name: "Shyam", age: 21 },
//    { name: "hari", age: 21 }
// ]
// let newUser=users.filter((user)=>{
// return user.age>=18
// })
// console.log(newUser);

//15 Remove falsy values
// let arr=[0, 1, false, 2, "", 3, null]
// let r=arr.filter((val)=>{
//     return (!val===false)
// })
// console.log(r);


// 16 Filter products that are in stock

// let products=[
//   { item: "Laptop", inStock: true },
//   { item: "Mobile", inStock: false }
// ]
// let newProduct=products.filter(val=>val.inStock===true)
// console.log(newProduct);

// 17 Find product of all numbers

// let arr=[2, 3, 4]
// const newArr=arr.reduce((acc,curr)=>{
// return acc*curr
// },1)
// console.log(newArr);


// // 18 Count total characters in an array of strings
// let char=["hi", "hello", "bye"]
// const totalChar=char.reduce((acc,curr)=>{
// return acc+curr.length
// },0)
// console.log(totalChar);

// // 19 Find maximum number
// let arr=[10, 50, 30, 90, 20]
// let max=arr[0]
// const newArr=arr.reduce((acc,curr)=>{

// if(curr>acc){
//   acc=curr
// }
// return acc
// },max)
// console.log(newArr);


// 20 Count frequency of elements
// let arr=["tea", "coffee", "tea", "juice"]

// const newArr=arr.reduce((acc,curr)=>{
// if(curr){
//     acc[curr]=(acc[curr]||0)+1
// }
// return acc
// },{})
// console.log(newArr);

// 21 Convert array to object
// let arr=["name", "age", "city"]
// // { name: true, age: true, city: true }
// const newArr=arr.reduce((acc,curr)=>{
//  acc[curr]=true
//  return acc
    


// },{})
// console.log(newArr);

//22 Group numbers by even / odd
// let arr=[1,2,3,4,5,6]
// // { even: [...], odd: [...] }
//  const newarr=arr.reduce((acc,curr)=>{
// if(curr%2===0){
//     acc.even.push(curr)
// }else{
//     acc.odd.push(curr)
// }
// return acc
//  },{even:[],odd:[]})
//  console.log(newarr);
 

// 23 count total price  from cart 
// let arr=[
//   { item: "pen", price: 10, qty: 2 },
//   { item: "book", price: 50, qty: 1 }
// ]
// const newarr=arr.reduce((acc,curr)=>{
// return acc+curr.price*curr.qty

// },0)
// console.log(newarr);
// 24  numbers, double even numbers only

// let arr=[1,2,3,4,5]
// let newarr=arr.filter(num=>num%2==0).map(val=>val*2)
// console.log(newarr);

// 25 Count how many times each letter appears
// let arr=["a", "b", "a", "c", "b", "a"]
// let newarr=arr.reduce((acc,curr)=>{
// if(curr){
//     acc[curr]=(acc[curr]||0)+1
// }
// return acc
// },{})
// console.log(newarr);
