function fun()

	{

	var num=prompt("Select your type:\n1.Addittion\n2.Subtraction\n3.Multiply\n4.Division\n5.Exponent\n6.Mean\n7.Exit");

	if(num<=7)

	{

    if(num==1)

    {

        var a=prompt("Enter value of A:");

        var b=prompt("Enter value of B");

        var c=parseInt(a)+parseInt(b);

        document.getElementById("one").innerHTML=c;

    }

    if(num==2)

    {

        var a=prompt("Enter value of A:");

        var b=prompt("Enter value of B");

        var c=parseInt(a)-parseInt(b);

        document.getElementById("one").innerHTML=c;

    }

    if(num==3)

    {

        var a=prompt("Enter value of A:");

        var b=prompt("Enter value of B");

        var c=parseInt(a)*parseInt(b);

        document.getElementById("one").innerHTML=c;

    }

    if(num==4)

    {

        var a=prompt("Enter value of A:");

        var b=prompt("Enter value of B");

        var c=parseInt(a)/parseInt(b);

        document.getElementById("one").innerHTML=c;

    }

    if(num==5)

    {

        var a=prompt("Enter value of A:");

        var b=prompt("Enter value of B");

        var c=Math.pow(a,b);

        document.getElementById("one").innerHTML=c;

    }

    if(num==6)

    {

        var sum=0;

        var count=0;

        var num=prompt("enter the value");

        while(num!="***")

        {

            count++;

            sum=sum+parseInt(num);

            num=prompt("enter the value");

        }

            document.getElementById("one").innerHTML=sum/count;

    }

    if(num==7)

 	   {

    

 	   }

 

	}

	else

	alert("ERROR------>Enter corrcect value");

	}