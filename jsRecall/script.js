//  1) define everything
var i = 5;
var f = 3.33;
let b = false;
let c = "c";
let str = "akshay";

//console.log(i);
//console.log(f);console.log(b);console.log(c);console.log(str);console.log(arr);console.log(obj);

//  String ops

let s = "This is sentence to test";

// get char at
// s.charAt() or s[]

// contains--> (ONLY CHANGE IN JS OTHER ALL STRING OPS ARE SIMILAR TO JAVA)
// console.log(s.includes('nte'));

//get index of words / char
// console.log(s.indexOf('is'));
// console.log(s.lastIndexOf('is'));

// Integer ops

// ALL THE OPERATORS ARE SAME AS JAVA

// dif betn == and ===
// == -> checks only values
// === -> values with type

let j = 0;
let k = "0";

// console.log(j==k);
// console.log(j===k);

// ARRAY FUNCTIONS

let arr = [0, 1, 2, 3, 4, 5];
let temp = [5, 3, 8, 9];

//     //add back
//     arr.push(6);
// console.log(arr);
//     //remove back
// console.log(arr.pop());
// console.log(arr);
// // add front
// arr.unshift(111);
// console.log(arr);
// // remove front
// console.log(arr.shift() );
// console.log(arr);

// CONCAT TWO ARRAY
// let newa=arr.concat(temp);
// console.log(newa);

// CAN PASS COMAPARTOR SIMLIAR TO JAVA
// newa.sort((a,b)=>b-a);
// console.log(newa);

// FILTER , MAP ,REDUCE

// 1)FILTER -> FILTER BASED ON PREDICATE (E,I,ARR)
//2) MAP --> PERFORM SOME OPS ON EACH ELEMENT (E,I, ARR)
// 3) REDUCE ->COMBINE ALL VALUES TO ONE  (A,B) -> (PREV,CUR)

//     let n=arr.filter(x=>x%2==0);
//     console.log(n);

//     console.log(arr.every(x=>x%2==0));
//     console.log(arr.some(x=>x%2==0));

//     let x=0;
//    let newxx= arr.map(
//         (e,i)=>e+10
//     );
//     console.log(newxx);

//     console.log(arr.reduceRight((a,b)=>a+b));

let obj = { key: "val", key1: "kochale" };

// OBJECT REF IS USED TO GET ALL KEYS AND VALUES 

// let ke=Object.values(obj);
// console.log(ke);

let date =new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMinutes());
// 

// window.addEventListener
// ("load",()=>{
//     console.log('Onload called bro');
// });
// console.log(n);
var n="as";
// nan -> not a number 
// console.log(isNaN(n));

// convert to number from any thing passed in argument -> valid only
// console.log(Number("234567"));




//  DOM TEST

var con=document.getElementById("container");

// var fc=con.firstElementChild;
// var lc=con.lastElementChild;
// fc.setAttribute("a", "a");
// con.removeChild(fc);

// console.log(fc.getAttribute('a'))
// var nc=document.createElement("p")
// nc.innerText="hey i am new Here!!!";
// con.insertBefore(nc,lc);

try
{
    console.log("Started")
    let k=undefined;

    let o=k.length;
    console.log(o);
}
catch(e)
{
   
    console.log("Error :"+ e);
}