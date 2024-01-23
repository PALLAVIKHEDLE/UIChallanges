/*1. Static Method: It is a method that has a static keyword prepended to
 itself, such methods can not be accessed through instantiated objects 
 but could be accessed through class name.
 2. static methods belongs to the class directly. */

 /* Promise.all() method  takes an iterable of promises as input and returns
  a single promise that resolve to an array of the results of the input promises. */



  const promise1=Promise.resolve(3)
  const promise2=42
  const promise3 = new Promise ((resolve,reject)=>{
    setTimeout(resolve,100,'foo')
  })
  Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log('values',values)// values [ 3, 42, 'foo' ]
  })


const p1 = Promise.resolve(5);
const p2 = 2022;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values,'second'); //[5, 2022, "foo"]
});


/* Promise.all() will reject immediately upon any of the input promises rejecting. In comparison, 
the promise returned by Promise.allSettled() will wait for all input promises to complete, regardless 
of whether or not one rejects. Use allSettled() if you need the final result of every promise in the input iterable.*/