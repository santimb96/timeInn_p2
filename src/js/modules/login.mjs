import {usuarios} from "./usuarios.mjs";

export const login = {

    validarTodo: function (email, password) {
        const emailPattern = /^[A-Za-z]{1}[a-z]+@[a-z]{5,10}\.(com|net|gov)+$/;
        const passwordPattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{6,8}[0-9]{2}$/;
        let validated = false;
        let user = "";

        if(emailPattern.test(email) && passwordPattern.test(password)){
            usuarios.forEach(usuario => {
                if(usuario.email === email && usuario.password === password){
                    user = usuario.name;
                    validated = true;
                }
            })
        }
        return [user,validated];
    },
}