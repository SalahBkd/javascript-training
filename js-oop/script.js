// wrapping happens under the hood when calling toUpperCase() on str
// const str = 'salah';
// console.log(str.toUpperCase());


// class User {
//     constructor(username) {
//         this.username = username;
//         this.score = 0;
//     }

//     increaseScore() {
//         this.score++;
//         console.log(`${this.username} has ${this.score}`);
//         return this;
//     }

//     logout() {
//         console.log('logging out...');
//         return this;
//     }

//     toString() {
//         console.log(this.username);
//     }
// }

// class Admin extends User {
//     constructor(username, title) {
//         super(username);
//         this.title = title;
//     }
// }

// const user = new User('salah');
// const admin = new Admin('brini', 'nadi');
// methods chaining
// user.increaseScore().increaseScore().logout();

// N.B: classes in JS are just syntax sugar

// how classes works behind the scenes
// function User(username) { // this is a constructor
//     this.username = username;
// }
// const user = new User('salah');
// console.log(user);



// prototype model
// every object we create is attached to a proto prepery that can point to other prototypes, by default it's pointing
// to Object prototype
// console.log(Date.prototype);
// console.log(Array.prototype);
// console.log(Object.prototype);

// prototypes demo
// User.prototype.sayMyName = function() {
//     console.log(`${this.username}`);
// }

// const user = new User('salah');
// console.log(user.sayMyName());
// console.log(user);

// prototypal inheritance
// function User(username) { // this is a constructor
//     this.username = username;
// }

// function Admin(username, title) {
//     User.call(this, username);
//     this.title = title;
// }

// User.prototype.sayName = function() {
//     console.log(`${this.username}`);
// }

// Admin.prototype = Object.create(User.prototype); // copies the user prototype in admin prototype, Admin inherits User 
// // proto functions
// const admin = new Admin('salah', 'im admin');
// console.log(admin);


// built-in objects
// in JS Object is the base object
//console.log(new XMLHttpRequest()); // see the prototypal inheritance hierarchy


// destrcutre props
// const tempObject = {
//     propName: 'propValue'
// }
// const { propName } = tempObject; // this is like...
// const propName = tempObject.propName;

// callback function demo
// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);























