// var cal = function () {
//     var parentVal = document.getElementById("parent").Value;
//     var requireVal = document.getElementById("required").Value;
//     var result = document.getElementById("result")
//     result.innerHTML = requireVal / parentVal;
// }
// var btn = document.getElementById("button");
// btn.addEventListener("click", cal);

     // scope and hoisting
        // scope determines where i have acsses to variables (var) like gloabal or local scopes
        //  var num1 = 4;
        //  var num2 = 2;
        //  var num3 = 3;
          //this is a glabal function now
          // here the function Eq does not declares the arguments
       // function Eq()
       // if the varbles are moved inside the function body like this 
       // it makes the scope local so the numbers are now only avable from within the function
       // an ouside console.log wont find them
       // {  
          //var num1 = 4;
          //var num2 = 2;
          //var num3 = 3;
          //document.getElementById('Math').innerHTML='The numbers =     ' +  num1 * num2 * num3;
       // }
       // Eq(2,10,2)
       // "Hoisted" means stored in memmory
       // var x = 10; this is an initialisation (var x is given a value of 10 this value is not stored ) 
       //  var y; this is a declaration (var "y" is gets stored on the memmory) 
       // the diffrance between them is the decaration is stored on the memmory but the initialised number does not store 
       // the var should aways be declared on the top because of how the code is read from top to buttom
       // they cant be read if they dont exist in earlier code such as putting them on the button but trying to read their vavlues wont work
        