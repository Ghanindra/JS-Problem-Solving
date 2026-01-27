// //1 Write a function updateUser(user, key, value) that updates any property dynamically.

// const user = {
//   name: "Ram",
//   age: 22,
//   email: "ram@gmail.com"
// };


// function updateValue(user,key,value){
// user[key]=value
// }
// updateValue(user,"age",22)
// updateValue(user,"name","bibash")
// console.log(user);

// 2 Convert it into one object:

// const inputs = [
//   { name: "fullName", value: "Sita" },
//   { name: "email", value: "sita@gmail.com" },
//   { name: "phone", value: "9812345678" }
// ];

// let newInput={

// }

// for(let char of inputs){
  
// newInput[char.name]=char.value


    
// }
// console.log(newInput);


//3 Create a new object that contains everything except password.

// const response = {
//   status: 200,
//   data: {
//     id: 1,
//     username: "admin",
//     password: "123456",
//     role: "admin"
//   }
// };

    

// const{password,...newObject}=response.data
// console.log(newObject);

// 4 Create an object that counts how many orders are in each status

// const orders = [
//   { status: "pending" },
//   { status: "completed" },
//   { status: "pending" },
//   { status: "cancelled" },
//   { status: "completed" }
// ];

// let obj={

// }
// for(let char of orders){
  
    
//         obj[char.status]=(obj[char.status]||0)+1;
     
    
    
// }
// console.log(obj);




const permissions = {
  admin: ["create", "edit", "delete"],
  editor: ["create", "edit"],
  user: ["read"]
};

function checkPermission(role,action){
const rolePermissions=permissions[role] ||[];
return rolePermissions.includes(action)
}
console.log(checkPermission("admin","edit"))