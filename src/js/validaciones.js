import {login} from "./modules/login.mjs";

const validaciones = {
    email: document.querySelector('.email'),
    password: document.querySelector('.password'),
    passwordRepetida: document.querySelector('.password2'),
    login: document.querySelector('.login'),
    signUp: document.querySelector('.registrar'),

    validar: function () {
        this.login.addEventListener('click', function (){
            const obtenerUsuario = login.validarTodo(this.email.value, this.password.value);
            if(obtenerUsuario[1]){
                document.cookie = `username=${obtenerUsuario[0]}; expires=Fri, 17 Dec 2021 12:00:00 UTC`;
                location.href = '../index.html';
                console.log('loggeado!');
            } else {
                console.error('Error!');
            }
        }.bind(this))
    },

    validarRegistro: function () {

        let changeVerde = false;
        this.password.addEventListener('change', function () {
            if(login.validarPassword(this.password.value)){
                //css verde correcto
                this.password.classList.add('campoCorrecto');
                changeVerde = true;
            } else {
                //css rojo otra vez
                this.password.classList.add('campoVacio');
                changeVerde = false;
            }
        }.bind(this));

        this.login.addEventListener('click', function () {
            if(login.validarTodo(this.email.value, changeVerde)){
                console.log("guay");
            } else {
                console.error('error!');
            }
        }.bind(this))
    }
}
validaciones.validar();
validaciones.validarRegistro();