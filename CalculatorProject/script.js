
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

