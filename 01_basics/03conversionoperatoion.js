let score = 33;
console.log(typeof 33);
 let value ="33";
 console.log(typeof value);
 let valuetype= Number(value);
 console.log(typeof valuetype);
 console.log(valuetype);

 let d= "33abc";
 let a=Number(d);
 console.log(typeof a);
 console.log(a);


 let e=null;
 let f=Number(e);
 console.log(typeof f);
 console.log(f);


 let z= undefined;
 let y=Number(z);
 console.log(typeof y);
 console.log(y);



 // true =1 , false=0
 // undefined=> NaN (not a number)
 // null => 0
 // "33abc"=> NaN
 //"33" => number
 //33=> number


 let isLoggedIn="";
 let yes=Boolean(isLoggedIn);
 console.log(typeof yes);
 console.log(yes);
  
 let w="hello";
 let x=Boolean(w);
 console.log(typeof x);
 console.log(x);



 //// ********************************operations **************************
 console.log(2**3);//// used to raise power
 console.log(2+3);
 console.log("2"+3);
 console.log(3+"2");
 console.log(1+ 1 +"2");
 console.log( "1"+ 2 + 3);



 console.log(true);
 console.log(+true);

 let game=100;
 game++;
 console.log(game);