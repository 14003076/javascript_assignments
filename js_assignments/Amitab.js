var Amitabh = new Object();                       //this is first object creation
             Amitabh.fname="Amitabh";
             Amitabh.lname="Bachan";
             Amitabh.age =62;
             Amitabh.skills=["c","java",".net"];
             Amitabh.address={doorno:5-77,city:"vijayawada",pincode:521151 };
             Amitabh.DateOfBirth=Date('18-08-1996');
             Amitabh.married=false;
             Amitabh.profession="Actor"; 
var Abhishek = Object.create(Amitabh);                   //this is second  object overrides the first
              Abhishek.fname="Abhishek";
              Abhishek.age= 22;
              Abhishek.skills=["micro services","jsp"];
              Abhishek.DateOfBirth=Date('19-09-1995');
                             
   print = function(duplicate){                       //function creation
       console.log(duplicate);                  //printing the objects
   }
   print(Abhishek);                      //calling function