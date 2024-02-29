//merging a cart list object with their appropriate customer object without changing the original objects.
//Assuming you have a list of cart items and a list of customer objects
const cartList=[
    {id:1, product:'Product 1', quantity:2},
    {id:2, product:'Product 2', quantity:2},
    {id:3, product:'Product 3', quantity:1}
]

const customerList=[
    {id:1, name:'Customer 1', email:'customer1@example.com'},
    {id:2, name:'Customer 2', email:'customer2@example.com'},
    {id:3, name:'Customer 3', email:'customer3@example.com'}
]

//Function to merge cart item with appropriate customer
function mergeCartWithCustomer(cartItem,customerList){
    const customer=customerList.find(customer=>customer.id===cartItem.id)
    if(customer){
        //Using spread operator to merge without modifying the original objects
        return {...cartItem, customer};
         // Alternatively, you can use Object.assign():
        // return Object.assign({}, cartItem, { customer });
    }
    return cartItem; // Return the original cart item if no matching customer found
}

//Merging cart list with appropriate customer objects
const mergedCartList=cartList.map(cartItem=>mergeCartWithCustomer(cartItem,customerList))
console.log('mergedCartList',mergedCartList);