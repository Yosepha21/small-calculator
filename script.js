let input=document.getElementById('input');
let button=document.querySelectorAll('button');
let inputValue="";
for(item of button){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log("button text is", buttonText);

        if(buttonText=="x"){
            // buttonText=="X";
            inputValue *= buttonText;
            input.value=inputValue;
        }else if(buttonText=="C"){
            inputValue="";
            input.value=inputValue;
        }else if(buttonText=="="){
            input.value=eval(inputValue)

        }else{
            inputValue += buttonText;
            input.value=inputValue;
        }
    })
}
