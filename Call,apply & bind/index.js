let name={
    firstName:'pallavi',
    lastName:'khedle',
   
}
let printFullName=function(homeTown, state){
    console.log(this.firstName + '' +this.lastName + 'From'+homeTown+"," +state)
}
printFullName.call(name, 'betul','MP')
//first parameter always refering to the this paremeter
let name2={
    firstName:'pk',
    lastName:'pk',
}

//function borrowing (we can borrow function from other object and use it with the data of other object)

printFullName.call(name2, 'bangalore',"Karnataka")

printFullName.apply(name2, ['bangalore',"Karnataka"])

//in call method will pas argument individually comma seperated.
//in apply method will pass it as second argument in array list.


// bind method 
let printMyName= printFullName.bind(name2, 'bangalore',"Karnataka")

console.log('printMyName',printMyName)
printMyName()
//rather than directly invoking , gives you copy of that same method which cn invoke later.
