// GLOBAL OBJECT WINDOW & THIS
// console.log(window.console.log('test of window object'));
// console.log(this.console.log('test of this keyword'));

// HOISING
// func1();

// function func1() {
//     console.log('func1 called');
// }

// UNDEFINED
// let a;
// if(a === undefined) {
//     console.log("a is undefined");
// } else {
//     console.log("a is defined");
// }

// single threading
// service.getLargeDataThatGonnaTakeTime();
// the engine will not procced execution until this function ends executing, our program will be blocked


// function invocation & execution stack
// function func1() {
//     console.log('func1 is called');
// }

// function func2() {
//     func1(); 
//     console.log('func2 is called');
// }

// func2(); // function invocation
// console.log('global context...');

// variables environments
// function func1() {
//     let tempVar;
//     console.log(tempVar);
// }

// function func2() {
//     let tempVar = 2;
//     func1(); 
//     console.log(tempVar);
  
// }
   
// let tempVar = 1;
// func2(); 
// console.log(tempVar);

// SCOPE CHAIN

// scope chain with global context
// function func1() {
//     console.log(tempVar);
// }

// function func2() {
//     let tempVar = 2;
//     func1(); 
// }
   
// let tempVar = 1;
// func2(); 

// scope chain with functions context
// function func2() {
//     function func1() {
//         console.log(tempVar);
//     }
//     func1(); 
// }
// let tempVar = 1;
// func2(); 

// asynchronous demo
// console.log("start");

// setTimeout(() => {
//     console.log("in timeout");
// }, 2000);

// console.log("finish");

//



