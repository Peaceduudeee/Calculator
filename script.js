const ac=document.querySelector('.clearAll');
const clean=document.querySelector('.clear');
const decimal=document.querySelector('.decimal');
const equal=document.querySelector('.equal');
const result=document.querySelector('.result');
const current=document.querySelector('.current');

let first="", operator, second="";

ac.addEventListener('click',()=>{
    result.innerHTML="";
    current.innerHTML="";
    first="";
    second="";
    operator=undefined;
});

clean.addEventListener('click', ()=>{
    current.innerHTML=current.innerHTML.slice(0, -1);
    if(second=="" && operator!=undefined) {{
        operator=undefined;
        return;
    }}
    if(operator==undefined){
        first=first.slice(0, -1);
        console.log(first);
        result.innerHTML="";
        console.log(result.innerHTML);
    }
    else{
        second=second.slice(0, -1);
        console.log(second);
        result.innerHTML=operate(Number(first), operator, Number(second));
    }
});

equal.addEventListener('click', ()=>{
    current.innerHTML=result.innerHTML;
    result.innerHTML="";
    first=current.innerHTML;
    second="";
    operator=undefined;
});

const add=function(first, second){
    return first + second;
}
 
const sub=function(first, second){
    return first-second;
}

const multiply=function(first, second){
    return first*second;
}

const divide=function(first, second){
    return first/second;
}




function operate(first, operator, second){
    switch(operator){
        case '+':
            return add(first, second);
        case '-':
            return sub(first, second);
        case '*':
            return multiply(first, second);
        case '/':
            return divide(first, second);
    }
}

const mainNum=document.querySelectorAll('.main-numbers');
mainNum.forEach(each => {
    each.addEventListener('click', ()=>{
        current.innerHTML+=each.innerHTML;
        if(operator==undefined) first+=each.innerHTML;
        else 
        {
            second+=each.innerHTML;
            result.innerHTML=operate(Number(first), operator, Number(second));
        }
    });
});



const operators=document.querySelectorAll('.operators');
operators.forEach(each=>{
    each.addEventListener('click', ()=>{
        operator=each.innerHTML;
        current.innerHTML+=each.innerHTML;
    });
});





const sln=document.querySelector('.solution');

