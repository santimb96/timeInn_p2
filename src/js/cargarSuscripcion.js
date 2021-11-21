const suscripcion = {

    sub: document.querySelector('.suscripcion'),
    elementosOscurecer: ['.header', '.video', '.novedades','.promociones','.calendario','.footer'],

    render: function () {

        return `
            <div class="form-sub">
            <div class="cerrar-boton">
                <button class="boton-cerrar"> X</button>
            </div>
            <form name="form" id="form">
                Suscripción <input id="email" type="text" name="suscripcion" placeholder="E-mail">
                <button id="submit" name="submit" value="Enviar">Enviar</button>
            </form>
            </div>`;
    },
    cargaForm: function () {
        setTimeout(() => {
            console.log(document.cookie);
            this.checkCookie();
        }, 5000);
    },

    cerrarSuscripcion: function () {
        document.querySelector('.boton-cerrar').onclick = function () {
            this.sub.classList.remove('suscripcion-mostrar');
            this.elementosOscurecer.forEach(elemento => {
                document.querySelector(elemento).classList.remove('opacidad-fondo');
            });
        }.bind(this);
    },

    enviarSuscripcion: function () {
        document.getElementById('submit').addEventListener('click', function () {
            event.preventDefault();
            let cookieValue = document.getElementById('email').value;
            this.setCookie(cookieValue);
            this.elementosOscurecer.forEach(elemento => {
                document.querySelector(elemento).classList.remove('opacidad-fondo');
                this.sub.classList.remove('suscripcion-mostrar');
            });
        }.bind(this));

    },
    setCookie : function (cookieValue){
        const d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = "email" + "=" + cookieValue + ";" + expires + ";path=/";},

    getCookie : function (){
        let name = "email" + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let documentCookie = decodedCookie.split(';');
        for(let i = 0; i < documentCookie.length; i++) {
            let fieldValue = documentCookie[i];
            while (fieldValue.charAt(0) == ' ') {
                fieldValue = fieldValue.substring(1);
            }
            if (fieldValue.indexOf(name) == 0) {
                return fieldValue.substring(name.length, fieldValue.length);
            }
        }
        return "";
    },
    checkCookie : function (){
        let user = this.getCookie();
        if (user != "") {
            alert("Bienvenido de nuevo: " + user);
        } else {
            this.cargaForm();
            if (user != "" && user != null) {
                this.setCookie(user);
                this.elementosOscurecer.forEach(elemento => {
                    document.querySelector(elemento).classList.add('opacidad-fondo');
                });
                this.sub.innerHTML = this.render();
                this.sub.classList.add('suscripcion-mostrar');
                this.cerrarSuscripcion();
                this.enviarSuscripcion();
            }
        }
    }
}