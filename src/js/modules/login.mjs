import {usuarios} from "./usuarios.mjs";

export const login = {
    emailPattern: /^[A-Za-z]{1}[a-z]+@[a-z]{5,10}\.(com|net|gov)+$/,
    passwordPattern: /^[a-zA-Z]{1}[a-zA-Z0-9]{6,8}[0-9]{2}$/,
    validarTodo: function (email, password) {

        let validated = false;
        let user = "";

        if(this.validarEmail(email) && this.validarPassword(password)){
            usuarios.forEach(usuario => {
                if(usuario.email === email && usuario.password === password){
                    user = usuario.name;
                    validated = true;
                }
            })
        }
        return [user,validated];
    },
    validarPassword: function (password){
        return this.passwordPattern.test(password);
    },
    validarEmail: function (email){
        return this.emailPattern.test(email);
    }
}