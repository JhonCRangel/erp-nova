console.log("ERP Nova - Javascript Cargado");

const loginForm = document.getElementById("login-form");
const username  = document.getElementById("username");
const password  = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const loginMessage = document.getElementById("login-message");


function validateUsername(){
    
    const usernameValue = username.value.trim();
    
    if(usernameValue === ""){
        usernameError.textContent = "El usuario es Obligatorio";
        username.classList.add("error");
        return false;
    } 
    usernameError.textContent = "";
    username.classList.remove("error");
    return true;
}

function validatePassword(){
    
    const passwordValue = password.value.trim();

    if(passwordValue === ""){
        passwordError.textContent = "La contraseña es Obligatoria";
        password.classList.add("error");
        return false;
    }
    passwordError.textContent = "";
    password.classList.remove("error");
    return true;
        
}

loginForm.addEventListener("submit",function(event){
    event.preventDefault();

    loginMessage.textContent="";
    loginMessage.classList.remove("success");
   
    const   usernameValid = validateUsername();
    const   passwordValid = validatePassword();

    if(usernameValid && passwordValid){
        loginMessage.classList.add("success");
        loginMessage.textContent="Datos Validos. Procesando Inicio de Sesion...";
    }
});





