import {promociones} from "./modules/promociones.js";
import {novedades} from "./modules/novedades.js";
import {calendario} from "./modules/calendario.js";


const app = {

    novedades: document.querySelector('.novedades'),
    promociones: document.querySelector('.promociones'),
    calendario: document.querySelector('.calendario'),

    renderNovedades: function () {
        novedades.forEach(novedad => {
            this.novedades.innerHTML += `<div class="novedad">
                                            <img src="${novedad.Poster}" alt="${novedad.Title}">
                                            <h1>${novedad.Title}</h1>
                                            <p>${novedad.Year}</p>
                                        </div>`;
        });
    },

    renderPromociones: function () {
        promociones.forEach(promocion => {
            this.promociones.innerHTML += `<div class="promocion">
                                            <img src="${promocion.Poster}" alt="${promocion.Titulo}">
                                            <h1>${promocion.Titulo}</h1>
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
