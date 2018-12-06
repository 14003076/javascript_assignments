function myfunction(){
    var x=document.getElementById("demo1").value;
    if(x.length<1)
    {
        window.alert("invalid input");
        return false;
    }
    if(isNaN(x))
    {
        window.alert("please enter numeric values");
        return false; 
    }
    var z=(x-32)*(5/9);
    document.getElementById("demo2").value = z;
}