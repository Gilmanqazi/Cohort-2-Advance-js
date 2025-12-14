//Scenario 1: Weather Dashboard with Error Handling
//Build a small weather dashboard that fetches current weather data from public weather API (such as OpenWeatherMap)


//You mush make the API request asynchronously using fetch with async/await,

//if the API request fails (for example due to an invalid city name,) you wand must handle the error using try/catch

//Additionally, create and throw custom based on weather conditions.
//For example:
//if the temptures is extreamly high or extremely low, throw a custom error and handle it properly in your code.

// async function getweather (city){
  
//   try{
//     let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`
//   let raw = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)

//   if(!raw.ok){
//  throw new Error("City not found, try another city");
//   } 
//  let realData = await raw.json()
 
// if(realData.main.temp<0){
// console.warn(`To cold out there ${realData.main.temp}`); 
// }
// else if(realData.main.temp>40){
// console.warn(`To hot out there ${realData.main.temp}`)
// } else{
//   console.log(realData)
// }

//   }
//   catch(err){
//     console.log(err.message)
//   }
// }
// getweather("leh")


//Scenario 2: Bulk Email Sending Simulation with Parallel Primises and Error Handling

//Think of a schenario where you must simulate sending bulk emails to 5 users,
//Treat each email-sending operation as a Promise.all,

//if any email fails (for example, due to a random condition ,) you must catch the error and clearly show which specific email failed

//in addition, use a finally block to display a message indicating that the "Emailprocess is complete"

//ek array honga of emails 

// const users = [
// " mason.greenfield42@gmail.com",
// "alexa.rouse19@yahoo.com",
// "devon.klark87@outlook.com",

// ]


// function sendEmail(email){ 
// return new Promise ((resolve,reject)=>{

//   let time = Math.floor(Math.random()*5)
// setTimeout(() => {
//   let probability = Math.floor(Math.random()*10)
//   if( probability<= 5){
//     resolve("Email Successfully sent.");
//   } else{
//     reject("Email not sent..")
//   } 
  
// }, time * 1000 );
// })
// }

// async function sendEmails(userlist){
// let allResponses = userlist.map(function(email){
// return sendEmail(email)
// .then(function(data){
// return data
// })
// .catch(function(err){
// return err
// })
// })
// let ans = await Promise.all(allResponses);
// ans.forEach(function(status,index){
//   console.log(`${users[index]} => ${status}`)
// })
// }
// sendEmails(users)

