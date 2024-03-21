// Ordinal Numbers: Ordinal numbers indicates their position in a array, such as 1st,2nd.Most ordinal numbers end in the,except1 ,2, and 3.
//.Store the number 1 through 9 in array.

//.Loop through the array.

//.Use an if-else chain inside the loop to print the proper ordinal ending for each number.Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each resulr should be on a separate line.

let numbers: number[] = [1,2,3,4,5,6,7,8,9];

for
(let num of numbers){

    let ordinalEnding:string;

    if(num === 1){
        ordinalEnding = "st";
    }
    else if(num === 2){
        ordinalEnding = "nd";
    }
    else if(num === 3){
        ordinalEnding = "rd";
    }
    else{
        ordinalEnding = "th";
    }
    console.log(`${num}${ordinalEnding}`);
}