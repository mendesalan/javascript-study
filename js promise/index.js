let cleanRoom = new Promise(function(resolve, reject) {

    let isClean = false;
    // let isClean = true;

    if (isClean) {
        resolve('Clean');
    }
    else {
        reject('Not Clean');    
    }
    
});

cleanRoom.then(function(fromResolve) {

    console.log('the room is: ' +  fromResolve );

}).catch(function(fromReject) {

    console.log('the room is: ' +  fromReject );

});