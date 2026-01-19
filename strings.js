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





//11 Given a string, find the character that appears the most times.

// let s="programming"
// t=s.split("");
// console.log(t);

// let count={

// }
// let max=0;

// let res=[]
// for(let char of t){
   
// count[char]=(count[char]||0)+1


   
// }

// for(let char in count){
//     if(count[char]>max ){
   
//         max=count[char]
//         res=[char]

//     }else if(count[char]===max){
//         res.push(char)
//     }
// }
// console.log(res);


//12 Compress a string by counting consecutive letters.

// function compressString(str){
// let count=1;
// let result="";
// for(let i=0;i<str.length;i++){
//     if(str[i]===str[i+1]){
// count++
//     }else{
//         result=result+str[i]+count
//         count=1
       
//     }
// }
//  console.log(result);

// }
// compressString("aaabbc")

// 13 Check if two strings are anagrams

// function anagram(str,word){
//     let s=str.toLowerCase().trim().split("");
//     let w=word.toLowerCase().trim().split("");
// let sc={

// }
// let wc={

// }

// for(let char of s){
//    sc[char]=(sc[char]|| 0)+1

// }
// console.log(sc);
// for(let chars of w){
//    wc[chars]=(wc[chars]|| 0)+1
    
// }
// console.log(wc);
// let isAnagram=true;

// for(let key in sc){
//     console.log("sc",key);
    
//     if(sc[key]!==wc[key]){
//         isAnagram=false;
//         break;
//     }
// }
// for(let key in wc){
//      console.log("wc",key)
//     if(!(key in sc)){
       
        
//         isAnagram = false;
//         break;
//     }
// }
// if(isAnagram){
//     console.log("Anagram");
    
// }else{
//     console.log("Not Anagram");
    
// }

// }
// anagram("silent","listen")



// next way to check anagram

// function anagram(str, word) {
//     if (str.length !== word.length) {
//         console.log("not anagram");
//         return;
//     }

//     let count = {};

//     for (let char of str) {
//         count[char] = (count[char] || 0) + 1;
//     }

//     for (let char of word) {
//         if (!count[char]) {
//             console.log("not anagram");
//             return;
//         }
//         count[char]--;
//     }

//     console.log("anagram");
// }
// anagram("siiene","sientl")


//14 Count number of words in a sentence
// function count(word){
// let s=word.split(" ")

//     console.log(s.length);
    

// }
// count("i love programming")