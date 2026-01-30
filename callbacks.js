// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback(); // call the function passed in
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Ram", sayBye);



// Task 1: Dynamic Logging

// Create a function performAction(user, actionCallback)

// user is an object { name, balance }

// actionCallback is a function that performs some operation

// const user={
//     name:"bibash",
//     address:"morang",
//     contact:12345667,
//     balance:500
// }
// function deposit(user,amount){
// user.balance=user.balance+amount

// console.log(`${user.name} deposited:${amount}.new balance:${user.balance}`);

// }
// function performAction(user,callback){
// console.log(user);
// callback();

// }
// performAction(user,()=>deposit(user,500))
// console.log(user);


//same question just added another withdraw function
// const user={
//     name:"bibash",
//     address:"morang",
//     contact:12345667,
//     balance:500
// }

// function deposit(user,amount){
// user.balance+=amount
// console.log(`${user.name} successfully deposited ${amount} - new balance:${user.balance}`);

// }
// function withdraw(user,amount){
//     user.balance-=amount
//     console.log(`${user.name} successfully withdraw ${amount} - new balance:${user.balance}`);
// }

// function performTransaction(user,amount,callback){
//  console.log("before tras:",user);
//  callback(user,amount)
//   console.log("after trans",user);
 
// }
// performTransaction(user,400,deposit)
// performTransaction(user,400,withdraw)


// Write a function applyBonus(users, callback)

// The callback adds a bonus to each user’s balance.

// const users = [
//   { name: "Ram", balance: 1000 },
//   { name: "Sita", balance: 500 },
//   { name: "Bibash", balance: 200 }
// ];
// function bonus(users,amount){
//     for(let user of users){
  
//         console.log(user);
        
// user.balance+=amount
//     console.log(`${user.name} got bonus ${amount}:new balance:${user.balance}`);
//     }



// }
// function applyBonus(users,amount,callback){
// console.log("before bonus",users)
// callback(users,amount);
// console.log("after bonus",users)

// }
// applyBonus(users,300,bonus)
// console.log("original",users);


// settime out

// const users = [
//   { name: "Bibash", age: 22, address: "Morang", balance: 0 },
//   { name: "Sita", age: 21, address: "Kathmandu", balance: 0 }
// ];


// function fakeAPICall(user, amount,callback) {
//   setTimeout(() => {
//     console.log("API call finished for " + user.name);
//     callback(user,amount);
//   }, 5000);
// }
// function addbalance(user,amount){
// user.balance+=amount
// console.log("user after balance deposited",user);

// }

// fakeAPICall(users[0],300,addbalance);



// Task 5: Nested Callbacks (Optional Challenge)

// Simulate deposit → withdrawal → check balance, all using callbacks:
const users = [
  { name: "Bibash", age: 22, address: "Morang", balance: 0 },
  { name: "Sita", age: 21, address: "Kathmandu", balance: 0 }
];

// Simulate async API call
function fakeAPICall(user, callback) {
  setTimeout(() => {
    callback(user);
  }, 1000);
}

// Deposit function
function deposit(user, amount, next) {
  user.balance += amount;
  console.log(`${user.name} deposited ${amount}. Balance: ${user.balance}`);
  next(user); // call next operation
}

// Withdraw function
function withdraw(user, amount, next) {
  if (amount > user.balance) {
    console.log(`${user.name} insufficient balance for withdrawal`);
    next(user); // still call next
    return;
  }
  user.balance -= amount;
  console.log(`${user.name} withdrew ${amount}. Balance: ${user.balance}`);
  next(user);
}

// Check balance function
function checkBalance(user) {
  console.log(`${user.name} current balance: ${user.balance}`);
}

// Perform sequence of operations
// function performSequence(user) {
//   fakeAPICall(user, (userFromAPI) => {
//     deposit(userFromAPI, 500, (userAfterDeposit) => {
//       withdraw(userAfterDeposit, 200, (userAfterWithdraw) => {
//         checkBalance(userAfterWithdraw);
//       });
//     });
//   });
// }

// function performSequence(user){
//     fakeAPICall(user,(userfromapi)=>{
//         deposit(userfromapi,500,(afterdeposit)=>{
//             withdraw(afterdeposit,200,(userafterwithdraw)=>{
//                 checkBalance(userafterwithdraw)
//             })
//         })
//     })
// }
// // Run for first user
// performSequence(users[0]);
