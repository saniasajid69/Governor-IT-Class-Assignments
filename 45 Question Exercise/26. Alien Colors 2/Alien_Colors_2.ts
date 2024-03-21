import { Console } from "console";
import { config } from "process";


// Alien Colors #2: choose a color for an alien as you did in Exercise 25
let alienColors: string = "green";

// write an if-else chain.
// print a statement that the player just earned 5 points for shooting the alien.
// print a statement that the player just earned 5 points for shooting the alien.
if(alienColors === "green"){
    console.log("player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.")
}







// .If the alien's colorisn't green, print a statement that the player just earned 10 points.
alienColors = "yellow"

if(alienColors === "green"){
    console.log("player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.")
}
// . Write one version of this program that runs the if block and another that runs the else block.