//meta pe jana async1234 ka data leke aao -> agar koi data nhi aya to reject chalao 
//agar data aa gaya to vo resolve chalao

//Fetch se kisi bhi url par ja sakte hai 
//fetch la data readablew nhi hota
//use json banakar readable bana na padta hai 
//isek baad jo data milta hai vo readable hota hai
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(function(data){
//   data.json()
//   .then(function(readableData){
// console.log(readableData.title)
//   })
// })



// function getNum(){
//   return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     let num =  Math.floor(Math.random()*10)
//     if(num<5){
//      resolve("Num is Small " + num)
//     } else{
//      reject("Num is Bigg " + num)
//     }
//   }, 1000);
//    })
// }

// async function abcd(){
//  let a =  await getNum()
//  console.log(a)
// }
// abcd()


// Q1 — getProfile → getPosts → getComments

// 3 Promises banao:

// getProfile(username) → return user object

// getPosts(userId) → return list of posts

// getComments(postId) → return comments

// // Task: Chain use karke final comments print karo.

// function getProfile(username){
//   return new Promise ((resolve,reject)=>{
// setTimeout(() => {
//   resolve({userId:1, name:username})
// }, 1000);
//   })
// }
// function getPosts(userId){
//   return new Promise((resolve,reject)=>{
// setTimeout(() => {
//   resolve({Post1: "Hello World", Post2: "Learning Promises"})
// }, 1000);
//   })
// }
// function getComments(post){
// return new Promise ((resolve,reject)=>{
// setTimeout(() => {
//   resolve({Comment1: "Gereat Post", Comment2: "Very Informative"})
// }, 1000);
// })
// }

// getProfile("Gilman")
// .then(function(user){
//   console.log("User:", user);
//   return getPosts(user.userId);
// })
// .then(function(posts){
//   console.log("Posts:", posts);
//   return getComments(posts.Post1);
// })
// .then(function(comments){
//   console.log("Comments:", comments);
// })

// .catch((error)=>{console.log(error)})


// Q2 — getMovie → getCast → getReviews

// 3 API-like functions promise ke saath:

// getMovie("Avatar") → movieId

// getCast(movieId) → cast list

// getReviews(movieId) → ratings and reviews

// Final output print karo.

// function getmovie(movieName){
//   return new Promise ((resolve,reject)=>{
// console.log("Getting movie name......")
// setTimeout(() => {
//   resolve({movieId:1, name:movieName})
// }, 1000);
//   })
// }
// function getCast(movieId){
//   return new Promise ((resolve,reject)=>{
//     console.log("Getting movie Casts......")
// setTimeout(() => {
//   resolve({cast1:"SalmanKhan", cast2:"ShahrukhKhan"})
// }, 1000);
//   })
// }
// function getReviews(cast){
// return new Promise ((resolve,reject)=>{
//   console.log("Getting movie Reviews......")
// setTimeout(() => {
//   resolve({review1:"Very Good Movie", review2:"Must Watch"})
// }, 1000);
// })
// }

// getmovie("Avatar")
// .then(function(movie){
//   console.log("Movie:" , movie)
// return getCast(movie.movieId)
// })
// .then(function(cast){
//   console.log("Cast:" , cast)
//   return getReviews(cast.cast1)
// })
// .then(function(reviews){
// console.log("REviews:", reviews)
// })
// .catch((err)=>{
//   console.log(err)
// })


// Q3 — authenticate → fetchData → logActivity

// 3-level promise chain:

// Login user

// Fetch user-specific dashboard data

// Log user activity

// Final: "Activity Logged" print karo.


// function authenticate(username){
//   return new Promise ((resolve,reject)=>{
//     resolve({userId:1 , name:username})
//   })
// }
// function fetchData (userId){
//   return new Promise((resolve,reject)=>{
//     resolve({data1:"Dashboard Data 1", data2: "Dashboard Data 2"})
//   })
// }
// function logActivity(data){
//   return new Promise ((resolve,reject)=>{
//     resolve("Activity Logged Successfully")
//   })
// }

// authenticate ("Gilman")
// .then (function(user){ 
//   console.log("User:", user)
//   return fetchData (user.userId)
// })

// .then(function(data){
//   console.log("Data:" , data)
//   return logActivity (data)
// })
// .then(function(result){
//   console.log("Result:", result)
// })



// Q4 — getWeather → getForecast → getWarnings

// Flow:

// getWeather(city) → temperature

// getForecast(temp) → next 7 days

// getWarnings(forecast) → possible risks

// Final me warnings print karo.

// function getWeather (city){
//   return new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//       resolve({Id:1 , name:city})
//     }, 1000);
//   })
// }
// function getForecast (id){
//  return new Promise ((resolve,reject)=>{
//     setTimeout(() => {
// resolve(45)
//     }, 1000);
//   })
// }
// function getWarnings (temp){
//   return new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("Warning New 7Days Heavy Rain")
//     }, 1000);
//   })
// }
// getWeather("Mumbai")
// .then(function(city){
// console.log("City:", city)
// return getForecast (city.Id)
// })
// .then(function(temp){
//   console.log("Temp:", temp)
//   return getWarnings(temp)
// })
// .then(function(result){
//   console.log(result)
// })

// // Q5 — validateCard → checkBalance → processPayment

// // Promise chain:

// // Card validation
  
// // Balance check

// // Payment process

// // Final: "Payment Successful" print karo.

// function validateCard (username){
// return new Promise((resolve,reject)=>{
//   console.log("Fetching User Details........")
// setTimeout(() => {
//   resolve({cardId:123, name:username})
// }, 1000);
// })
// }
// function checkBalance (cardId){
//   return new Promise((resolve,reject)=>{
//     console.log("Fetching user Balance........")
//     setTimeout(() => {
//       resolve(60000)
//     }, 1000);
//   })
// }
// function processPayment (Balance){
//   return new Promise ((resolve,reject)=>{
//     console.log("Payment Status........")
// setTimeout(() => {
//   resolve("Payment Successfull")
// }, 1000);
//   })
// }
// validateCard("Gilman")
// .then((user)=>{
//   console.log("User:", user)
//   return checkBalance (user.cardId)
// })
// .then((balance)=>{
//   console.log("Balance:", balance)
//   return processPayment(balance)
// })
// .then((Status)=>{
//   console.log(Status)
// })


// Q6 — getStudent → getSubjects → getResult

// Flow:

// Fetch student

// Fetch subjects

// Mark result (pass/fail)

// Final result print karo.

// function getStudent(name){
//   return new Promise ((resolve,reject)=>{
//     console.log("Fetching Student Details........")
// setTimeout(() => {
//   resolve({studentId:1,name:name})
// }, 1000);
//   })
// }
// function getSubjects(studentId){
//   return new Promise((resolve,reject)=>{
//     console.log("Fetching Student Subjects........")
// setTimeout(() => {
//   resolve({subject1:"Maths", subject2:"Science"})
// }, 1000);
//   })
// }
// function getResult(subjects){
//   return new Promise ((resolve,reject)=>{
//     console.log("Fetching Student Result........")
//     setTimeout(() => {
//       resolve("Student Passed in All Subjects  " + subjects.subject1 + "," + subjects.subject2)
//     }, 1000);
// })
// }

// getStudent("Gilman")
// .then(function(student){
//   console.log("Student:", student)
//   return getSubjects(student.studentId)
// })
// .then(function(subjects){
//   console.log("Subjects:", subjects)
//   return getResult(subjects)
// })
// .then(function(result){
//   console.log(result)
// })


// Q8 — getBook → getAuthor → getPublisher

// Flow:

// Fetch book info

// Id se author fetch

// Author ke publisher fetch

// Final data print karo.


// function getBook(title){
//   return new Promise((resolve,reject)=>{
// setTimeout(() => {
//   resolve({bookId:1, title:title})
// }, 1000);
//   })
// }
// function getAuthor(bookId){
//   return new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//       resolve({author:1, name:"J K Rowling" , })
//     }, 1000);
//   })
// }

// function getPublisher(author){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("Publisher: Bloomsbury Publishing")
//     }, 1000);
//   })
// }
// getBook("Harry potter")
// .then(function(book){
//   console.log("Book:", book)
//     return getAuthor(book.bookId)
//   })
//  .then(function(auther){
//     console.log("Author:",auther)
//     return getPublisher(auther.author)
//   })
//   .then(function(publisher){
//     console.log(publisher)
//   })

