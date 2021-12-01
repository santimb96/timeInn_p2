import {login} from "./modules/login.mjs";

const validaciones = {
    email: document.querySelector('.email'),
    password: document.querySelector('.password'),
    passwordRepetida: document.querySelector('.password2'),
    login: document.querySelector('.login'),
    signUp: document.querySelector('.registrar'),

    validar: function (){
        this.login.addEventListener('click',function (){
            if (login.validarTodo(this.email.value,this.password.value)){
                console.log("logged");
            }
            else
            {
                console.log("not logged");
            }
        }.bind(this));
    }
}

validaciones.validar();
