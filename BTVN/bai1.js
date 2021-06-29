const listNameFriend = ['lulu', 'an','giau','nghia'];
var nameList =[];
// a.
function findName(list){
    for(let i of list){
        if(i.charAt(0)==='G' || i.charAt(0)==='g' || i.charAt(0)==='A'|| i.charAt(0)==='a') {
            console.log(i);
        }
    }
}
findName(listNameFriend);
// b.

function addName(list){
    for(let i of list){
        if(i.charAt(0)==='G' || i.charAt(0)==='g' || i.charAt(0)==='A'|| i.charAt(0)==='a') {
            nameList.push(i);
        }
    }
}
addName(listNameFriend);
console.log(nameList);

