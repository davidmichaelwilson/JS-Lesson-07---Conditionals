// ============ PRACTICE 1 ============

// let oxygen = 30
// let danger = "Danger! You Can't Breathe Outside Right Now!!!"
// let safe = "It's safe to breathe. Pick me up some Whataburger."

// function oxyLevel() {
//   if (oxygen < 50) {
//     return danger
//   } else {
//     return safe
//   }
// }

// console.log(oxyLevel())


// ============ PRACTICE 2 ============

let myAge = 31
let response = ""
let messageElement = document.getElementById("message-element")

function carrousel() {
  if (myAge < 29){
    response = "Congrats! You get to live another day!"
  } else if (myAge === 29) {
    response = "Your crystal is flashing. You have ONE year remaining."
  } else if (myAge === 30) {
    response = "It's Carrousel for you, buddy!"
  } else {
    response = "The Sandmen have been notified. You better run!"
  }
    // console.log(response)    
  messageElement.textContent = response
}


// ============ PRACTICE 3 ============

console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false