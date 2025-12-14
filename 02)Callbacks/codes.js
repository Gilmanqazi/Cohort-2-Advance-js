//Sync matlanb ek ke baad dusra honga jab tak ek complate na ho dusra shuru nhi honga
//Async sare kaam ek sath shuru kar do jiska Asnwer pahele aa jaye uska jawab de dena

// kaise pata chalta hai ke hum sync me likh rahe hai Async me :=>
//ASync:
//setTimeout
//setInterwal
//primises
//fetch
//axious
//XMLHttpRequest

//Or agar inka use nhi kar rahe ho to vo Sync hota hai

// console.log("12") //Sync

// setTimeout(() => {
//   console.log("Async code") //Async
// }, 2000);

//kai baar aapka finale code dependent hota hai kisi or ke server paar is case me hume nhi pata ho hai ki Answer uske server se kaab laut kar aayenga ke hum kya nhi kar sakte ke writing sync code ise niptane ke liye hum loog Async code likhte hai taki blocking na ho jaab bhi Answer aaye hamara ans ke respect me chalne wala code chale

// /Async code ka main motive hota hai ki us cases main jismain hume pata nhi code ka answer kitne der mein aayenga to jab bhi answer aa jaye uskeanswer ke respect me koi pertucular code chala dena

//Facebook se photo lao jaab fb se photo aa jaye to show kar dena

// console.log("sync")
// setTimeout(() => {
//   console.log("Sync Code")
// }, 2000);
// console.log("sync")

//Callback func hamesha async code  main ans aane par chalta hai

// /Jo bhi main stack par hota hai vo chalta hai and jo bhi side stack par hota hai vo output karta hai or jo bhi side stack par hota hai vo behind the Schen proccess karna hai jaba bhi v0 processing complate ho use main stack main laa kar chalya jaa sakta hai

//Main stack matlab => Execution
//Sync always moves to => main stack
//Async alway moves to =>

//IMPORTANT FOR INTERVIEWS
//Event loop Main Stack se Side Stack me Chize Lata hai

//   console.log("Hey1") //Sync
//   console.log("Hey2")//Sync
// setTimeout(()=>{//Async
//   console.log("Hey3")
// },0)
//   console.log("Hey4")//Sync

//Callbacks

//Jaab bhi hum Fetch, Axios, Promises ka code likh raha ho ya setTimeout ya setInterval to hum async ka  code likte hai ye requerst ko jete hai ab jaab conmplate ho jaye usla answer yaha ilta hai then,catch,callbakcs async await

//Async code likhne ke lie ap use kar sakte hai
//fetch
//axios
//promises
//XMLHttpRequest
//setTimeout
//setInterval

//Iska Answer Chalane Ke Liye
//callbacks
//async await
// then
//catch

// let ans = new Promise((resolve, reject) => {
//  if(true){
//   return resolve("Promise resolved")
//  } else {
//   return reject("Promise rejected")
//  }
// })
// ans
// .then(function(){
// console.log("Promise resolved successfully")
// })

// .catch(function(){
// console.log("Promise rejected")
// })

//user will ask for a number btw 0 se 9 and if the number is below 5 esolve if not reject

// let ans =new Promise ((res,rej)=>{
//  let n =  Math.floor(Math.random()*10)

//  if(n<5){
//   return res();
//  }else{
//   return rej()
//  }
// })
// ans.then(function(){
//   console.log("below")
// })
// .catch(function(){
//   console.log("Above")
// })

//sabse phale ghar par ao phir
// get kholo aur gate lagao
//kahna pakao khana khao
// incognito mode chalao
//  phir so ja o kyu ki tum thak gayee ho

// let ans = new Promise ((res,rej)=>{
// return res("sabse pahele ghar par aao")
// })

// let p2 = ans.then(function(data){
// console.log(data)
// return new Promise((res,rej)=>{
// return res("Gate kholo or agte lagao")
// })
// })

// let p3 = p2.then((data)=>{
// console.log(data);
// return new Promise((res,rej)=>{
// return res("Khana pakao or khana khao")
// })

// })
// let p4 = p3.then((data)=>{
// console.log(data)
// return new Promise ((res,rej)=>{
//   return res("Incognito mode chalao")
// })
// })

// let p5 = p4.then((data)=>{
// console.log(data)
// return new Promise((res,rej)=>{
// return res("Sojao kyu ki tum thak gaye ho ")
// })
// })

// p5.then((data)=>{
// console.log(data)
// })

//Async awail => k

//  async function abcd (){
// let ans = await fetch(`https://randomuser.me/api/`)
// let a = await ans.json()
// console.log(a)
//  }
// abcd()

//dekho ja bhi koi code async hai to aapko uske liye wait karna padta hai kyu hi hame nahji pata uska ans kaab aayenga
// console.log("1")
// setTimeout(()=>{
//   console.log("Async code")
// },3000)

// console.log("3")
// console.log("4")

//nesting callbacks

// let promise = new Promise((resolve,reject)=>{
// console.log("Promise started")
// reject("Some error occurred")
// });

// function getData (dataId,getNextData){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log(`Data for id: ${dataId}`);
//       if(getNextData){
//         getNextData();
//       }
//     }, 2000);
//   })
// }

// }
// getData(1,()=>{
// getData(2,()=>{
//   getData(3,()=>{
//     getData(4)
//   })
// })
// })

// let promise = new Promise((resolve,reject)=>{
// console.log("Promise started")
// reject("Some error occurred")
// });

// function delay(msg){
//   setTimeout(() => {
//     msg("Gilman")
//   }, 2000);

// }
// delay((msg)=>{
//   console.log(msg)
// } )

// function sum (a,b,cb){
//   let sum2 = a+b;
//   cb(sum2)
// }

// sum(2,2,function(sum){
//   console.log("The sum is "+sum)
// })

// let promise  =  new Promise((resolve,reject)=>{
//   let getData = false
//   if(getData){
//     return resolve()
//   }else{
//     return reject()
//   }

// })

// .then(function(message){
//   console.log("Data received successfully")
// })
// .catch(function(){
//   console.log("Some error occurred")
// })

// async function loginUser(username, password) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ userId: 101, name: username });
//     }, 1000);
//   });
// }

// async function getUserProfile(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ userId, age: 22, city: "Delhi" });
//     }, 1000);
//   });
// }

// async function getDashboardData(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ messages: 5, notifications: 10 });
//     }, 1000);
//   });
// }

// async function runApp() {
//   try {
//     const user = await loginUser("Aman", "1234");
//     console.log("User Logged In:", user);

//     const profile = await getUserProfile(user.userId);
//     console.log("User Profile:", profile);

//     const dashboard = await getDashboardData(user.userId);
//     console.log("Dashboard:", dashboard);

//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// runApp();

// async function fetchWeather() {
//   try {
//     const response = await fetch("https://api.example.com/weather");
//     const data = await response.json();
//     console.log("Weather:", data);
//   } catch (err) {
//     console.log("API Error:", err);
//   }
// }

// fetchWeather();

// async function getWeather() {
//   try {
//     const url = "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true";

//     const response = await fetch(url);
//     const data = await response.json();

//     console.log("Temperature:", data.current_weather.temperature, "°C");
//     console.log("Wind Speed:", data.current_weather.windspeed);
//     console.log("Weather Code:", data.current_weather.weathercode);
//   }
//   catch (error) {
//     console.error("Error fetching weather:", error);
//   }
// }

// getWeather();

//Promise chain =>

// const getPromise = ()=>{
//   return new Promise ((resolve,reject)=>{
//     console.log("I am a promise");
//  resolve ("Success ");
//     reject("Network error")
// })
// }
// let promise = getPromise()
// promise.then((res)=>{
//   console.log("Promise fulfiled",res)
// })
// promise.catch((err)=>{
//   console.log("Error",err)
// })

// function asyncfunc1(){
//   return new Promise((resolve,reject)=>{
// setTimeout(() => {
//   console.log("Some Data 1")
//   resolve("Success")
//   // reject("")
// }, 4000);
//   })
// }

// function asyncfunc2(){
//   return new Promise((resolve,reject)=>{
// setTimeout(() => {
//   console.log("Some Data 2")
//   resolve("Success")
// }, 4000);
//   })
// }
// console.log("Fetching data1.........")
// asyncfunc1()
// .then((res)=>{

//   console.log("Fetching data2.........")
// asyncfunc2()
//  .then((res)=>{

//   })
// })

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
// //       resolve("Success");
//       reject("Failed");
//     }, 2000);
//   });
// }

// console.log("Fetching Detailes......");
// getData(1)
//   .then((res) => {
//     return getData(2);

//   })

//   .then((res) => {
//     return getData(3);
//   })

//   .then((res) => {
//     return getData(4);
//   })

//   .then((res) => {
//     console.log("Final Data");
//   });


// function getData(dataId){
// return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("data:", dataId)
//     resolve("Success");
//   }, 2000)
// })
// }

//  getData(1)
// .then((res)=>{
// return getData(2)
// })

// .then((res)=>{
// return getData(3)
// })

//.then((res)=>{
//console.log(res)
// })



//Async Await=>:

//  function api(){
//   return new Promise((resolve,reject)=>{
// setTimeout(() => {
//   console.log("Weather Data")
// resolve(200)
// }, 2000);
//   })
// }

// async function getWatherData () {
//   await api(); //1st call
//   await api(); //2nd call
// }


// function getData(dataId,){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("data",dataId)
// resolve("Success")
//     }, 2000);
//   })
// }

// (async function (){
//   console.log("Getting data1.....")
//   await getData(1);
//   console.log("Getting data2.....")
//   await getData(2);
//   console.log("Getting data3.....")
//   await getData(3);
//   console.log("Getting data4.....")
//   await getData(4);
//   console.log("Getting data5.....")
//   await getData(5);
//   console.log("Getting data6.....")
//   await getData(6);
// })();




//API Calls=>;

// The fetch API provides an interface for fetching (sending/receiving) resources.it uses Request and Response object. The fetch() methond is used to fetch a resource (daa)

// let promise = fetch(URL,[options])
// API=> Aplicaion Programming

// const url = "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true";

// let btn = document.querySelector("button")
// let lan = document.querySelector(".lan")

// const getWeather = async ()=>{
//   console.log("Getting Data.....")
//   let response = await fetch(url);
//   console.log(response)
//   let data = await response.json()
//   console.log(data)
// lan.innerHTML = data.generationtime_ms
// }
// btn.addEventListener("click",getWeather)

// getWeather()


// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");


// for(let select of dropdowns){
//   for (currCode in countryList){
//     let newOption = document.createElement("option");
//     newOption.value = currCode;
//     select.append(newOption);
//   }
// }
