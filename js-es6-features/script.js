// var vs let vs const
// function func1() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i); // with var i = 5, with let its an error
//     // var scope is function
//     // let scope is block 
// }

// func1();

// objects
// const person = {
//     name: 'salah',

//     // old
//     printName: function() {
//         console.log(this.username);
//     },

//     // new
//     printName2() {
//         console.log(this.username);
//     }
// }

// person.username = 'test';
// // or if we dont know the name of the prop
// person['username'] = 'test';


// THIS keyword, if we call the person object using the reference THIS refers to the current object, 
// if we call through another reference THIS refers to global object window
// const person = {
//     name: 'salah',
//     printName() {
//         console.log(this.name);
//         console.log(this);
//     }
// }

// person.printName();

// const printName = person.printName;
// printName();


// Solution: Binding THIS
// const person = {
//     name: 'salah',
//     printName() {
//         console.log(this.name);
//         console.log(this);
//     }
// }

// person.printName();

// const printName = person.printName.bind(person);
// printName();


// this keyword and arrow functions
// old, this refers to the window object
// const person = {
//     log() {
//         let self = this;
//         setTimeout(function() {
//             console.log('this', self);
//         }, 1000);
//     }
// }

// new, using arrow functions this refers to the current block
// const person = {
//     log() {
//         setTimeout(() => {
//             console.log('this', this);
//         }, 1000);
//     }
// }
// person.log();


// array map method
// const names = ['salah', 'ayoub', 'ousama'];
// const newNames = names.map(color => `<h1>${color}</h1>`);
// console.log(newNames);

// object destructing
// const user = {
//     username: 'test',
//     email: 'test@gmail.com'
// }

// repetitive
// const username = user.username;
// const email = user.email;

// nicer
// const { username, email } = user;
// console.log(username);



// spread operator
// const arr1 = ['elem1'];
// const arr2 = ['elem2'];

// // old
// const combined0 = arr1.concat(arr2);

// // new 
// const combined1 = [...arr1, ...arr2];

// const first = { name : 'name' };
// const second = { email : 'email' };

// const combined = {...first, ...second};
// console.log(combined);
// console.log(combined1);



























