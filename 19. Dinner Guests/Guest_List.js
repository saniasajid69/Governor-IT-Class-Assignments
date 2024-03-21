"use strict";
let Guest_List = ['Sania', 'Sana', 'Sara', 'Shazia'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }
let absent_Guest = 'Sania';
let new_Guest = 'Sofia';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }
// console.log(`Miss. ${absent_Guest} is not coming to the party.`)
// console.log('Good News! We find Big Table So we are inviting 3 more guests.')
// array me 3 guest add kiye ha.
Guest_List.unshift('Amna');
Guest_List.splice(2, 0, 'Marium');
Guest_List.push('Zainab');
// Yahan per maine 6 array ke guest koprint karwaya ha.
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }
// Sorry Message to guest for not inviting.
// console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.')
// Yahan par Guest remove kiye ha
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Miss. ${remove_Guest}, You are not invited for Dinner.`);
}
// Hamare bache howe 2 Invited Guest.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Miss. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!')
// }
// Mene sare guest array se remove kae diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
// Exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are: ${Guest_List.length}`);
