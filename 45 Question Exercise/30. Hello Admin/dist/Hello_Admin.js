"use strict";
// Hello Admin: Make a array of five or more usernames, including the nmae "admin".Imagine you are writing code that will print a greeting to each user after they log in to a website.Loop through the array , and print a greeting to each user:
// . If the user name is "admin" , print a special greeting, such as Hello admin, would u like to see a status report?
// . Otherwise, print a genetricgreeting, such as Hello Eric, thanlyou for ogging in again.
const userNames = ['admin', 'Bugs Bunny', 'Daffy Duck', 'Sylvester', 'Tweety'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again`);
    }
}
