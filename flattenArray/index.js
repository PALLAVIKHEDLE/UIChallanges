const nestedArray=[1,[2,[3,[4,[5]]]], [6,[7,[8,[9]]]]];

 function flattenArray(arr){
    //Base Case: if the input is not an array, return 
    if(!Array.isArray(arr))return arr;
    //use reduce to concatenate all elements of the array, flattening nested arrays recursively

    return arr.reduce((acc, val)=>{
        //Recursively flatten each element and concatenate the result
        return acc.concat(flattenArray(val))

    },[])

 }

 const flattenedArray =flattenArray(nestedArray);
 console.log('final Output', flattenedArray)
