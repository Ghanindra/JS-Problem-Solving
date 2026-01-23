let input=document.getElementById("input")
let add=document.getElementById("add")
let btn=document.getElementById("btn")
let list=document.querySelector(".list")
let tasks=[]
btn.addEventListener("click",()=>{
    let value=input.value;
    if(value=="") return alert("empty list not added")
    // console.log(value);
tasks.push(value)
task(value)
input.value=""

})


function task(text){
   let span=document.createElement("span")
   let  dltbtn=document.createElement("button")
   let  edtbtn=document.createElement("button")
     dltbtn.innerHTML="delete"
     edtbtn.innerHTML="edit"
     
     span.appendChild(dltbtn)
     span.appendChild(edtbtn)

   let li=document.createElement("li")
    li.innerText=text;
    li.appendChild(span)

list.appendChild(li)

      dltbtn.addEventListener("click",()=>{
        tasks=tasks.filter(task=>task!==text)
        li.remove()
        console.log(tasks);
        
    })
    edtbtn.addEventListener("click",()=>{
        let newli=prompt("enter new value",text)
         if(newli===""||newli.trim()==="") return
         li.firstChild.textContent=newli

         let index=tasks.indexOf(text)
         console.log("index",index);
         
         if(index==!-1){
            tasks[index]=newli
         }

         text=newli
console.log(tasks);
    })

   }
   

    



