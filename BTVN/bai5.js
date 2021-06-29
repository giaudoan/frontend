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