/*
    Create `add` function and add it to window so that the following works:
    window.add(5,6) to equal 11
    window.add(5)(8) to equal 13
    window.add(5, 0) to equal 5
 */

 function add(a,b){
         var num = function (b){return a+b;};
         if(typeof b =='undefined'){
             return num;
         }else{
             return num(b);
         }
     }

 add(5,6);
 add(5)(8);
 add(5,0);




 //old code
 // var x = 5;

 // var add = function(x) {
 //   var x = 5;
 //     return function(y) { return x + y
 //     ;
 //   };

 // };
 // var counter = 5;
 // var six = 6;
 // var eight = 8;
 // var zero = 0;

 // function add() {
 // var counter = 5;
 // var six = 6;
 //     counter + six;
 //     return counter;
 // }

 // function add(x) {
 //     return function(y) {
 //         if (typeof y !== 'undefined') {
 //             x = x + y;
 //             return arguments.callee;
 //         } else {
 //             return x;
 //         }
 //     };
 // }
 // add(1)(2)(3)();
 // add(1)(1)(1)(1)(1)(1)();
