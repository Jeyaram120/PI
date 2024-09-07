function add(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a+b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="Sum of "+a+" and "+b+" is "+c;
}
function sub(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a-b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="Subtraction of "+a+" and "+b+" is "+c;
}
function mul(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a*b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="Multiplication of "+a+" and "+b+" is "+c;
}
function div(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a/b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="Division of "+a+" and "+b+" is "+c;
}
function exp(){
    let a=Number(document.getElementById("value1").value);
    let b=Number(document.getElementById("value2").value);
    let c=a**b;
    console.log("Result:",c);
    document.getElementById("Result").innerHTML="Exponent of "+a+" and "+b+" is "+c;
}
