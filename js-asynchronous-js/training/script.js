// simple asynchronous code
// console.log('1');
// console.log('2');
// setTimeout(() => {
//     console.log('stop for 2 seconds');
// }, 2000);
// console.log('3');
// console.log('4');

// asynchronous code by making request to other resources via network
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4) {
//             callback("couldn't fetch the data", undefined);
//         }
//     });
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     //request.open('GET', 'json-example.json');
//     request.send();
// }

// getTodos((err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         data.forEach(element => {
//             console.log(element.id, element.title);
//         });
//     }
// });

// callback hell
// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4) {
//             callback("couldn't fetch the data", undefined);
//         }
//     });
    
//     request.open('GET', resource);
//     //request.open('GET', 'json-example.json');
//     request.send();
// }

// this is a callback hell, we are having nested callbacks, this could be refactored using promises
// getTodos("resources/salahbooks.json",(err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
//         getTodos("resources/ousamabooks.json",(err, data) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         });
//             getTodos("resources/ayoubbooks.json",(err, data) => {
//                 if(err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
// });


// promises - simple example

// const doSomethingThatTakesTime = () => {
    
//     return new Promise((resolve, reject) => {
//         // do something that takes long and return the result (resolved or rejected)
//         //resolve('AM RESOLVED');
//         reject('NOT RESOLVED!');
//     });
// }

// doSomethingThatTakesTime().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// doSomethingThatTakesTime().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// }) 

// promises - usecase example
// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if(request.readyState === 4) {
//                 reject("couldn't fetch the data");
//             }
//         });

//         request.open('GET', resource);
//         request.send();
//     });
// }

// this is a much cleaner and maintainable than the callback hell.
// getTodos("resources/salahbooks.json")
// .then((data) => {
//     console.log(data);
//     return getTodos("resources/ayoubbooks.json");
// }).then((data) => {
//     console.log(data);
//     return getTodos("resources/ousamabooks.json")
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => console.log(err));

// Fetch API
// fetch('resources/salahbooks.json').then((response) => {
//     return response.json(); // that returns a promise.
// }).then((data) => { // chaining
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected: ', err);
// })

const getTodos = async () => {
    const response = await fetch('resources/salahbooks.jsson');
    if(response.status !== 200) {
        throw new Error("cannot fetch the data");
    }
    const data = await response.json();
    return data;
    
}

// testing asynchronous functionnality
console.log(1);
console.log(2);

// will take sometime to do, but the executing will process even tho
getTodos().then((data) => {
    console.log(data);
}).catch(err => console.log(err.message));

console.log(3);
console.log(4);