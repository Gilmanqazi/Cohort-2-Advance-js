// class User {
//   constructor(username,email,password){
// this.Username = username;
// this.email = email;
// this.password = password;
//   }
//   encryptPassword(){
//     return `${this.password} abc `
//   }
//   changeUsername(){
//     return `${this.Username.toUpperCase()}  `
//   }
// }

// let chai = new User("Chai", "Chai@chai.com", "123")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

// class User {
//   constructor(usrname){
//     this.usrname = usrname
//   }

//   logMe(){
//     console.log(`USERNAME is ${this.usrname}`)
//   }
// }
//  class Teacher extends User {
//   constructor(usrname,email,password){
//     super(usrname)
// this.email = email;
// this.password = password
//   }

//   addCource(){
//     console.log(`A new cource added by ${this.email}`)
//     }
//  }

//  const chai = new Teacher("chai", "chai@teacher.com" , "123")
//  chai.addCource()
//  chai.logMe()

// class User {
//   constructor(name){
//     this.name = name;
//   }

//   login(){
//     console.log(`${this.name} logged in`);
//   }
// }

// class Student extends User {
//   constructor(name, rollNo){
//     super(name);
//     this.rollNo = rollNo;
//   }

//   submitAssignment(){
//     console.log(`${this.name} submitted assignment and roll no is ${this.rollNo}`);
//   }
// }

// class Teacher extends User {
//   constructor(name, subject){
//     super(name);
//     this.subject = subject;
//   }

//   takeClass(){
//     console.log(`${this.name} is teaching ${this.subject}`);
//   }
// }

// const s = new Student("Aman", 12);
// const t = new Teacher("Ravi Sir", "Maths");

// s.login();
// s.submitAssignment();

// t.login();
// t.takeClass();


// class User {
//   constructor(username){
//     this.username = username;
//   }
//   login (){
//     console.log(`${this.username} is Logged in`)
//   }
// }
// class Student extends User {
//   constructor(username,rollno){
//     super(username);
//     this.rollno = rollno
//   }

//   assign (){
//     console.log(`${this.username} is submitted his assignment and roll no is ${this.rollno}`)
//   }
// }

// class Teacher extends User {
//   constructor(username, subject ){
//     super(username);
//     this.subject= subject;
//   }
//   takeClass(){
//         console.log(`${this.username} is teaching ${this.subject}`);
//        }

// }

// let s = new Student ("Gilman" , 22);
// let t = new Teacher ("Rahul Sir" , "Math")

// s.login();
// s.assign();
// t.takeClass()

// console.log(this)
// function abcd (){
//   console.log(this)
// }
// abcd()



// class Bottle{
//   constructor(){
//     this.color = "Blue"
//     this.material = "Plastic"
//     this.price = 130
//   }

//   fill(){}
//   drink(){}
// }

// let b = new Bottle ()
// console.log(b)

// class Sketch {
//   constructor(){
//     this.character = "Nobita"
//     this.color = "Yellow"
//   }
// speck(){}
// walk (){}
// }


// let s = new Sketch()
// console.log(s)


// let obj = {
//   func: function(){77
//  let fncc = ()=>{
// console.log(this)
//  }
// fncc()
  
// }
// }
// obj.func()

//(1) Call -> fnc chalata hai and this ki value set karta hai 
// let obj = {
//   name:'Gilman'
// }

// function gk (){
//   console.log(this)
// }
// gk.call(obj)
// let obj = {
//   name:"harsh"
// }


//(2) Apply -> wahi karta hai jo call karta hai and parameters and arguments me paheli vlaue this ki and dusri value array ki  hoti hai
// let obj = {
//   name:"Gilman"
// }
// function gk(a,b,c){
// console.log(this,a,b,c)
// }
// gk.apply(obj,[1,2,3,])



//(3) Bind -> wahi karta hai jo Call karta hai and aapko naya fnc deta hai
// function gk (a,b,c){
//   console.log(this,a,b,c)
// }
// let a = gk.bind(obj,1,2,3)

// a()


