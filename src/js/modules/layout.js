const layout = {
        header: `<div class="contenedor">
    <div class="header">
        <div class="logo">
            <img src="../../src/img/logoPalmimax.png" alt="Logo" width="200" height="60">
        </div>
        <div class="menu">
            <input type="button" value="Novedades"/>
            <input type="button" value="Cartelera"/>
            <input type="button" value="Promociones"/>
            <input type="button" value="Zona socio"/>
        </div>
    </div>

</div>`,
        footer:`<footer><h4>Footer</h4></footer>`,
        render: function () {
            document.getElementById("header").innerHTML = this.header;
            document.getElementById("footer").innerHTML = this.footer;
        }
}