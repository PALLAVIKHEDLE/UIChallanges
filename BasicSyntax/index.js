//1. how to write a function (named Function)
function add(a, b) {
  return a + b;
}
console.log("function result", add(4, 3));

//2. Anonymous function
console.log(
  "Anonymous result",
  (function (a, b) {
    return a + b;
  })(4, 3)
);

//3. function expression
const addition = function (a, b) {
  return a + b;
};
console.log("function  expression result", addition(4, 3));

//4. Arrow function
const sum = (a, b) => a + b;
console.log(" Arrow function", sum(4, 3));

//5. How to write a callback
const numbers = [1, 2, 3, 4, 5];

function processData(numbers, callback) {
  const squaredNumbers = numbers.map((num) => num * num);
  callback(squaredNumbers);
}
processData(numbers, function (result) {
  console.log("Squared numbers callback:", result);
});

//6. higher order function
//  1. Take one or more functions as arguments(callback function) OR
//  2. Return a function as its result.

function higherOrderFunction(callback) {
  return function (x) {
    return callback(x); //Return a function as its result.
  };
}

function double(num) {
  return num * 2;
}

const doubleFunction = higherOrderFunction(double); //Take one or more functions as arguments
console.log('higherOrderFunction'.doubleFunction(5));

//7. Event Handling in JS
 <button id="myButton">Click ME</button>;
//Get a reference to the button element
const button = document.getElementById("myButton");
//add an event listeners for the 'click' event
button.addEventListener("click", function () {
  alert("Button was clicked");
}); 

//8. Event Handling in React
import React from "react";

function ClickButton() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

export default ClickButton;

//9. Currying
function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const curryingSum = currySum(1)(2)(3);
console.log(curryingSum, "curryingSum"); // 6

//10. closure (combination of function and lexical env)
function outerFunction() {
    let outerVariable = 'I am outside!';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // 'I am outside!'

//11. promise
//create a promise using Promise constructor
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const randomNum=Math.floor(Math.random()*10)
        if(randomNum<5){
            resolve('success',randomNum)
        }else {
            reject('error', randomNum)
        }
    },1000)
})
    //handeling the resolve promise
    myPromise.then((result)=>{
        console.log(result, 'resolve Promise')
    })
    //handeling the rejcted promise
    .catch((error)=>{
        console.log(error, 'rejected Promise')
    })

    //12. Filter
    const numbersArray = [1, 2, 3, 4, 5];
    const evenNumbers = numbersArray.filter(num => num % 2 === 0);
    console.log('Filter',evenNumbers); 

     //13. map
     const numbersMap = [1, 2, 3, 4, 5];
    const doubledNumbers = numbersMap.map(num => num * 2);
    console.log('Map',doubledNumbers);

     //14. Reduce
     const numbersReduce= [1, 2, 3, 4, 5];
    const sumReduce = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sumReduce,'sumReduce'); // Output: 15 (1 + 2 + 3 + 4 + 5)

//15. factory function {A factory function in JavaScript is a function that returns an object. It is typically 
//used to create multiple instances of similar objects without the need for classes or constructors. Factory functions
// are a form of factory pattern in JavaScript and provide a way to encapsulate and instantiate objects with certain properties and methods.}
function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    };
  }
  
  // Creating instances using the factory function
  const person1 = createPerson('Alice', 30);
  const person2 = createPerson('Bob', 25);
  
  // Using the objects created by the factory function
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
  

