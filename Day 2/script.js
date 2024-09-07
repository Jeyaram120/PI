
function sign_up(){
    let pass=document.getElementById("pass").value;
    let conpass=document.getElementById("conpass").value;
    if(pass.trim() === "" && conpass.trim() === ""){
        alert("Please Enter The Password or Confirm Password");
    }else if(pass!=conpass){
        alert("Password and Confirm Password are mismatched");   
        console.log("Password and Confirm Password are mismatched");
    }else{
        alert("Welcom Password and Confirm Password are matched");
        location.replace("./Leap Year/leapyear.html");
    }
};

function log_in(){
    let passkey=document.getElementById("passkey").value;
    let user_name=document.getElementById("user_name").value;
    if("admin"!=passkey && "admin"!=user_name){
        alert("Password or Username are mismatched");   
        console.log("Password or Username are mismatched");
    }else{
        location.replace("./Leap Year/leapyear.html");
        alert("Log in successful Welcome to Our Organization");
    }  
};

// function forceDesktopView() {
//     // Check if the viewport meta tag already exists
//     let viewportMetaTag = document.querySelector('meta[name="viewport"]');
//     if (!viewportMetaTag) {
//         // If not, create one
//         viewportMetaTag = document.createElement('meta');
//         viewportMetaTag.name = "viewport";
//         document.head.appendChild(viewportMetaTag);
//     }
//     // Set the content to display the page in desktop mode
//     viewportMetaTag.content = "width=1024";
// }

// // Call the function to force desktop view
// forceDesktopView();