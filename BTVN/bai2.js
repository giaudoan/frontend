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
