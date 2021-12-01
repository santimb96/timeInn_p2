import {usuarios} from "./usuarios.mjs";

export const login = {

    validarTodo: function (email, password) {
        const emailPattern = /^[A-Za-z]{1}[a-z]+@[a-z]{5,10}\.(com|net|gov)+$/;
        const passwordPattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{6,8}[0-9]{2}$/;
        let validated = false;
        let user = "";


        if(emailPattern.test(email) && passwordPattern.test(password)){
            console.log("patterned!");
            usuarios.forEach(usuario => {
                if(usuario[0] === email && usuario[2] === password){
                    console.log("guay!");
                    return [usuario.name,true];
                }
            })
        }
        else{
            return false;
        }
    },
}