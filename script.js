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


let first, operator, second;

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

let display=operate(first, operator, second);

const mainNum=document.querySelectorAll('.main-numbers');
mainNum.forEach(each => {
    each.addEventListener('click', ()=>{
        console.log(each.innerHTML);
        if(!operator){
            second+=each.innerHTML;
            
        }
    });
});

const operators=document.querySelectorAll('.operators');
operators.forEach(each=>{
    each.addEventListener('click', ()=>{
        operator=each.innerHTML;
    });
});



const sln=document.querySelector('.solution');

