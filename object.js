
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



// 5 check permission

// const permissions = {
//   admin: ["create", "edit", "delete"],
//   editor: ["create", "edit"],
//   user: ["read"]
// };

// function checkPermission(role,action){
// const rolePermissions=permissions[role] ||[];
// return rolePermissions.includes(action)
// }
// console.log(checkPermission("admin","edit"))

// 6 DYNAMIC PROPERTY ACCCESS


// const field = "email";
// const user = {
//   name: "Ram",
//   email: "ram@gmail.com"
// };


// function dynamic(user,key,value){
// return user[key]=value
// }
// dynamic(user,field,"sita@gmail.com")
// dynamic(user,"phone",981234556)
// console.log(user);


// 7 Objects + Functions (Business Logic)

// const product = {
//   id: 101,
//   name: "Laptop",
//   price: 80000,
//   stock: 5
// };


// function applyDiscount(product,percent){

//    return{
//     DiscountPrice:product.price-(product.price *percent)/100,
//     ...product,

//    } 
 

// }
// let discount=applyDiscount(product,50)
// console.log(discount);
// console.log(product);

// Q4. Methods Inside Objects

// Create bankAccount object:

// balance

// deposit(amount)

// withdraw(amount)

// getBalance()

// Rules:

// Withdraw should not allow negative balance

// const bankBalance={
// balance:0,
//   deposit(amount){
//     this.balance+=amount
//   },
//   withdraw(amount){
//     if(amount>this.balance || amount<=0){
//       console.log("insufficient Balance or negative value entered");
//       return;
      
//     }
//     this.balance-=amount
//   },
//   getBalance(){
//     return this.balance
//   }

// }

// factory function

// function createBankAccount(initialBalance=0){
//   return{

// balance:initialBalance,
//   deposit(amount){
//     this.balance+=amount
//   },
//   withdraw(amount){
//     if(amount>this.balance || amount<=0){
//       console.log("insufficient Balance or negative value entered");
//       return;
      
//     }
//     this.balance-=amount
//   },
//   getBalance(){
//     return this.balance
//   }

// }
// }

// const user1=createBankAccount()
// user1.deposit(500)
// const user2=createBankAccount(10000)
// user2.withdraw(500)
// // const user1=createBankAccount()
// // user1.deposit(500)

// console.log(user1.getBalance());
// console.log(user2.getBalance());
// console.log(user1);
// console.log(user2);
 

// create user with bankbalance details

// function createUser(name, email, initialBalance = 0) {
//   return {
//     name,
//     email,
//     balance: initialBalance,
    
//     deposit(amount) {
//       this.balance += amount;
//       return this.balance;
//     },
    
//     withdraw(amount) {
//       if(amount > this.balance || amount <= 0) {
//         console.log("Insufficient balance or invalid amount");
//         return;
//       }
//       this.balance -= amount;
//       return this.balance;
//     },
    
//     getBalance() {
//       return this.balance;
//     },
    
//    updateUser(updates) {
//   // updates = { name: "Sita" } or { email: "sita@gmail.com" }
//   for(let key in updates) {
//     if(updates[key] !== undefined) {
//       this[key] = updates[key];
//     }
//   }
//   return this;
// }
//   };
// }

// // Admin function to view all users
// function showAllUsers(users) {
//   users.forEach(user => {
//     console.log(`Name: ${user.name}, Email: ${user.email}, Balance: ${user.balance}`);
//   });
// }

// const user1 = createUser("Ram", "ram@gmail.com", 500);
// const user2 = createUser("Sita", "sita@gmail.com", 1000);
// const user3 = createUser("Bibash", "bibash@gmail.com", 0);

// // Operations
// user1.deposit(500); // 1000
// user2.withdraw(300); // 700
// user3.deposit(500); // 500

// user1.updateUser({name:"Ramesh"});

// console.log("user1:",user1);
// console.log("user2:",user2);

// // Show all users
// showAllUsers([user1, user2, user3])


// const user={
//   name:"bibash",
//   age:22,
//   address:"morang"
// }

// function viewUser(obj){
// for(let key in obj){
//   if(obj[key]==="bibash"){
//     obj[key]="sajan"
//   }
//   console.log(`${key}:${obj[key]}`);
  
// }

// }
// viewUser(user)
// console.log(user);



