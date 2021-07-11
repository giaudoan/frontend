
// try{
//     var a= ["34","32","5","31","24","44","67"]; //a is an array
//     console.log(a);    // displays elements of a
//     console.log(b); //b is undefined but still trying to fetch its value. Thus catch block will be invoked
// }catch(e){
//     console.log("There is error which shows "+e.message); //Handling error
// }

 
    try{  
        var a=2;  
        if(a==2)  
        console.log("ok");  
    } catch(Error){  
        console.log("Error found"+e.message);  
    }  finally{  
        console.log("Value of a is 2 ");  
    }  
// 