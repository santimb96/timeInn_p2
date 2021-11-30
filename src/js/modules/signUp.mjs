export const registrar = {

    validarAll: function (email, checkPassword) {
        const emailPattern = /^[A-Za-z]{1}[a-z]+@[a-z]{5,10}\.(com|net|gov)+$/;
        return emailPattern.test(email) && checkPassword;
    },

    validarPassword: function (password) {
        const passwordPattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{6,8}[0-9]{2}$/;
        return passwordPattern.test(password);
    }
}