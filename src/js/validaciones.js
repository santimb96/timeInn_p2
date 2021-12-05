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
    /*DOM FOR LOGIN ERRORS*/
    errorEmail: document.querySelector('.error-email'),
    errorPassword : document.querySelector('.error-password'),

    /*DOM FOR SIGN UP ERRORS*/
    formSignUp : document.querySelector('#form-signUp'),
    errorName : document.querySelector('.error-name'),
    errorEmailSignUp: document.querySelector('.error-email-signUp'),
    errorPasswordSignUp : document.querySelector('.error-password-signUp'),
    errorPassword2 : document.querySelector('.error-password2'),

    validarLogIn: function (){
        this.login.addEventListener('click',function (){
            this.errorEmail.innerHTML = "";
            this.errorPassword.innerHTML = "";
            let passwordUser = true;
            let emailUser = true;
            let user = login.validarTodo(this.email.value,this.passwordLogIn.value);
            if (user[1]){

                document.cookie = `username=${user[0]};max-age=3600`; //la cookie durará 1h
                location.href = 'index.html';
                console.log('loggeado!');
            }
            else
            {
                usuarios.forEach(usuario => {
                    if (!login.passwordsIguales(this.passwordLogIn.value,usuario.password)){
                        passwordUser = false;
                    }

                    if (!login.emailExiste(this.email)){
                        emailUser = false;
                    }
                })

                if (!emailUser){
                    this.errorEmail.style.display = "block";
                    this.errorEmail.innerHTML += "Esta cuenta no existe. Regístrate!";
                }



                if (!passwordUser){
                    this.errorPassword.style.display = "block";
                    this.errorPassword.innerHTML += "Contraseña incorrecta!";
                }

            }
        }.bind(this));
    },
    focusLogIn : function (){
        this.email.addEventListener('focusin',function(){
            this.errorEmail.style.display = "none";
        }.bind(this));

        this.passwordLogIn.addEventListener('focusin',function(){
            this.errorPassword.style.display = "none";
        }.bind(this));

    },
    registrar: function (){
        this.signUp.addEventListener('click',function (event){
            event.preventDefault();
            if (login.register(this.name.value,this.email.value,this.password.value,this.passwordRepetida.value)){
                document.cookie = `username=${this.email.value};max-age=3600`;
                location.href = 'index.html';
            }
            else
            {
                console.log('ERROR en el registrado');
            }
        }.bind(this));
    },
    validarRegistro: function () {

        this.name.addEventListener('focusin',function(){
            this.name.style.background = "#F2ECC6";
        }.bind(this));

        this.name.addEventListener('focusout',function(){
            if (login.validarName(this.name.value)){
                this.name.style.background = "#98fb98";
            }
            else{
                this.name.style.background = "#ffb6c1";
            }
        }.bind(this));

        this.email.addEventListener('focusin',function(){
            this.errorEmailSignUp.style.display = "none";
            this.email.style.background = "#F2ECC6";
        }.bind(this));

        this.email.addEventListener('focusout',function(){
            if(login.validarEmail(this.email.value)) {
                if (!login.emailExiste(this.email.value)) {
                    this.email.style.background = "#98fb98";
                }
                else{
                    this.errorEmailSignUp.style.display = "block";
                    this.errorEmailSignUp.innerHTML = "";
                    this.errorEmailSignUp.innerHTML += "Este correo ya esta registrado.";
                    this.email.style.background = "#ffb6c1";
                }
            }
            else{
                this.errorEmailSignUp.style.display = "block";
                this.errorEmailSignUp.innerHTML = "";
                this.errorEmailSignUp.innerHTML += "[A-Za-z]{1}[a-z]+@[a-z]{5,10}.(com|net|gov)";
                this.email.style.background = "#ffb6c1";
            }
        }.bind(this));

        this.password.addEventListener('focusin',function(){
            this.errorPasswordSignUp.style.display = "none";
            this.password.style.background = "#F2ECC6";
        }.bind(this));

        this.password.addEventListener('focusout',function(){
            if(login.validarPassword(this.password.value)){
                this.password.style.background = "#98fb98";
            }
            else {
                this.errorPasswordSignUp.style.display = "block";
                this.errorPasswordSignUp.innerHTML = "";
                this.errorPasswordSignUp.innerHTML += "[a-zA-Z]{1}[a-zA-Z0-9]{6,8}[0-9]{2}";
                this.password.style.background = "#ffb6c1";
            }
        }.bind(this));

        this.passwordRepetida.addEventListener('focusin',function (){
            this.errorPassword2.style.display = "none";
            this.passwordRepetida.style.background = "#F2ECC6";
        }.bind(this));

        this.passwordRepetida.addEventListener('focusout', function(){
            if (login.passwordsIguales(this.password.value, this.passwordRepetida.value)) {
                this.passwordRepetida.style.background = "#98fb98";
            } else
            {
                this.errorPassword2.style.display = "block";
                this.errorPassword2.innerHTML = "";
                this.errorPassword2.innerHTML += "Contraseña no coincide con la anterior."
                this.passwordRepetida.style.background = "#ffb6c1";
            }
        }.bind(this));
    }

}

if (location.pathname === '/timeInn_p2/src/logIn.html'){
    validaciones.validarLogIn();
    validaciones.focusLogIn();
}
else if (location.pathname === '/timeInn_p2/src/signUp.html'){
    validaciones.registrar();

}
validaciones.validarRegistro();


