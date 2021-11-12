import {promociones} from "./modules/promociones.js";
import {novedades} from "./modules/novedades.js";
import {calendario} from "./modules/calendario.js";


const app = {

    novedades: document.querySelector('.cartas-novedades'),
    promociones: document.querySelector('.cartas-promociones'),
    calendario: document.querySelector('.calendario'),

    renderNovedades: function () {
        novedades.forEach(novedad => {
            this.novedades.innerHTML += `<div class="novedad">
                                            <img src="${novedad.Poster}" alt="${novedad.Title}">
                                            <h2>${novedad.Title}</h2>
                                            <p>${novedad.Year}</p>
                                        </div>`;
        });
    },

    renderPromociones: function () {
        promociones.forEach(promocion => {
            this.promociones.innerHTML += `<div class="promocion">
                                            <img src="${promocion.Poster}" alt="${promocion.Titulo}">
                                            <h2>${promocion.Titulo}</h2>
                                        </div>`;
        })
    },
    renderCalendario: function (){
        this.calendario.innerHTML += calendario.calendario();
    }
}
app.renderNovedades();
app.renderPromociones();
app.renderCalendario();
