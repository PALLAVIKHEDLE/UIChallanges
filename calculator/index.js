(function(){
"use strict"
var input=document.getElementById('input'),//input button
    number=document.querySelectorAll('.numbers div'),//number Button
    operator=document.querySelectorAll('.operators div'),//operator
    result=document.getElementById('result'),//equal button
    clear=document.getElementById("clear"), //Clear button
    resultDisplayed=false

//adding click events to number buttons
for(let i=0;i<number.length;i++){
  number[i].addEventListener("click",function(e){
    //storing current input string and it's last character 
    let currentString=input.innerHTML;
    let lastChar=currentString[currentString.length-1]

    //if result is not displayed yet, just keep adding
    if(resultDisplayed===false) input.innerHTML+=e.target.innerHTML
    else if(resultDisplayed==true && lastChar==='+'|| lastChar==='-'||lastChar==='×'||lastChar==='÷'){
      //if result is currently display and user pressed an operator
      resultDisplayed=false
      input.innerHTML+=e.target.innerHTML
    }else{
      //if result is currently displayed and user pressed a number.
      //need to clear the input string and add the new input to start the new operation.
      resultDisplayed=false
      input.innerHTML=''
      input.innerHTML+=e.target.innerHTML
    }
  })
}

//adding click handlers to operators
for(let i=0; i<operator.length;i++){
  operator[i].addEventListener('click', function(e){
    //storing current input string and it's last character 
    let currentString=input.innerHTML;
    let lastChar=currentString[currentString.length-1]
    //if last character entered is an operator
    if(lastChar==='+'|| lastChar==='-'||lastChar==='×'||lastChar==='÷'){
      let newString=currentString.substring(0,currentString.length-1)+e.target.innerHTML
      input.innerHTML=newString
    }else if(currentString.length==0){
      //if first key pressed is an operator, don't do anything
      alert('Enter a Number First')
    }else {
      //add the operator pressed to the input
      input.innerHTML+=e.target.innerHTML
    }

  })
}


//on click on equal button
result.addEventListener("click", function(e){
  let inputString=input.innerHTML;//-10+26+33-56*34/23
  
  //forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  let numbers=inputString.split(/\+|\-|×|\÷/g)

  //forming an array of operators. for above string It will be: operators=["+","-","*", "/"]
  //first we replace all the numbers and dot with empty string and then split

  let operators=inputString.replace(/[0-9]|\./g,"").split("")

  console.log(inputString,'inputString');
  console.log(operators,'operators');
  console.log(numbers,'numbers');
  console.log("----------------------------");

  //now we are looping through the array and doing one operation at a time.
  //first divide, then multiply, then subtraction and then addition
  //as we move we are alterning the original numbers and operator array
  //the final element remaining in the array will be the output
  
  let divide=operators.indexOf('÷')
  while(divide!==-1){
    numbers.splice(divide,2,numbers[divide]/numbers[divide+1])
    operators.splice(divide,1)
    divide=operators.indexOf("÷")
  }

  let multiply=operators.indexOf('×')
  while (multiply !== -1) {
    numbers.splice(multiply,2,numbers[multiply]* numbers[multiply+1])
    operators.splice(multiply,1)
    multiply=operators.indexOf('×')
  }

  let subtract=operators.indexOf('-')
  while(subtract!==-1){
    numbers.splice(subtract,2, numbers[subtract]-numbers[subtract+1])
    operators.splice(subtract,1)
    subtract=operators.indexOf('-')
  }

  let add=operators.indexOf('+')
  while(add!==-1){
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add,1)
    add=operators.indexOf('+')
  }

  input.innerHTML = numbers[0]; // displaying the output
  resultDisplayed = true; // turning flag if result is displayed
})

//clearing the input on press on clear 
clear.addEventListener("click",function(e){
  input.innerHTML=''
})

}());