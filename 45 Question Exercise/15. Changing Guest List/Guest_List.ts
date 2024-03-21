

let Guest_List :string[] = ['Sania','Sana','Sara','Shazia'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

}

let absent_Guest :string = 'Sania' ;

let new_Guest :string = 'Sofia' ;

Guest_List[0]= new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

}

console.log(`Miss. ${absent_Guest} is not coming to the party.`)