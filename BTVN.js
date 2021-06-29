// chủ đề 1
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

/*
// Chủ đề 2:
var numbers = [2,1,3,4];
// a.
var min = numbers.reduce(function(x,y){
    return(x < y) ? x :y;
    
});
console.log(min)
// b.
var largest = numbers.reduce(function(x,y){
    return(x > y) ? x :y;

});
console.log(largest)
// c
numbers.sort();
numbers.sort(function(a,b){return b-a})
console.log(numbers)
// d.
var tong = 0;
for (i=0; i< numbers.length; i++){
    tong += numbers[i]
}
console.log(tong)


// Chủ đề 3:
const user={};
user.name = 'giau';
user.surname ='thi';
user.name = 'nghia'
delete user.name
console.log(user.surname +' '+ user.name);



// Chủ đề 4
const savingMoney = {
    'giau': 2000,
    'lu':2000,
    'joo': 5500,
    'teo': 2200,
}
// a.
console.log(Object.values(savingMoney).length===0);
// b.
function sum( obj ) {
    var tong = 0;
    for( var i in obj ) {
      if( obj.hasOwnProperty( i ) ) {
        tong += parseFloat( obj[i] );
      }
    }
    return tong;
  }
  var tongtien = sum( savingMoney );
  console.log( "Tong tien tiet kiem:  "+tongtien );



// Chủ đề 5:
const user ={
    'ho': 'doan',
    'ten': 'giau',
    'tuoi': 21,
    'gioitinh': 'nu',
    'ngaysinh': '24-11-2000',
    'nguoiyeu': false,
}
var now='24-11-2000'
function birthday( date, obj){
    
    
    if (date === user.ngaysinh){
        console.log('Happybirthday')
    }
    else{
        console.log('Toi cho sinh nhat ban')
    }
    let loichuc=(user.nguoiyeu)? 'Chuc ban hanh phuc' : 'toi yeu ban';
    console.log(loichuc);

}
birthday(now, user);

*/

// Chủ đề 6:
/*const user1 = {
    'name' : ' giau',
    'gender' : 'nu',
    'age' : 21,
    'maritalStatus' : 'single',
    
};
const user2 = {
    'name' : ' nghia',
    'gender' : 'nu',
    'age' : 21,
    'maritalStatus' : 'single',
    
};
    console.log(user1===user2);

user1.infor = function(){
    console.log(`Ten: ${this.name} 
    Gioi tinh: ${this.gender}
    Tuoi: ${this.age}
    Tinh trang hon nhan: ${this.maritalStatus}`);

}
user2.infor = function(){
    console.log('Ten: '+user2.name +  '\nGioi tinh: ' + user2.gender + '\nTuoi: '+user2.age + '\nTinh trang hon nhan: ' + user2.maritalStatus);

}
user1.infor()
user2.infor()*/

