//Debouncing and Throttling

//Debouncing:>
// function debounce(fn,delay){
// let timer;
// return function(){
//   clearTimeout(timer)
//     timer = setTimeout(fn,delay)
//   }
// }

// let inp = document.querySelector("#search")
// inp.addEventListener("input",debounce(function(){
// console.log("chala")
// },3000))


// Throttling:>
// function throttle(fn,delay){
// let last = 0
// return function(){
//   const now = Date.now();
//   if(now - last>= delay){
//     last = now;
//     fn()
//   }
// }
// }
// window.addEventListener("mousemove",throttle(function(){
//   console.log("Gilman")
// },2000))


//JSON Parse
//JSON Stringify

// JSON.stringify({name:"Gilman", age:27})