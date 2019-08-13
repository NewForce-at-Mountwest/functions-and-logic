


// -------------- FUNCTIONS ------------//

// Write a function that logs "hello, world" to the console
// function sayGoodMorning(){
//   console.log("GOOD MORNING")
// }

// sayGoodMorning()

// function sayAnything(phrase){
//   console.log(phrase)
// }

// sayAnything("it's tuesday and we're all tired")


// function greetAFriend(greeting, friend){
//   console.log(`${a}, ${friend}! How are you today?`)
//   // console.log(greeting, friend)
// }

// greetAFriend("Howdy", "Josh")

function screamGreeting(greeting, friend){
  var phrase = `${greeting}, ${friend}, how are you today?`
  var scream = phrase.toUpperCase()
  console.log(scream)
}

screamGreeting("Hello", "Seaver")
screamGreeting("Hi", "Levi")

var students = ["Alex", "Seaver", "Levi", "David", "Caleb"]

for(var i = 0; i < students.length; i++){
  var currentStudent = students[i]
  screamGreeting("Hi", currentStudent)
}





// ----------------------- LIGHTNING EXERCISE -------------------------------- //

// 1. Write a function called `addToCart` that takes one argument of `itemName`
function addToCart(itemName){
  // var sentence = `The ${itemName} have been added to your cart`
  // console.log(sentence)
  console.log(`The ${itemName} have been added to your cart`)
}

addToCart("blueberries")
addToCart("tacos")
addToCart("peaches")
// 2. The function should log the sentence "The [itemName] has been added to your cart!" to the console.
// 3. Call the function

var foodsToAddToCart = ["peaches", "blueberries", "tacos"]

for(var i =0; i < foodsToAddToCart.length; i++){
  addToCart(foodsToAddToCart[i])
}





// Imagine you manage a book store. Write a function that loops through the inventory array.
// Print each book title to the console

var bookStoreData = [
  {
    name: "Harry Potter Box Set",
    quantity: 4
  },
  {
    name: "The Hobbit",
    quantity: 0
  },
  {
    name: "The Hunger Games",
    quantity: 8
  },
  {
    name: "How to Cook Everything",
    quantity: 16
  },
  {
    name: "The Lion, The Witch, and the Wardrobe",
    quantity: 9
  },
  {
    name: "Crime and Punishment",
    quantity: 0
  },
]

function printInventoryReport(inventoryArray){
  // console.log(inventoryArray)
  for(var i = 0; i<inventoryArray.length; i++){
    if(inventoryArray[i].quantity > 0){
      console.log(inventoryArray[i].name)
    }
  }
}

printInventoryReport(bookStoreData)




// -------- RETURN STATEMENTS ----------//


// function addTwoNumbers(number1, number2){
//   var sum = number1 + number2
//   var difference = num1 - num2
//   var objToReturn = {
//     addedNumbers: sum,
//     subtractedNumbers: difference
//   }
//   return objToReturn
// }

// Store the returned value in a variable
// var returnedThingFromFunction = addTwoNumbers(4, 6)
// console.log("this is sum outside the function", returnedThingFromFunction)

// // Call the function directly in console log
// console.log(addTwoNumbers(4, 6))













// -------------------------------------------- SCOPE --------------------------------------//
// Global vs. local variables
// var is function scoped
// var customer = "Tommy";

const customer = "Josh"


console.log("Customer outside function", customer)


// code here can NOT use shellType
function buildTaco() {
  const shellType = "crunchy"
  let taco = "a soft taco"
  if(shellType === "crunchy"){
    taco = "A crunchy taco"
  }
  console.log(taco)



    // var shellType = "crunchy"
    console.log("customer inside function", customer)
    // code here CAN use shellType
    // it can also use customer
  }

  buildTaco()
  // console.log("shelltype outside of function", shellType)






  // pro tip: if you declare a variable without a var keyword, it becomes global

  // var can be reassigned and updated

  // let and const are block scoped, which means any curly braces become their own scope
  // let can be reassigned
  // const can't










