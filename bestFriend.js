const friends = ['lima', 'riche', 'surove', 'taniya', 'mim'];
function bestFriend(friends){
    let best_friend = friends[0];
    for(let i=0; i<friends.length; i++){
        if(best_friend.length <= friends[i].length){
            best_friend = friends[i];
        }
    }
    console.log(best_friend);
}

bestFriend(friends);