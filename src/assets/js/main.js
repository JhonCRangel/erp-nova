console.log("ERP Nova - Javascript Cargado");

const loginForm = document.getElementById("login-form");
const username  = document.getElementById("username");
const password  = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const loginMessage = document.getElementById("login-message");


function validateField(input,errorElement){
    
    const value = input.value.trim();
    
    if(value === ""){
        input.classList.add("error");
        errorElement.textContent="Este campo es Obligatorio";
        return false;
    } 
    input.classList.remove("error");
        errorElement.textContent="";
    return true;
}

/* function validatePassword(){
    
    const passwordValue = password.value.trim();

    if(passwordValue === ""){
        passwordError.textContent = "La contraseña es Obligatoria";
        password.classList.add("error");
        return false;
    }
    passwordError.textContent = "";
    password.classList.remove("error");
    return true;
        
} */

loginForm.addEventListener("submit",function(event){
    event.preventDefault();

    loginMessage.textContent="";
    loginMessage.classList.remove("success");
   
    const   usernameValid = validateField(username,usernameError);
    const   passwordValid = validateField(password,passwordError);

    if(usernameValid && passwordValid){
        loginMessage.classList.add("success");
        loginMessage.textContent="Datos Validos. Procesando Inicio de Sesion...";
    }
});





