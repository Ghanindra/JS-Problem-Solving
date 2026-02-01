// for promise p1 and p2 with sametime they both print at the same time and when p2 times is 5s and p1 10s then it will print after 10sec not 5 .
// const p=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise Resolved");
        
//     },10000)
// })
// const p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise Resolved");
        
//     },5000)
// })




// But in this case first p1 resolve after 5s tehn after 10s p2 resolve.

// const p1=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise Resolved");
        
//     },5000)
// })
// const p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise Resolved");
        
//     },10000)
// })


//handel response with promise 
// async function result(){
//     const data=p
//     .then(res=>console.log(res))
  
   
//    console.log("before promise");
     
    
// }
// result()

// handle response with async/await
// async function result(){
//     // js engine is waiting for promise to resolved.Actually its not wait , callstack wont wait for anybody it just suspend the promises and again come after 5sec or given time and execute the code.
//     const data1= await p1
//     console.log("data1 promise");
//      console.log(data1);
     
//      const data2= await p2
//       console.log("data2 promise");
//      console.log(data2);
     
    
// }
// result()

// real use of async/await

let API_URL='https://api.github.com/users/ghanindra'

const res=async()=>{
    try{
  const data=await fetch(API_URL);
    const result=await data.json()
    console.log(result);
    }catch(err){
console.log(err);

    }
  
    
}
res()