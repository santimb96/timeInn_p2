import {login} from "./modules/login.mjs";

const validaciones = {
    email: document.querySelector('.email'),
    password: document.querySelector('.password'),
    passwordRepetida: document.querySelector('.password2'),
    login: document.querySelector('.login'),
    signUp: document.querySelector('.registrar'),

    validar: function (){
        this.login.addEventListener('click',function (){
            let user = login.validarTodo(this.email.value,this.password.value)
            if (user[1]){
                document.cookie = `username=${user[0]}; expires=Fri, 17 Dec 2021 12:00:00 UTC`;
                location.href = 'index.html';
                console.log('loggeado!');
            }
            else
            {
                console.log("not logged");
            }
        }.bind(this));
    },
    validarRegistro: function () {
        let changeVerde = false;
        this.password.addEventListener('change', function () {
            if(login.validarPassword(this.password.value)){
                this.password.classList.add('campoCorrecto');
                changeVerde = true;
            } else {
                this.password.classList.add('campoVacio');
                changeVerde = false;
            }
        }.bind(this));
    }
}

validaciones.validar();
validaciones.validarRegistro();


