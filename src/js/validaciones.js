import {login} from "./modules/loginSystem.mjs";
import {usuarios} from "./modules/usuarios.mjs";

const validaciones = {
    name : document.querySelector('.name'),
    email: document.querySelector('.email'),
    passwordLogIn: document.querySelector('.passwordLogIn'),
    password: document.querySelector('.password'),
    passwordRepetida: document.querySelector('.password2'),
    login: document.querySelector('.login'),
    signUp: document.querySelector('.signUp'),
    errorEmail: document.querySelector('.errorEmail'),
    errorPassword : document.querySelector('.errorPassword'),
    formSignUp : document.querySelector('#form-signUp'),

    validarLogIn: function (){
        this.login.addEventListener('click',function (){
            this.errorEmail.innerHTML = "";
            this.errorPassword.innerHTML = "";
            let passwordUser = true;
            let user = login.validarTodo(this.email.value,this.passwordLogIn.value);
            if (user[1]){

                document.cookie = `username=${user[0]};max-age=3600`; //la cookie durará 1h
                location.href = 'index.html';
                console.log('loggeado!');
            }
            else
            {
                if (!login.validarEmail(this.email.value)){
                    this.errorEmail.innerHTML += "Email incorrecto!";
                }

                usuarios.forEach(usuario => {
                    if (!login.passwordsIguales(this.passwordLogIn.value,usuario.password)){
                        passwordUser = false;
                    }
                })

                if (!passwordUser){
                    this.errorPassword.innerHTML += "Contraseña incorrecta!";
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

        this.email.addEventListener('focusin',function(){
            console.log("escribiendo email");
            this.email.style.background = "pink";
        }.bind(this));

        this.email.addEventListener('focusout',function(){
            if(login.validarEmail(this.email.value)) {
                if (!login.emailExiste(this.email.value)) {
                    this.email.style.background = "green";
                }
            }
        }.bind(this));

        this.password.addEventListener('focusin',function(){
            console.log("escribiendo email");
            this.password.style.background = "pink";
        }.bind(this));

        this.password.addEventListener('focusout',function(){
            if(login.validarPassword(this.password.value)){
                console.log("email validado");
                this.password.style.background = "green";
            }
        }.bind(this));

        this.passwordRepetida.addEventListener('focusin',function (){
            console.log("escribiendo email");
            this.passwordRepetida.style.background = "pink";
        }.bind(this));

        this.passwordRepetida.addEventListener('focusout', function(){
            if (login.passwordsIguales(this.password.value, this.passwordRepetida.value)) {
                this.passwordRepetida.style.background = "green";
            } else
            {
                this.passwordRepetida.style.background = "red";
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


