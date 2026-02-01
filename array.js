// //1 Given an array, do the following:

// // Print the length of the array.

// // Print the first element.

// // Print the last element.

// // let arr=[10,12,13,14,15]
// // console.log(arr.length);
// // console.log(arr[0]);
// // console.log(arr[arr.length-1]);


// // // question2: Loop through an array and print each element
// // let arr=[10,12,13,14,15]
// // for(let char of arr){
// //     console.log(char);
    
// // }

// // arr.forEach(a=>console.log(a));

// //3 Given an array, find the largest and smallest numbers in it.
// // arr=[20,10,30,40,50]
// // max=arr[0]
// // min=arr[0]
// // for(let char of arr){
// // if(char>max){
// //   max=char
    
// // }
// // if(char<min){
// // min=char
    
// // }
    
// // }
// // console.log(max);
// // console.log(min);


// // question 4: Given an array, calculate the sum of all elements and then the average.

// // arr= [10, 20, 30, 40, 50]
// // let sum=0
// // let avg=0
// // for(let char of arr){
// //     if(char){
// //         sum=sum+char
// // avg=sum/arr.length
// //     }
// // }
// // console.log(sum);
// // console.log(avg);



// // 5 Given an array, remove duplicate elements and return a new array with only unique elements.
// // let arr=[1, 2, 2, 3, 1, 4]
// // let newArr=[]
// // let seen={}
// // for(let char of arr){
// // if(!seen[char]){
// //     newArr.push(char)
// //     seen[char]="true"
// // }
// // }
// // console.log(newArr);


// // // 6 Given an array, find the second largest number.
// // let arr=[10, 20, 30,50, 40,100]

// // let max=-Infinity
// // let secondMax=-Infinity

// // for(let char of arr){
// //     if(char>max){
// //         secondMax=max;
// //         max=char
// //     }else if(char>secondMax){
// //         secondMax=char
// //     }
// // }


// // 7 print array by last

// // let arr=[1, 2, 3, 4, 5]
// // let arr1=[]
// // for(let i=arr.length;i>0;i--){
// //    arr1.push(i)
   
// // }

// // console.log(arr1);

// // 8 Rotate an array to the right by 1 position

// // let arr=[1, 2, 3, 4, 5]
// // let last=arr[arr.length-1]
// //  for(let i=arr.length-1;i>=0;i--){
// // arr[i]=arr[i-1]

// //  }
// //  arr[0]=last
// //  console.log(arr);
 
// // 9 Merge Two Arrays (Basic)

// // arr1 = [1, 2, 3]
// // arr2 = [4, 5, 6]

// // let result=[];
// // for(let char of arr1){
// //     result.push(char)
// // }
// // for(let char of arr2){
// //     result.push(char)
// // }
// // console.log(result);


// // 10 Find Duplicate Elements


// // let arr = [1, 2, 3, 2, 4, 1]
// // let dup=[]                                                      
// // for(let i=0;i<arr.length;i++){
// //     for(let j=i+1;j<arr.length;j++){
// // if(arr[i]===arr[j] && !dup.includes(arr[i])){
// //     dup.push(arr[i])
// // }
// //     }
   
// // }
// // console.log(dup);



// // 11 Count Frequency of Each Element

// let arr = [1,2,2,4,5,4,4,1];
// let counter = [];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (counter.includes(arr[i])) continue;

//     let count = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) count++;
//     }

//     newArr.push({ i: arr[i], count });
//     counter.push(arr[i]);
// }

// console.log(newArr);


//     // 12 Given an array, sort it in ascending order without using the built-in sort() method.

// // let arr = [5, 2, 9, 1, 5, 6];


// // let newArr=[];
// // for(i=0;i<=arr.length-1;i++){
// //     if(newArr.includes(arr[i])) continue;
// //     for(j=0;j<=arr.length-1;j++){
// //        if(arr[j]>arr[j+1]){
// // //swap
// // let temp=arr[j]
// // arr[j]=arr[j+1]
// // arr[j+1]=temp
          
// //        }
        
// //     }
// // }
// // console.log(arr);



// // 13 
// // let fruits = ["apple", "banana", "mango"];
// // fruits.splice(1,1)
// // console.log(fruits);

 
// // 14 
// // let tasks = ["read", "code", "sleep"];
// // tasks.splice(1,1,"js practice")
// // console.log(tasks);

// // let roles = ["admin", "user"];
// // console.log(roles.includes("admin"))

// // 15. Count items (basic logic)
// // let orders = ["tea", "coffee", "tea"];
// // let count={

// // }
// // let res=[]

// // orders.forEach((elem)=>{
// // if(count[elem]){
// //     count[elem]+=1
// // }else{
// //     count[elem]=1
// // }
// // })
// // for(let char in count){
// //     res.push({item:char,count:count[char]});
// // }
// // console.log(res);

// // 16 Remove "laptop" from the array
// let products = ["laptop","mobile",  "tablet"];
// // console.log(products.splice(1,1));
// // console.log(products);

// let i=products.indexOf("laptop")
// console.log(i);
// if(i!==-1){
//     products.splice(i,1)
    
// }
// console.log(products);



// arr = [1,2,3,4,5]
// let newArr=[]
// for(let i=arr.length-1;i>=0;i--){
// newArr.push(arr[i])
// }

// console.log(newArr);





// let arr=[1, 2, 3, 4, 5]

// let newarr=[]

// let r=arr.pop()
// arr.unshift(r)
// console.log(arr);


// let arr=[4,3,5,6,1]

// for(let i=0;i<=arr.length-1;i++){
// for(j=0;j<=arr.length-i-1;j++){
//     if(arr[j]>arr[j+1]){
//     [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//     }
// }

// }

// console.log(arr);



