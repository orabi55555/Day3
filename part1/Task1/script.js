var login=true
while(login){
var userName = prompt("please enter your username");
var passWord = prompt("please enter your password");
if(userName.toLowerCase()=="admin"&& passWord=="421$$"){
    login=false
    document.write("Welcome login success"); 
}
else if(userName.toLowerCase()!="admin"&& passWord!="421$$"){
    alert("sorry your username & password aren't correct");

 
}
else if(userName.toLocaleLowerCase()!="admin"){
    alert("sorry your username isn't correct");
}

else {
    alert("sorry your password isn't correct");
}
}