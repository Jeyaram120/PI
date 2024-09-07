function leap_year(){
    let year=Number(document.getElementById("LY").value);
    if(!year){
        alert("Please Enter The Year To Calculate Leap Year");
    }else if(year % 400===0 || (year % 100 !== 0 && year % 4 === 0)){
        document.getElementById("result").innerHTML=year+" is an Leap Year";
    }else{
        document.getElementById("result").innerHTML=year+" is not an Leap Year";
    }
};
