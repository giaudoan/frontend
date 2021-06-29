obj1 = {
    'firstname' : 'nguyen',
    'lastname' : ' thi ha an',
    'gender' : 'nu',
    'age' : 14,
    'infor' : function(){
        console.log(`Ho va ten: ${this.firstname} ${this.lastname},
        gioi tinh: ${this.gender},
        tuoi: ${this.age}`);
    },

};
//template string
// tu khoa this

// function abc(param) {  }
// a = function () {  }
// a = function (a,b,c) {  }

// obj1.infor();
obj1.lastname = ' ngoc hai'
console.log(obj1.lastname);
context