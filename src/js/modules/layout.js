const layout = {
    menu: ["novedades", "cartelera", "promociones", "zona ocio"],
    header: function () {
        return `
        <div class="logo">
            <a href="../templates/index.html"><img src="../../src/img/logoPalmimax.png" alt="Logo"></a>
        </div>
        <div class="menu">
            ${this.renderMenu()}
        </div>`
    },
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
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-youtube"></i>
        </div>
    </div>
    <div class="col-3">
        <input type="button" value="Métodos de pago"/>
        <div class="col-3-metodosPago">
            <i class="fab fa-cc-amex"></i>
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-paypal"></i>
        </div>
        <input type="button" value="Preguntas frecuentes"/>
        <input type="button" value="Contacto"/>
    </div>`
    ,
    renderMenu: function () {
        let output=`<ul>`;
        this.menu.forEach(section => {
            if (section==="cartelera"){
                output+=`<a href="../../src/templates/cartelera.html"><li>${section}</li></a>`
            }
            else
            {
                output += `<a href="#${section}"><li>${section}</li></a>`;
            }

        })

        /*if (window.location.pathname === "/timeInn_p2/src/templates/cartelera.html"){
            output += `<button name="add" class="add-button"><i id="add-button" class="far fa-plus-square"></i></button>`;
        }*/
        output += `</ul>`;
        return output;
    },

    render: function () {
        document.getElementsByClassName("header")[0].innerHTML = this.header();
        document.getElementsByClassName("footer")[0].innerHTML = this.footer;
    }
}