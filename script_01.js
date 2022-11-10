"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 25;
const ageMark = 35;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

//***************IF**************/

// if (isJohnOlder)
// {
//     console.log("John ist älter.");
// }

/***********if - else******/

// if (isJohnOlder) {
//     console.log("John ist älter.");  // Ja-Zweig
// } else {
//     console.log("John ist jünger."); // Nein-Zweig
// }

/*********Ternäre Schreibweise*****/

//console.log( (isJohnOlder) ? "John ist älter" : "Mark ist älter");

/*********if - else if*********/

// if (isJohnOlder) {
//     console.log("John ist älter.");  // Ja-Zweig
// } else if (isJohnEqual) {
//     console.log("Beide sind gleich alt."); // Nein-Zweig
// } else console.log("John ist jünger");

/***********Fallunterscheidung / SWITCH - CASE*******/

// const firstName = "Jane";
// let job;

// job = "driver";
// job = "diver";
// // job = "artist";
// job = "pilot";
// // job = "teacher";
// // job = "instuctor";
// job = "nichts";

// switch (job) {
//     case "driver":
//         console.log(firstName + " fährt Taxi");
//         break;
//     case "diver":
//         console.log(firstName + " taucht im Rhein");
//         break;    
//     case "artist":
//         console.log(firstName + " ist Künstlerin");
//         break;
//     case "pilot":
//         console.log(firstName + " fliegt Flugzeuge");
//         break;
//     case "teacher":
//         console.log(firstName + " lehrt den Schülern");
//         break;
//     case "instructor":
//         console.log(firstName + " gibt Anweisungen");
//         break;
//     default:
//         console.log(firstName + " hat keinen Job")
//         break;
// }


/********  Fallunterscheidung / SWITCH|CASE 2 *******/



const cond = true;
const a = 2;



switch (cond) {
    case (a == 1):
        console.log("a ist gleich 1")
        break;
    case (a == 2):
        console.log("a ist gleich 2")
        break;
    default:
        console.log("a hat einen anderen Wert")
        break;
}


    


