//Q1 (BASIC - callback)
//Ek function banao afterDelay
//Requirement :
// ye function 2 cheezein lega:
//time (milliseconds)
//callback function
//Given time ke baad callback call kare
//Callback ke andar "Callback executed" print karvao
// Answer=>:

// function afterDelay(time,cb){
// setTimeout(() => {
//   cb()
// }, time);
// }

// afterDelay(2000,function(){
//   console.log("Callback Executed")
// })

//Q2 (INTERMEDIATE - data flow)
//Ek function banao getUser
//Requirement:
//Username lega
//1second ke baad callback ko ek object de:
//id
//username
//Then:
//Callback ke andra ek aur function call karo getUserPosts
//GetUserPosts:
//userId lega
//1 second ke baad callback ko posts ke array de
//final output:
//user ka username print ho 
//Fir uske posts print ho 
//Answer=>:


// function getUser(username,cb){
// setTimeout(() => {
//   cb({id:1,username:"Gilman"})
// }, 1000);
// }

// function getUserPosts(userId,cb){
//   setTimeout(() => {
//     cb(["HII", "HELLO", "ASSALAMUALAIKUM"])
//   }, 2000);
// }

// getUser("GIlmanK",function(data){
//   console.log("Username:" , data.username)
// getUserPosts(data.id, function(posts){
// console.log("posts:",posts)
// })
// })


//Q3 (INTERMEDIATE - callback dependency, thoda painful)
//Teen function banao:
//loginUser
//1 second baad callback ko user object de 
//fetchPermission
//userId lega
//1 second baad callback ko permission array de
//loadDashboard 
//Permission lenga 
//1 second baad callback ko "dashboard loaded" bole

// Answer=>:
// function loginUser(username,cb){
//   console.log("Fetching userlogin...")
//   setTimeout(() => {
//     cb({userId:101,username:"Gilman"})
//   }, 1000); //Data
// }
// function fetchPermission(userId,cb){
//   console.log("Fetching permission...")
//   setTimeout(() => {
//     cb(["read","write","execute"])
//   }, 1000);
// }
// function loadDashboard(permission,cb){
//   console.log("Fetching Dashboard...")
//   setTimeout(()=>{
//     cb("Dashboard Loaded successfully");
//   },1000)
// }

// loginUser("Gilman",function(user){
// fetchPermission(user.userId,function(permission){
// loadDashboard(permission,function(result){
//   console.log(result)
// })
// })
// })



// Q4 → getStudent → getMarks

// Ek function getStudent(name, cb) banao jo 1 sec baad student ka object return kare:

// {id: 1, name: name}


// Phir uske andar getMarks(studentId, cb) call ho jo 1 sec baad marks ka array return kare.
// Finally student name + marks print karo.

// function getStudent(name,cb){
//   console.log("Fetching Username")
//   setTimeout(() => {
//     cb({studentId:1,studentName:"Gilman"})
//   }, 1000);
// }

// function getMarks(studentId,cb){
//   console.log("Fetching Student marks")
// setTimeout(() => {
//   cb([50,80,100])
// }, 1000);
// }

// getStudent("Gilman",function(student){
//   getMarks(student.studentId,function(marks){
//     console.log("Student:",student,"Marks:",marks)
//   })
// })


// Q5 → getProduct → getPrice

// getProduct(productName, cb)
// → 1 sec baad id + name de

// getPrice(productId, cb)
// → 1 sec baad price de
// Print:

// Product: NAME  
// Price: PRICE

// function getProducts(productName,cb){
//   console.log("Fetching ProductName.........")
//   setTimeout(() => {
//     cb({productId:1 , productName:"Laptop"})
//   }, 1000);
// }

// function getPrice(productId,cb){
//   console.log("Fetching ProductPrice........")
//   setTimeout(() => {
//     cb([50000])
//   }, 1000);
// }

// getProducts("Laptop",function(product){
//   getPrice(product.productId,function(price){
//     console.log("ProductName:", product, "ProductPrice:",price)
//   })
// })

// authenticate(username, cb)
//     → fetchRole(userId, cb)
//           → loadPanel(role, cb)

// Logged in as: username  
// Role: role  
// Panel Loaded


// Q6 → authenticate → fetchRole → loadPanel
// Flow kuch aisa:

// authenticate(username, cb)
//     → fetchRole(userId, cb)
//           → loadPanel(role, cb)


// Output:

// Logged in as: username  
// Role: role  
// Panel Loaded


// function authenticate (username,cb){
// setTimeout(() => {
//   cb({userid:1, username:"Gilman"})
// }, 2000);
// }

// function fetchRole(userId,cb){
// setTimeout(()=>{
// cb({"Role" : "Admin"})
// },2000)
// }
// function loadPanel(role,cb){
// setTimeout(() => {
//   cb("PanelLoaded Successfully")
// }, 1000);
// }

// authenticate("Gilman",function(user){
//   fetchRole(user.userid,function(role){
//     loadPanel(role.Role,function(result){
//       console.log("Logged in as:",user)
//       console.log("Role is:",role)
//       console.log("loadPanel:",result)
//     })
//   })
// })


//Q7 getCity → getWeather

// getCity(zipcode, cb)
// → 1 sec baad return kare cityName

// getWeather(cityName, cb)
// → 1 sec baad return kare weather info

// Console me print:

// City: ___  
// Weather: ___

// function getCity(zipcode,cb){
//   setTimeout(() => {
//     cb("Mumbai")
//   }, 1000);
// }

// function getWeather(cityName,cb){
//   setTimeout(() => {
//     cb("Rainy")
//   }, 1000);
// }

// getCity(400001,function(city){
//   getWeather("Mumbai",function(weather){
//     console.log("City:" ,city )
//     console.log("Weather:" ,weather )
//   })
// })

 //Q8 → getOrder → getOrderItems → getDeliveryStatus

// 3-level callback hell banana hai:

// user order fetch

// phir uske items fetch

// phir uska delivery status fetch
// Finally sab data print karo.

// function getOrder(dishName,cb){
//   console.log("Fetching User order.....")
// setTimeout(() => {
//   cb({orderId:1, dish:dishName})
// }, 1000);
// }
// function getOrderItems(order,cb){
//   console.log("Fetching DishItems.....")
// setTimeout(() => {
//   cb({orderId: order.orderId, items:["Cheese","Tomato","Olives"]})
// }, 2000);
// }

// function getDeliveryStatus(orderItems,cb){
//   console.log("Checking delivery status...");
// setTimeout(() => {
//   cb("Order Complate")
// }, 2000);
// }

// getOrder("Pizza",function(order){
// getOrderItems(order,function(items){
//   getDeliveryStatus(items,function(result){
//     console.log("\n--- Final Result ---");
//     console.log("Orders:",order)
//     console.log("Items:",items)
//     console.log("Result:",result)
//   })
// })
// })

//Q9 → getMovie → getCast → getReviews

// Movie info

// Phir cast

// Phir reviews
// Console:

// Movie Loaded  
// Cast Loaded  
// Reviews Loaded

// function getMovie(movieName,cb){
//   console.log("Fetching Movie Info...")
//   setTimeout(() => {
//     cb({"movieId":1, "movieName":movieName})
//   }, 1000);
// }
// function getCast(movieId,cb){
//   console.log("Fetching Cast Info...")
//   setTimeout(() => {
//     cb(["Salman Khan", "shahrukh Khan", "Aamir Khan"])
//   }, 1000);
// }

// function getReviews(cast,cb){
//   console.log("Fetching Reviews Info...")
//   setTimeout(() => {
//     cb(["Good movie", "Excellent", "Must Watch"])
//   }, 1000);
// }

// getMovie("Bads Of Bollywood",function(movie){
//   getCast(movie.movieId, function(cast){
//     getReviews(cast,function(reviews){
//       console.log("Movie Loaded:" ,movie)
//       console.log("Cast Loaded:",cast)
//       console.log(" Reviews Loaded:",reviews)
//     })
//   })
// })

//Q10 → registerUser → sendOTP → verifyOTP

// Flow:

// registerUser() → new user ID

// sendOTP(userId) → OTP

// verifyOTP(otp) → "OTP Verified"

// Console:

// User Registered  
// OTP Sent  
// OTP Verified

// 

//Q11 → fetchCategory → fetchProducts → fetchRecommended

// Data chain example:
// fetchCategory("electronics") → categoryId
// fetchProducts(categoryId) → products
// fetchRecommended(products) → recommended items

// Print recommended products.

// function fetchCategory(productName,cb){
//   console.log("Fetching Category......")
//   setTimeout(() => {
//     cb({categoryId:1,product:productName})
//   }, 1000);
// }

// function fetchProducts(categoryId,cb){
//   console.log("Fetching Products......")
//   setTimeout(() => {
//     cb(["Mobiles", "Laptop", "Camera", "Projector"])
//   }, 1000);
// }

// function fetchRecommended (products,cb){
//   console.log("Fetching Recommended......")
//   setTimeout(() => {
//     cb(["Laptop", "Camera"]);
//   }, 1000);
// }
// fetchCategory("Electronics",function(category){
//   fetchProducts(category.categoryId,function(products){
//     fetchRecommended(products,function(result){
// console.log("Category:" ,category)
// console.log("Products:" ,products)
// console.log("Recommended Products:" ,result)
//     })
//   })
// })

//Q12→ multi-step banking flow (4-level hell)
// Flow:

// loginUser

// fetchBalance

// fetchTransactions

// sendReport

// End output:

// Report Sent Successfully

// function loginUser(username,cb){   
//   console.log("Fetching User info.......")
// setTimeout(() => {
//   cb({id:1, name:username})
// }, 1000);
// }

// function fetchBalance(id,cb){
//   console.log("Fetching User Balance.......")
// setTimeout(() => {
//   cb(40000)
// }, 1000);
// }

// function fetchTransactions(balance,cb){
//   console.log("Fetching Transaction.......")
//   setTimeout(() => {
//     cb(["Shopping - 2000", "ATM - 5000"])
//   }, 1000);
// }

// function sendReport (Transaction,cb){
//   console.log("Fetching Transaction Report.......")
//   setTimeout(() => {
//     cb("Report Sent Successfullt")
//   }, 1000);
// }

// loginUser("Gilman",function(user){
// fetchBalance(user.id,function(Balance){
// fetchTransactions(Balance,function(transaction){
// sendReport(transaction,function(ReportStatus){
//   console.log("\n--- Final Output ---");
//   console.log("Username:" , user)
//   console.log("Balance:" , Balance)
//   console.log("Report:" , transaction)
//   console.log("Report Send:" , ReportStatus)
// })
// })
// })
// })



