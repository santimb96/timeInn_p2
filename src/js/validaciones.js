import {login} from "./modules/loginSystem.mjs";
import {usuarios} from "./modules/usuarios.mjs";

const validaciones = {
    name : document.querySelector('.name'),
    email: document.querySelector('.email'),
    password: document.querySelector('.password'),
    passwordRepetida: document.querySelector('.password2'),
    login: document.querySelector('.login'),
    signUp: document.querySelector('.signUp'),
    errorEmail: document.querySelector('.errorEmail'),
    errorPassword : document.querySelector('.errorPassword'),

    validarLogIn: function (){
        this.login.addEventListener('click',function (){
            let user = login.validarTodo(this.email.value,this.password.value);
            if (user[1]){
                document.cookie = `username=${user[0]};max-age=3600`; //la cookie durará 1h
                location.href = 'index.html';
                console.log('loggeado!');
            }
            else
            {
                if (!login.validarEmail(this.email.value)){
                    this.errorEmail.innerHTML = "";
                    this.errorEmail.innerHTML = "Email incorrecto!";
                }

                if (!login.validarPassword(this.password.value)){
                    this.errorPassword.innerHTML = "";
                    this.errorPassword.innerHTML = "Contraseña incorrecta!";
                }

            }
        }.bind(this));
    },
    registrar: function (){
        this.signUp.addEventListener('click',function (event){
            event.preventDefault();
            if (login.register(this.name.value,this.email.value,this.password.value,this.passwordRepetida.value)){
                document.cookie = `username=${this.email.value};max-age=3600`;
                location.href = 'index.html';
                console.log('registrado!');
            }
            else
            {
                    console.log('ERROR en el registrado');
            }
        }.bind(this));
    },
    validarRegistro: function () {
        this.password.addEventListener('change', function () {
            if(login.validarPassword(this.password.value)) {
                this.password.classList.add('campoCorrecto');
            }
             else {
                this.password.classList.add('campoVacio');
            }
        }.bind(this));

        this.passwordRepetida.addEventListener('change',function (){
            if (login.passwordsIguales(this.password.value, this.passwordRepetida.value)) {
                this.passwordRepetida.classList.add('campoCorrecto');
            } else
            {
                this.passwordRepetida.classList.add('campoVacio');
            }
        }.bind(this));
    }

}

if (location.pathname === '/timeInn_p2/src/logIn.html'){
    validaciones.validarLogIn();
}
else if (location.pathname === '/timeInn_p2/src/signUp.html'){
    validaciones.registrar();
    console.log(usuarios);

}
validaciones.validarRegistro();


