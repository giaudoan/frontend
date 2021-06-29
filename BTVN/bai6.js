const user1 = {
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
user2.infor()
