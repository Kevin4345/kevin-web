console.log("Hello world");
// let x = 10;
// let y = 5;
//  console.log(x+y)

// FUNCTIONS
//Functions are set of statements that either performs a task or calculates and returns a value
//A Real world application is collection of hundreds of functions working together to provide the functtionalty of that application
// 1.
//performing a task
function greet(name, lastName) {
    console.log ('Go' + name +' ' + lastName)

}
greet(' Kevin','Njuguna');


function call(name) {
    console.log('come here!' + name)
}
 call('kevin')

// 2.
//Calculating a value it can be a square or a cube
function cube(number) {
     return number * number * number;
    }
let number = cube(4);
console.log(number);

// 2.1 
//You can make it short by using cube(4)
function cube(number) {
         return number * number * number;
        }
console.log(cube(4)) 
// 2.2
//you ca n as well square strings
function square(number) {
    return number *  number;
   }
console.log(square(4)) 
//why what the impact and what you will do with
