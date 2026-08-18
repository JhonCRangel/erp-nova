console.log("ERP Nova - Javascript Cargado");

const loginForm = document.getElementById("login-form");
const username  = document.getElementById("username");
const password  = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const loginMessage = document.getElementById("login-message");


loginForm.addEventListener("submit",function(event){
    event.preventDefault();

    let isValid = true;

    loginMessage.classList.remove("success");
    loginMessage.textContent="";


    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === ""){
        usernameError.textContent = "El usuario es Obligatorio";
        username.classList.add("error");
        isValid = false;
    } 
    else{
        usernameError.textContent = "";
        username.classList.remove("error");
        }

    if(passwordValue === ""){
        passwordError.textContent = "La contraseña es Obligatoria";
        password.classList.add("error");
        isValid = false;
    }
    else{
        passwordError.textContent = "";
        password.classList.remove("error");
    }

    if(isValid){
        loginMessage.classList.add("success");
        loginMessage.textContent="Datos Validos. Procesando Inicio de Sesion...";
    }
});


