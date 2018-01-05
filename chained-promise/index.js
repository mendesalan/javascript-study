let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('Cleaned the room');
    });
};

let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        resolve( message + 'Remove Garbage' );
    });
};

let winIceCream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve( message + 'Won an Ice Cream' );
    });
};


// cleanRoom().then(function(result) {

//     return removeGarbage(result);

// }).then(function(result){

//     return winIceCream(result);

// }).then(function(result) {

//     console.log('finished!!!' + result );

// });

Promise.all([ cleanRoom(), removeGarbage(), winIceCream ]).then(function(){ 
    console.log('all finished')
});