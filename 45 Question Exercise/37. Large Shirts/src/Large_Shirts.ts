// Large shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love Typescript.

//Make a large shirt and a medium shirt with the default meswsage , and a shirt f any size with a different message.

function make_shirt(size:string = 'Large', text:string ='I love Typescript.'){

    console.log(`Creating a ${size} shirt with the message: ${text}`);
}

make_shirt();

make_shirt('Medium');

make_shirt('small','I love Python');