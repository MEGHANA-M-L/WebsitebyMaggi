function validateForm(){
    var name=document.forms["myForm"]["name"].value;
    var email=document.forms["myForm"]["email"].value;

    if(name==""||email==""){
        alert("Please fill out all the fields");
        return false;
    }

}
