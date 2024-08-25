// Higher Order Functions => These are those functions which accept, another function as an argument & use them


// callbacks => these are those function which are passed as an argument to a higher order function

/*
const arr = [1, 2, 3, 4, 5];

arr.map(function f(){} )

*/

// Here map is a higher order function, as it accept another function as an argument and use them

// f() function is a callbacks as it passed as an argument to a higher order function

// create our own map function

const arr = [1, 2, 3, 4, 5]

function myMap(arr, fn) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
}

console.log(myMap(arr, function g(element) {
    return element**2;
}))


/**
 
45:31
 */