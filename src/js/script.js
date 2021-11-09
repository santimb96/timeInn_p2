import {cartelera} from './modules/cartelera.js';
import {promociones} from './modules/promociones.js';
import {novedades} from "./modules/novedades";

function print() {
    // language=HTML
    document.getElementById('carta').innerHTML = `<img src="${cartelera[0].Poster}" alt="Avengers" width="200"
                                                       height="300">`
}

print();

const app = {

    novedades: document.querySelector('.novedades'),
    promociones: document.querySelector('.promociones'),
    cartelera,

    renderNovedades: function () {
        novedades.forEach(novedad => {
            this.novedades.innerHTML += `<div class="novedades">
                                            <img src="${novedad.Poster}" alt="${novedad.Title}" width="200" height="300">
                                            <p class="titulo">${novedad.Title}</p>
                                            <p class="año">${novedad.Year}</p>
                                        </div>`;
        });
    },

    renderPromociones: function () {
        promociones.forEach(promocion => {
            this.promociones.innerHTML += ``;
        })
    },

    renderCartelera: function () {
        /**
         * TODO: CARTELERA (FALTA CONTENEDOR CARTELERA)
         */
    }

}