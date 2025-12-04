//SECTION 1: Objects and OOPS Thinking (Foundation)

//Q(1)=> create a user ibject that stores name and email and has a login method which prints "user logged in"

// class User {
//   constructor(name,email){
// this.name = name;
// this.email = email;

// }
// login(){
//   console.log(`${this.name} User Logged in`)
// }
// }
// let u1  = new User("Gilman", "G@G.G")
// u1.login()

//Q(2)=> Imagine you have a 5 users.
//  first think how you would manage them withouth using a class.
//  then convert the same logic using a class and observe
//  how the code becomes cleaner ,
// write code both approach

// withouth using a class
// let obj1 = {
//   name: "Gilman",
//   age: 21,
//   email: "G@G.G",
// };

// let obj2 = {
//   name: "Gilman",
//   age: 21,
//   email: "G@G.G",
// };
// let obj3 = {
//   name: "Gilman",
//   age: 21,
//   email: "G@G.G",
// };

// let obj4 = {
//   name: "Gilman",
//   age: 21,
//   email: "G@G.G",
// };

// let obj5 = {
//   name: "Gilman",
//   age: 21,
//   email: "G@G.G",
// };


// same logic using a class
// class User {
//   constructor(name,age,email){
// this.name = name;
// this.age = age;
// this.email = email;
//   }

// }
// let u1 = new User("Gilman" , 21 , "G@G.G")
// let u2 = new User("Salman" , 29 , "s@s.s")
// let u3 = new User("Alman" , 24 , "a@a.a")
// let u4 = new User("Rahul" , 55 , "r@r.r")
// let u5 = new User("Saber" , 5 , "s@s.s")

//Q(3)=> Create a product object that stores name and price and has a method which returns thew finalpriceafter discount

// class Product{
//   constructor(name,price){
// this.name = name;
// this.price = price;
//   }
//   discount(amount){
// return this.price - amount 
//   }
// }
// let a = new Product ("Chashma" , 3000)

// console.log(a.discount(300))

//Q(4)=> The goal of this section is to understand why keeping data and their behaviour togather makes code easier to manage

// Putting data + behavior together = easier, safer, cleaner, reusable code.

//SECTION 2: Classes and Objects;

//Q(1)=> Create a Car class with the following :
//brand
//speed
//a Drive method that prints tha car brand and speed

// class Car{
//   constructor(brand,speed){
// this.brand = brand;
// this.speed = speed;
//   }  
//   drive(){
// return `The car brand is ${this.brand} and the speed is ${this.speed} km/h`;
//   }
// }

// let c1 = new Car ("BMW" , 333)
// console.log(c1.drive())

//Q(2)=> Create Two different car objects from the same class and verify that their data is diffeent.

// class Car{
//   constructor(brand,speed){
// this.brand = brand;
// this.speed = speed;
//   }  
//   drive(){
// return `The car brand is ${this.brand} and the speed is ${this.speed} km/h`;
//   }
// }

// let c1 = new Car ("BMW" , 333)
// console.log(c1.drive())

// let c2 = new Car ("AUDI" , 300)
// console.log(c2.drive())


//Q(3)=> Answer this in your own word: if classes did not exist, how would you write this logic and what problem might occur when the project becomes laarge?

//if classes did not exist, I would have to use separate variables and functions for every object. When the project becomes large,


// SECTION 3 : Constructor and this keyword

//Q(1)=> Create a Student class whose constructor accepts name and roll number, Add a method introduce that prints both values

// class Student{
//   constructor(name,rollno){
// this.name = name;
// this.rollno = rollno;
//   }
//   introduce(){
//     return ` Student Name is ${this.name} And RollNo is ${this.rollno}`
//   }
// }
// let s1 = new Student ("Gilman" , 18);
// console.log(s1.introduce())

//Q(2)=> Inside the  constructor, set values using this. 
//Then try removing this and notice what error occurs and why

// class gk {
//   constructor(name){
//    this.name = name
//   }
// }
// let a = new gk("Gilman")
// console.log(a)
// If we remove this, the value is not stored inside the object.
// this.name = ... creates a property on the object, but name = ... only changes a local variable.

// //Q(3)=> Create an object with two methods:
// //One method using a normal function
// //One methid using an arrow fumction
// //Inside both,print this and observe the difference

// let obj = {
//   fnc:function(){
//     console.log(this)
//   },
//    fnc2 : ()=>{
//       console.log(this)
//     }


// }
// obj.fnc()
// obj.fnc2()

//SECTION 4:  Constructor Function and Prototypes

//Q(1)=> Create a User constructor function (do not use class syntac),

// function User (name){
//   this.name = name
// }
// let a = new User("Gilman")
// console.log(a.name)

//Q(2)=> Add a login method in two ways:
//First, inside the constructor
//Then, move the method to the Prototype


//First, inside the constructor
// class gilman {
//   constructor(name){
// this.name = name

// this.login = ()=>{
// return this.name + " Logged in"
// }
//   }
 
//   }
  
// let a = new gilman ("GilmanQazi")
// console.log(a.login())


//Then, move the method to the Prototype

// class Gilman {
//   constructor(name){
// this.name = name
//   }
 
//   }

//   Gilman.prototype.lala = function(){
// console.log("Hello" + this.name)
//        }

  
// let a = new Gilman ("GilmanQazi");
// a.lala()


//Q(3)=> Create two Users objects and compare their login mehtods using equality,
//Explain why the Result is true or false

// let user1 = {
// login: function(){
//   console.log("Gilman")
// }
// }

// let user2 = {
//   login: function(){
//     console.log("Gilman")
//   }
//   }

//   console.log(user1.login === user2.login)


//   function userr (){
//     console.log("Gilman")
//   }
// let u1 = {login: userr}
// let u2 = {login: userr}

// console.log(u1.login === u2.login)



//SECTION 5: call , apply, bind

//Q(1)Create a function that prints this.name

// function abcd (){
// return this
// }
// let a = {a: "Gilman"}

// abcd.call(a)



//Q(2)=> Create an object that contains a name propertyu

// let obj = {
//   name: "Gilman"
// }
// console.log(obj.name)

//Q(3)=> Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it 


// Use call to run the function using the object

// function greet (word){
//   console.log(word + ',' + this.name)
// }
// let obj = {name: " Gilman"}

// greet.call (obj,"Assalamualaikum")


// Use apply to run the function using the object

// function greet (word){
//   console.log(word + ',' + this.name)
// }
// let obj = {name: " Gilman"}

// greet.apply (obj,["Assalamualaikum"])



// Use bind to create a new function and then call it 

// function greet (word){
//   console.log(word + ',' + this.name)
// }
// let obj = {name: " Gilman"}

// let a =  greet.bind (obj,["Assalamualaikum"])

// a


//Q(4) => borrow a method from one object and run it for another object usnig call

// let obj1 = {
//   name: 'Gilman',
//   sayHello: function(){
//     console.log("Assalamualaikum", this.name)
//   }
// }

// let obj2 = {
// name: "Qazi"
// }

// obj1.sayHello.call(obj2)

//Q(5)=> the goal is to understand how this can be manually controlled 


//   Normally JavaScript khud decide karta hai ki this ka matlab kya hoga.

// Lekin kabhi-kabhi hume manually this ko control karna padta hai — matlab
//  hume batana padta hai ki function ke andar this kis object ko represent karega.

// Hum ye 3 methods se karte hain:

// call() apply() bind()

// In teenon ka kaam hai:

// Function ke andar this ka value manually set karna.
