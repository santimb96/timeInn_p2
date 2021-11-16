window.onscroll = function () {scrollOnTop.visualizarScroll()}

const scrollOnTop = {

    visualizarScroll: function () {

        const boton = document.querySelector('.scroll');

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            boton.style.display = "block";
        } else {
            boton.style.display = "none";
        }
    },

    scrollTop : function () {
        document.querySelector('.scroll').addEventListener('click', function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }
}
scrollOnTop.scrollTop();

