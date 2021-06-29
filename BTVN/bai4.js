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

