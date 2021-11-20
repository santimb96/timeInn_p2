const suscripcion = {

    sub: document.querySelector('.suscripcion'),

    render: function () {

        return `
            <div class="form-sub">
            <div class="cerrar-boton">
                <button class="boton-cerrar"> X</button>
            </div>
            <form name="form" id="form">
                Suscripción <input type="text" name="suscripcion" placeholder="E-mail">
                <button id="submit" name="submit" value="Enviar">Enviar</button>
            </form>
            </div>`;
    }, cargaForm: function () {
        //TODO COOKIE

        setTimeout(() => {

            this.sub.innerHTML = this.render();
            this.sub.classList.add('suscripcion-mostrar');
            this.cerrarSuscripcion();

        }, 5000);
    },

    cerrarSuscripcion: function () {
        document.querySelector('.boton-cerrar').onclick = function () {
            this.sub.classList.remove('suscripcion-mostrar');
        }.bind(this);
    }
}

suscripcion.cargaForm();
