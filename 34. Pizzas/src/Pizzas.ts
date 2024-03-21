// Pizzas: Think of at least three kinds of your favourite pizza.Store these pizza names in a array,and then use a for loop to print the name of each pizza.
//.Modify your for loop to print a sentence using the name of each pizza.For each pizza you shoud have one line of output containing a simple statement like I like pepperoni pizza.

//.Add a line at the end of your program,outside the for loop , that states how much yu like pizza.The output should consists of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza

let Pizzas: string[] = ['Pepperoni','Cuban','BBQ Chicken'];

for(let Pizza of Pizzas){
    console.log(`I like ${Pizza} pizza.`);
}

console.log(`I really love pizza!`);