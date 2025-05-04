'use strict';

function main(){
    let refform = document.getElementById("register-form");
    refform.onsubmit = validate;

}

function validate(event){
    let refform =  document.getElementById("register-form");
    let formData = new FormData(refform);

    let errors = [];


    if (formData.get("password") !== formData.get("password2")){
        errors.push("Passwords doesn't match");
        return false;
    }
    
    if (errors.length>0){
        event.preventDefault();
        messageRenderer.showErrorMessage(errors.join("<br>"));
    }

}

document.addEventListener("DOMContentLoaded", main);