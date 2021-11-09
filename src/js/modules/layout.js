const layout = {
    header: `
        <div class="logo">
            <img src="../img/logoPalmimax.png" alt="Logo" width="200" height="60">
        </div>
        <div class="menu">
            <input type="button" value="Novedades"/>
            <input type="button" value="Cartelera"/>
            <input type="button" value="Promociones"/>
            <input type="button" value="Zona socio"/>
        </div>`,
    footer: `
        <div class="col-1">
        <div class="col-1-title">Sobre nosotros</div>
        <div class="col-1-content">Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>
    <div class="col-2">
        <input type="button" value="Términos y condiciones"/>
        <input type="button" value="Aviso legal"/>
        <input type="button" value="Política de cookies"/>
        <div class="col-2-redesSociales">
            <img src="../img/facebook.png"/>
            <img src="../img/instagram.png"/>
            <img src="../img/twitter.png"/>
            <img src="../img/youtube.png"/>
        </div>
    </div>
    <div class="col-3">
        <input type="button" value="Métodos de pago"/>
        <div class="col-3-metodosPago">
            <img src="../img/american.png"/>
            <img src="../img/visa.png"/>
            <img src="../img/mastercard.png"/>
            <img src="../img/paypal.png"/>
        </div>
        <input type="button" value="Preguntas frecuentes"/>
        <input type="button" value="Contacto"/>
    </div>`,
    render: function () {
        document.getElementsByClassName("header")[0].innerHTML = this.header;
        document.getElementsByClassName("footer")[0].innerHTML = this.footer;
    }
}