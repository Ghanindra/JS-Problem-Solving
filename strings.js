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
// let long="I love  programming asdfgtrfgty"
// let longest=""

//     let arr=long.split(" ");
//     console.log(arr);
    
//     for(let char of arr){
//         if(char.length>longest.length){
//   longest=char
//         }
//     }
// console.log(longest);


// Question 9: First NON-repeating character
// Problem

// Given a string, find the first character that appears only once.


// function nonRepeatingCharacter(name){
//     let count={

//     }
   
// for(let char of name){
//     if(count[char]){
//         count[char]=count[char]+1
//         // console.log("count",count[char]);
        
//     }else{
//         count[char]=1
//     }
// }
// // console.log(count);

// for(let c of name){
//     if(count[c]===1)
//         return c



// }




// }
// let result=nonRepeatingCharacter("sajan")
// console.log(result);


// Question 10: Substring / Search in a String
// 📌 Problem

// Given a string and a search word, check:

// Does the string contain the word?

// At which position does the word start?

// Does the string start with the word?

// Does the string end with the word?

// let s="javascript is powerful"
// let a=s.includes("script")
// let i = s.indexOf("script")
// let w=s.startsWith("java")
// let e=s.endsWith("ful")
// console.log(e);

// function search(str,word){
// let r=str.includes(word)
// console.log(r);
// let p=str.indexOf(word)
// console.log(p);

// }
// search("bibash","b")



// function formstring(name){
// let t= name.trim();
// let f=t.split(",")
// let g=[]

// // console.log(s);
// for(let char of f){
// let u=char[0].toUpperCase() 
// let r=char.slice(1).toLowerCase()
// g.push(u+r)

// }

//  let  finalsentence=g.join()
//     console.log(finalsentence);
// // console.log(r);

// }

// formstring("     bibash " )


// Find the most frequent character

// Check if two strings are anagrams

// Compress string (e.g., "aaabbc" → "a3b2c1")