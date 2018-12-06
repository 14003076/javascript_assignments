var person ={fname:"Amitabh",             //this is first object creation
             lname:"Bachan", 
             age : 22,
             skills:["c","java",".net"],
             address:{doorno:5-77,city:"vijayawada",pincode:521151 },
             DateOfBirth:Date('18-08-1996'),
             married:false,
             profession:"Actor" 
            }
var person2 = {fname:"Shabzan",           //this is second object creation
               lname:"Shaik",
               age: 22,
               skills:["micro services","jsp"],
               address:{doorno:3-67,city:"Guntur",pincode:521101},
               DateOfBirth:Date('19-09-1995'),
               married:true,
               profession:"Software Engineer"
             },
   print = function(duplicate){                
       console.log(duplicate);             //printing the objects
   }
   print(person);
   print(person2);                      //calling the function
