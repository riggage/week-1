// let myName = "Tom";
// console.log(myName);
// console.log(myName.length);
// console.log("Thomas Rigg".length);
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(Math.random());
// console.log(Math.random() *10);
// console.log(Math.ceil(Math.random() *10))

// console.log("   |  |\n\
//    |  |\n\
//    |  |\n\
// ---------\n\
//    |  |\n\
//    |  |\n\
//    |  |\n\
// ---------\n\
//    |  |\n\
//    |  |\n\
//    |  |   ")

// console.log("All around the world".charAt(7).toUpperCase());

// let favDrink = "Beer";
// console.log(favDrink);
// console.log("My favourite drink is " +favDrink);
// console.log(`My favourite drink is ${favDrink} because it's nice`);
// Activity 1
// let myName = "Tom"
// let myAge = 29
// let myFavColour = "Red"
// console.log(`My name is ${myName}, I am ${myAge}, and my favourite colour is ${myFavColour}`)
// // Activity 2
// let breakfast = "Shredies"
// let dinner = "Cheese Roll"
// let tea = "Curry"
// console.log(`For my breakfast today I will have ${breakfast}, for my dinner I will have ${dinner}, and for my tea I will have ${tea}.`)
// breakfast = "Bacon and eggs"
// dinner = "Salad"
// tea = "Jerk Chicken"
// console.log(`For my breakfast today I will have ${breakfast}, for my dinner I will have ${dinner}, and for my tea I will have ${tea}.`)
// // Activity 3
// function getNumberOfDays(start,end){const date1 = new Date(start); const date2 = new Date(end);const oneDay = 1000 * 60 * 60 * 24;const diffInTime = date2.getTime() - date1.getTime();const diffInDays = Math.round(diffInTime / oneDay);return diffInDays;}
// console.log(getNumberOfDays("1/11/2022", "7/9/2022"));
// // Activity 4
// let X = "X"
// let O = "O"
// let space = " "
// console.log(`   |   |
//  ${X} | ${O} | ${space}
//    |   |
// ---------
//    |   |
//  ${X} | ${X} | ${space}
//    |   |
// ---------
//    |   |
//  ${O} | ${space} | ${space}
//    |   |   `)

// let music = "Metal";
// if (music == "Classical"){console.log("Oh no it's that classical again")}
// else if (music == "No music"){console.log("Ah peace and quiet")}
// else {console.log("Nice and noisy")}

// let place = "Liverpool";
// let weather = "Cloudy";
// if (place == "Liverpool" && weather == "Sunny"){console.log("Check again")}
// else if (place == "Liverpool" && weather == "Rain"){console.log("Obvs")}
// else {console.log("What it's not raining?")}

// const grade = 30;
// switch (true){case grade >=70:
// console.log("Distinction");
// break;
// case grade >=60:
//     console.log("Merit");
//     break;
//     case grade >50:
//         console.log("Pass");
//     break;
//     default:
//         console.log("Failed")}

// if (grade >= 70){console.log("Distinction")}
// else if (grade >=60){console.log("Merit")}
// else if (grade >=50){console.log("Pass")}
// else {console.log("Failed")}

// const age = 18
// let country = "UK"
// if (age > 17 && country == "UK"){console.log("Yes I can serve you")}
// else {console.log("No I cannot serve you")}

// let topping = "pinapple"
// switch (topping){
//     case "cheese":
//     case "meat":
//         console.log("These are important ingredients for my pizza.")
//     break;
//     case "mushrooms":
//     case "bbq sauce":
//         console.log(`I don't mind having ${topping} on my pizza.`)
//     break;
//     case "pinapple":
//         console.log(`${topping} should not be on a pizza.`)}

// let passWord = "P455w0?"
// if (passWord.length <8){console.log("Sorry, this password is too short")}
// else {console.log("Password accepted")}

// let num = 2
// if (num %3==0){console.log("This number is divisible by 3 or 5")}
// else if (num %5==0){console.log("This number is divisible by 3 or 5")}
// else {console.log("This number is not divisible by 3 or 5")}
// if(num % 5 === 0 && num % 3 === 0){
//     console.log("FizzBuzz")}
// else if (num %3===0){console.log("Fizz")}
// else if (num %5===0){console.log("Buzz")}
// else {console.log(num)}

// let num = 2002;
// let numStr = num.toString()
// let numReverse = numStr.split("").reverse().join("");
// if (numStr === numReverse) {
//     console.log("This number is a palindrome");} 
// else {
//     console.log("This number is not a palindrome");}

// let time = 0000
// let placeOfWork = "CodeNation"
// let townOfHome = "Liverpool"
// if (time <=0900){console.log(`I am at home in ${townOfHome}`)}
// else if (time <=0930){console.log(`I am commuting to ${placeOfWork} from ${townOfHome}`)}
// else if (time <=1730){console.log(`I am at work in ${placeOfWork}`)}
// else if (time <=1800){console.log(`I am commuting home to ${townOfHome} from ${placeOfWork}`)}
// else {console.log(`I am at home in ${townOfHome}`)}

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let newStr = (str.lastIndexOf("i"));
// console.log(`${newStr}`);

// let word = "strings";
// if (word.charAt(0) == word.charAt(word. length - 1)){
//     console.log("true")}
// else {
//     console.log("false")}

// let num1 = 7;
// let num2 = 4;
// if (num1 + num2 % 2 == 0) {
//     console.log (num1 + num2)}
// else {console.log (num1 * num2);} 

// let theGrid = [["o", "x", "o"], 
//                ["o", " ", "o"], 
//                ["x", " ", "o"]];
// let toCheck;
// for (let i = 0; i < 2; i++) {
//     if (i == 0) {
//         toCheck = "x";
//     } else {
//         toCheck = "o";
//     }
//     if (theGrid[0][0] == toCheck && theGrid[0][1] == toCheck && theGrid[0][2] == toCheck) {
//         console.log("You won!");
//     }}

// let coffeeIsGrinding = false;
// const pressGrindBeans = () => {
// if (coffeeIsGrinding) {
// console.log("Stopping the grind");
// coffeeIsGrinding = false;
// } else {
// console.log("Grinding is about to begin");
// coffeeIsGrinding = true;
// }
// }
// pressGrindBeans();

// let balance = 1000
// let amount = 100
// let accnumber = 50449921;
// balance -= amount
// const cashWithdrawal = (amount, accnum) => {
// console.log(`Withdrawing ${amount} from account ${accnum}, your new balance is ${balance}`);
// }
// cashWithdrawal(amount, accnumber);

// const power = (num1, num2) => {
//     return num1 ** num2;}
//     console.log(power(2, 3));

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
//     ];
// console.log(coffeeOrder[2]);
// coffeeOrder[1] = "Ann - Vanilla latte";
// console.log(coffeeOrder.length);
// coffeeOrder.push("Donna - espresso");
// console.log(coffeeOrder)
// coffeeOrder.pop();
// console.log(coffeeOrder)

// let favSites = ["youtube", "twitter", "outlook"];
// console.log(favSites)
// favSites.push("amazon", "instagram");
// console.log(favSites);
// favSites.pop(); 
// console.log(favSites);

// let games = ["Dark Souls", "Bloodborne", "Demons Souls"]
// let first = games.shift()
// console.log(games)
// let newLength = games.unshift("Dark Souls")
// console.log(games)
// let removeItem = games.splice(1)
// console.log(games)

// const numbersOne = [1, 4, 9, 16];
// const map1 = numbersOne.map(x => x * 2);
// console.log(map1);

// const films = ["Spider-Man", "Venom", "Avengers", "Star Wars", "Jurrassic Park"]
// console.log(films.slice(2))
// console.log(films.slice(2, 4))
// console.log(films.slice(1, 5))
// console.log(films.slice(-2))
// console.log(films.slice(2, -1))

// const sandwichOrder = (top1, top2, top3, top4, top5)=>{
//     console.log(`We are preparing your sandwich order:
//     ${top1}, ${top2}, ${top3}, ${top4}, ${top5}`);
//     }
//     sandwichOrder("ham","cheese","turkey","bacon","tuna");

// let multiplesTwo = [];
// for (let i = 0; i < 20; i++) {
//     if(i%2==0){multiplesTwo.push(i)}
// }
// console.log(`Numbers divisable by 2 between 0 and 20 are ${multiplesTwo}.`)

// let favFilms = ["Spider-Man: No Way Home", "Avengers: Infinity War", "Star Wars Episode 5: The Empire Strikes Back", "Jurrassic Park", "Venom"]
// favFilms.push("Avengers Endgame", "Alien")
// for(let i =0; i <favFilms.length; i++){console.log(favFilms[i])}

// for(let i = 0; i < 6; i++){
//     console.log(Math.random() * 49 + 1);
//     }

// for(let i = 9; i > -1; i--){
//     console.log(i);
//     }

// let ghostFilms = ["Ghost in the Shell", "Ghost Rider", "Ghostbusters", "Ghost Ship"]
// for(let i=0; i<ghostFilms.length; i++){console.log(ghostFilms[i])}
// const filmCheck = () => {
//     if(ghostFilms[2] == "Ghostbusters"){
//     console.log("Yey it's Ghostbusters")
//     } else {
//         console.log("Boo, We want Ghostbusters")}}
// console.log(filmCheck())

// let randomNum1 = 0;
// const randNumChecker = () => {
//     for (i = 0; i < 6; i++) {
//         randomNum1 = Math.ceil(Math.random() * 30);
//         if(randomNum1 % 7 == 0){
//             console.log(`${randomNum1} is divisible by 7`);
//         } else {
//             console.log(`${randomNum1} is NOT divisible by 7`);}
//     }}
// randNumChecker(); 

// let drinksArray = ["coke", "pepsi max", "water", "irn bru"]
// let drinksCost = [1.5,1,0.80,1.1]
// let userBalance = 10;
// const checkDrinks = () => {
//     for(let i = 0; i < drinksArray.length; i++){console.log(drinksArray[i]);}
// }
// const checkBalance = () => {
//     console.log(`The available drinks are:`);
//     for(let i = 0; i<drinksArray.length; i++)
//     {console.log(`${drinksArray[i]}: £${drinksCost[i]}`)}
//     console.log(`Your available balance is : £${userBalance}`);
// }
// const checkSelection = (choice) => {
//     if(userBalance >= drinksCost[choice]){
//     console.log(`Enjoy your ${drinksArray[choice]}`)}
// }
// checkDrinks();
// checkBalance();
// checkSelection(0)
// checkSelection(1)
// checkSelection(2)
// checkSelection(3)

// const person = {
//     name: "Tom",
//     age: 29};
// console.log(person.name)

// let day = "Monday"
// let alarm = ""
// const alarmNeeded = {
//     weekEndAlarm: "No alarm needed",
//     weekDayAlarm: "Get up at 7am"
// }
// if (day == "Saturday" || day == "Sunday"){
//     alarm = alarmNeeded.weekEndAlarm
//     console.log(alarm)
// }else {alarm = alarmNeeded.weekDayAlarm
//     console.log(alarm)}

const pets = {
    name: "Bruce",
    typeOfPet: "Dog",
    age: 1,
    colour: "Black and white",
    eatOrDrink: function(){
        return this.name + " is eating/drinking"
    }
}
console.log(pets.eatOrDrink())