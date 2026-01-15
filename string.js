// 1 Count how many times each character appears in a string.


// const a="javascript"
// const obj={

// }
// for(let char of a)
// {
   
//     if(obj[char]){
//     obj[char]=obj[char]+1
// }else{
//     obj[char]=1
// }}
// console.log(obj);

// 2 Reverse a string

// let a="javascript"
// let reverse=""
// for(let char of a){
//     reverse=char+reverse
// }
// console.log(reverse);


// next way

// let a="javascript"
// let arr=a.split("");
// let reverseArr=arr.reverse();
// let reverseString=reverseArr.join('');
// console.log(reverseString);


// let a="mom";
// let arr=a.split("");
// let reversearr=arr.reverse();
// let reversestring=reversearr.join("");
// if()


// 3 /Check if a string is a palindrome 

// function checkpalindrom(name){
// let arr=name.split("");
// let reversearr=arr.reverse();
// let reversestring=reversearr.join("");
// if(name===reversestring){
//     console.log(`${name} is palindrom`);
    
// }else{
//     console.log(`${name} is not palindrome`);
    
// }
// }
// checkpalindrom("dad")

// 4 Count vowels & consonants(medium question)


// let a="aeiouuu"
// let vowels="AEIOUaeiou"
// const v={

// }
// const c={

// }
// for(let char of a){

//     console.log(char);
    
//     if(vowels.includes(char)){
        
//         // console.log("vowels");
//         // v[char]=(v[char]|| 0)+1;short-circuit default or trusty/false fallback
        
//     }else{
//           c[char]=(c[char]|| 0)+1;
        
//         // console.log("consonants");
        
//     }
// }
// console.log(v);

// 5 Given a sentence, capitalize the first letter of each word.


// function capitalize(name){
//     let seperate=name.split(",")
//     let arr=[]
//     for(let char of seperate){
//         let firstLetter=char[0].toUpperCase();
//         let rest=char.slice(1).toLowerCase()
//         arr.push(firstLetter+rest)
      
           
    
//     }
//      console.log(arr);
//     let  finalsentence=arr.join()
//     console.log(finalsentence);
    
// }
// capitalize("sajan alish")

// let words="programming";
// const seen={

// }
// let result=""
// for(let char of  words){
//     if(!seen[char]){
//     result=result+char
//     seen[char]=true;
     
//     }
// }
// console.log(result);

// 6* Given a string, do two things:Count how many times each vowel and consonant appears
//  Return a string without duplicate letters, preserving order

// function analyzeString(str) {
//     const vowels = "aeiouAEIOU";
//     const vowelsCount = {};
//     const consonantsCount = {};
//     const seen = {};
//     let result = "";

//     for(let char of str) {
//       if(vowels.includes(char)) {
//         vowelsCount[char]=(vowelsCount[char]||0)+1
//          if(!seen[char]){
//  result=result+char
//          seen[char]=true
//            }
     
//       }else {
//          consonantsCount[char]=(consonantsCount[char]||0)+1
//            if(!seen[char]){
//  result=result+char
//          seen[char]=true
//            }
        
//       }
//     }

//     console.log("Vowels:", vowelsCount);
//     console.log("Consonants:", consonantsCount);
//     console.log("String without duplicates:", result);
// }

// analyzeString("proogramming");

// 7 Given a sentence, return the longest word. If there are multiple words with the same maximum length, return the first one.
let long="I love  programming asdfgtrfgty"

let arr= long.split(" ");
let longest=""
// console.log(arr);

for(let char of arr){
    // console.log(char);
    
if(char.length>longest.length){
   longest=char

    
}

}
console.log(longest);
