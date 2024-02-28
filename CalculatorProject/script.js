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
function getTextSize(element) {
    // Create a temporary span element
    var span = document.createElement('span');
    
    // Copy the text content from the div to the span
    span.textContent = element.textContent;
    
    // Apply the same styles as the div to the span (optional)
    span.style.font = window.getComputedStyle(element).font;
    
    // Append the span to the document body
    document.body.appendChild(span);
    
    // Measure the dimensions of the span
    var textSize = {
      width: span.offsetWidth,
      height: span.offsetHeight
    };
    
    // Remove the temporary span from the document body
    document.body.removeChild(span);
    
    return textSize.width;
  }

var display=document.getElementById("display");
let totalsize=290;
function cal(value)
{
    
    let curSize=window.getComputedStyle(display).getPropertyValue('font-size').replace("px","");
    let curTextSize=getTextSize(display);
    // console.log(curTextSize)
    if(curTextSize+10>totalsize)
        shrink(curSize-5);


    // if functions
        if(value=='clear')
            {
                display.innerHTML="";
                display.style.fontSize="30px";
            }
       else if(value=='signChange')
        {
            var prev= display.innerHTML;
            if(prev[0]=='-')
                prev=prev.substring(1,prev.length);
            else
                prev='-'+prev;

            display.innerHTML=prev
        }
        else if(value=="=")
        {
            display.innerHTML= eval(display.innerText);
        }
        else
         display.innerHTML+=value;

}

function shrink(content )
{
        // console.log("sh called" );
        display.style.fontSize=content+"px";
 
}

