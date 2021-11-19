const suscripcion = {

    sub :document.querySelector('.suscripcion'),

    render: function () {

        return `
            <div class="cerrar-boton">
                <button class="boton-cerrar"> X</button>
            </div>
            <form name="form" id="form">
                Suscripción <input type="text" name="suscripcion" placeholder="E-mail">
                <button id="submit" name="submit" value="Enviar">Enviar</button>
            </form>`;
    },

    cargaForm: function () {

        setTimeout(() => {


            this.sub.innerHTML = this.render();

            this.sub.classList.add('suscripcion-mostrar');

        }, 5000);
    },

    cerrarSuscripcion: function () {
        document.querySelector('.boton-cerrar').addEventListener('click', function () {
            this.sub.classList.remove('suscripcion-mostrar');
        })
    }
}

suscripcion.cargaForm();
suscripcion.display();
suscripcion.cerrarSuscripcion();