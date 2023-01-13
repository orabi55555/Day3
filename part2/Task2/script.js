var contacts = [
    {
        name:"sara",
        phone:"012"
    }
]


function addNewContact(){
    var newContact = {};
    newContact.name = prompt("enter contact name");
    newContact.phone = prompt("enter contact phone");
    contacts.push(newContact);
}

function searchForContact(){
    var searchword = prompt("enter name or phone")
    
    for(var i =0;i<contacts.length;i++){
        var ok = true;
        var currentContact = contacts[i];
        if(searchword == currentContact.name || searchword == currentContact.phone){
            alert("name = "+currentContact.name +"\nphone = "+currentContact.phone);
            ok = false;
            break;
        }
        else if(ok=true && i==contacts.length){
            alert("this contact not found")
        }

    }
    
}



    var run =true
    while(run){
       
        var op = prompt("what do you want (add or search)");
        switch(op){
            case "add":
                addNewContact();
            break;
            case "search":
                searchForContact();
            break;
        }
        var con=confirm("do you want to continue?")
        if(!con){run=false}
    }

