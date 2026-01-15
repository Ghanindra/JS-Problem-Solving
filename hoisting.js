// hoisting

// host()
// function host(){
//     console.log("hello");
    
// }


// console.log(a);
// function host(){
//     console.log("hello");
    
// }
// var a=5;

// ******CLOSURE*******
// function init(){
// var a ="good morning"

// var b=function day(){
//     console.log("hello dear",a);

// }

//     return b

// }
// var c=init()
// c()

    // var a;
    // console.log(a);
    // a = 10;

    // ***********todo list ******************

//    let input=document.getElementById("search")
//    let search=document.getElementById("searchItem")
//    let btn=document.getElementById("btn")

  
//    btn.addEventListener("click",()=>{
//     let value= input.value
// let li=document.createElement("li");



// let span=document.createElement("span");
// span.innerText=value;
// console.log(span.innerText);

// li.appendChild(span)

// let edit=document.createElement("button");
// edit.innerText="Edit";
// edit.addEventListener("click",()=>{
//     let newVal=prompt("edit form",span.innerText);
//     if(newVal){
//     span.innerText=newVal;
//     }


// })
// let dlt=document.createElement("button");
// dlt.innerText="Delete";
// dlt.addEventListener("click",()=>{
//    li.remove();


// })
//     document.querySelector(".list").appendChild(li);
//     li.appendChild(edit)
//       li.appendChild(dlt)

// input.value=""

//    })
// search.addEventListener("input",()=>{
//     let searchValue= search.value.toLowerCase();
//     let items=document.querySelectorAll(".list li");
//     items.forEach(li=>{
//         let item=li.querySelector("span").innerText.toLowerCase();
//         if(item.includes (searchValue)){
//             li.style.display="block";
//         }else{
//             li.style.display="none";
//         }
//     })
// })


//*************** Add element****************

//     function language(lang){
// let li=document.createElement("li");
// li.appendChild(document.createTextNode(lang))
// document.querySelector(".language").appendChild(li)

//     }
//     language("python")
//     language("java")
//     language("react")

// let e=document.querySelector("li:nth-child(2)")
// // e.innerHTML="physics"
// let newli= document.createElement('li')
// newli.innerHTML="physics"
// e.replaceWith(newli)


// let r=document.querySelector("li:first-child")
// r.remove()



// let api="https://official-joke-api.appspot.com/random_joke";
// const f= async()=>{
// try{
//     const res= await fetch(api);
// const data= await res.json()
// console.log(data);

//   } catch (err) {
//     console.log(err);
//   }
// }
// f()
// let api="https://official-joke-api.appspot.com/random_joke";
// fetch(api)
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err)
// )


// const p = new Promise((resolve, reject) => {
//   console.log("Promise started");
// });
// const p= new Promise((resolve,reject)=>{
//     resolve("success")
// })
// console.log(p);


// const r = new Promise((resolve, reject) => {
//   reject("Something went wrong");
// });

// console.log(r);


// const p = new Promise((resolve, reject) => {//promise can only change state once
//   resolve("OK");
//   reject("Error"); // ignored
// });
// console.log(p);


// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 2000);
// });

// console.log(p);

// setTimeout(() => {
//   console.log(p);
// }, 3000);


// const p = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Data loaded");
//   } else {
//     reject("Failed");
//   }
// });

// p.then(result => {
//   console.log("FULFILLED:", result);
// })
// .catch(error => {
//   console.log("REJECTED:", error);
// });


// async function getData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/invalid");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Caught error:", err);
//   }
// }

// getData();

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("fail");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//   .then(res => console.log("Success:", res))
//   .catch(err => console.log("Error:", err));


// closure

// function a(){
//     var a=2;
//     function b(){
//         console.log(a);
        
//     }
// return b;
// }
// var c=a();
// console.log(c);

// c();

// setTimeout()


// function x(){
//     for(let i=1;i<6;i++){
// setTimeout(function(){
//         console.log(i);
        
//     },i*1000)
//     }
    
// }
// x();



// first statement

// function a(){
//     console.log("hello a");
    
// }
// a();
// // function expression
// var b= function(){
//     console.log("hello b");
    
// }
// b()

// function declerations and function statement are same

// anonymous function
// it is used to assign to a variable
// function() {

// }

// named function expressions

// var b= function a(){
//     console.log("hello b");
    
// }
// b()


// first class function
//=> The ability to use function as value is known as function

// let b=function a(params){

//     // return 
//     params();
    
// }
// // var c=b();   
// b(function(){
// console.log("first class function");

//     });


