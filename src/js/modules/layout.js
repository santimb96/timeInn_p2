const layout = {
    menu: ["novedades", "cartelera", "promociones", "zona ocio"],
    header: function () {
        return `
        <div class="bar-menu">
            <div class="logo"><a href="index.html"><img src="img/logoPalmimax.png" alt="Logo"></a></div>
            <button id="hamburger"><i class="fas fa-bars"></i></button>
            <button id="x">X</button>
        </div>
        
        <div class="menu">
            ${this.renderMenu()}
        </div>`
    },
    footerBar: `<div class="footer-bar"><button><i class="fas fa-ellipsis-h"></i></button></i></div>`,
    footer: `
        <div class="footer-fields">
            <div class="col-1">
                <div class="col-1-title">Sobre nosotros</div>
                <div class="col-1-content">Somos Kim y Santi, un grupo de desarrolladores mallorquines en el ámbito web. Nuestra finalidad reside en pasarlo bien
                 juntos mientras trabajamos en proyectos de clase el máximo tiempo que podamos. También nos picamos mucho por ver quién se equivoca más o quién resuelve
                 más rápido un conflicto y, por ello, somos una gran pareja de trabajo y vamos a por el 10 de DWEC siempre que se pueda. ¡Un saludo a @classicoman2!
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
            </div>
        </div>`,
    renderMenu: function () {
        let output = `<ul>`;
        this.menu.forEach(section => {
            if (section === "cartelera") {
                output += `<button><a href="cartelera.html"><li>${section}</li></a></button>`
            } else {
                output += `<button><a href="#${section}"><li>${section}</li></a></button>`;
            }

        })

        output += `</ul>`;
        return output;
    },
    render: function () {
        document.getElementsByClassName("header")[0].innerHTML += this.header();
        document.getElementsByClassName("footer")[0].innerHTML += this.footerBar;
        document.getElementsByClassName("footer")[0].innerHTML += this.footer;
        this.buttons();
    },
    buttons: function () {
        document.getElementById('hamburger').addEventListener('click', function () {
            document.querySelector('.menu').style.display = 'block';
            document.getElementById('x').style.display = 'block';
            document.getElementById('hamburger').style.display = 'none';
        });
        document.getElementById('x').addEventListener('click', function () {
            document.querySelector('.menu').style.display = 'none';
            document.getElementById('hamburger').style.display = 'block';
            document.getElementById('x').style.display = 'none';
        });
        document.querySelector('.footer-bar').addEventListener('click', function () {
            document.querySelector('.footer-fields').style.display = 'grid';
            document.querySelector('.footer-bar').style.display = 'none';
        });
    }
}


