// let h1=document.querySelector("#h1")
// let p=document.querySelector("#p")
// let btn=document.querySelector("#btn")

// btn.addEventListener("click",()=>{
//     h1.textContent="dom accessed"
//     console.log(p.classList.contains("highlight")); // true
//    p.classList.toggle("highlight" );
//     btn.disabled=true;
    
// })

// let bubble=document.getElementById("bubble")
// let btn=document.getElementsByClassName("data-color")
// bubble.addEventListener("click",(e)=>{
// if(e.target.classList.contains("datas-color")){
//     let color=e.target.dataset.color;
//     document.body.style.backgroundColor=color
// }
    
// })

// find id when click li
// let todo=document.querySelector("#todo-list")
// let output=document.querySelector("#output")
// todo.addEventListener("click",(e)=>{
// if(e.target.tagName==="LI"){
//     let id=e.target.dataset.id
// output.textContent=`you clicked item id:${id}`
// }
// })


// async.await with dom

// let p=document.querySelector("#status")
// let btn=document.querySelector("#load-btn")

// function fetchUser(){
//     console.log("enter fetch");
    
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res({ name: "Ghanindra", role: "Frontend Developer" })
//         },2000)
//     })
// }






// btn.addEventListener("click",async ()=>{
//     p.textContent=" ...loading"
//     try{
//  const res= await fetchUser();
  
//     p.textContent=`${res.name}`
//     }catch{
// p.textContent="failed to load"
//     }
   
// })


//shopping cart

let cart=document.querySelector("#cart")
let total=document.querySelector("#total")

cart.addEventListener('click',(e)=>{
    if(e.target.classList.contains("qty-btn")){
        let item_div=e.target.closest(".item")
        let span=item_div.querySelector(".qty")
        let qty=Number(span.textContent)


        if(e.target.dataset.action==='increase'){
qty+=1
        }else if(e.target.dataset.action==='decrease'){
            qty=Math.max(0,qty-1)
        }
        span.textContent=qty


        let all_items=document.querySelectorAll(".item")
        let sum=0
        all_items.forEach(num=>{
            sum+=Number(num.querySelector(".qty").textContent)*Number(num.dataset.price)
        })
        total.textContent=sum
    }
})
