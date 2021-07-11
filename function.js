function sayHello () {
    console.log("Hello World");
  }
  sayHello()
// 
function myFunction(a1, a2) {
    return a1 + a2;
}
console.log(myFunction(2,3));
// 
var hello = {
    name: 'giau',
    sayHi: function () {
        console.log('Hi, my name is ', this.name);
    }
};
hello.sayHi()

