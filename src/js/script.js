import {promociones} from "./modules/promociones.js";
import {novedades} from "./modules/novedades.js";
import {calendario} from "./modules/calendario.js";


const app = {

    novedades: document.getElementById('novedades'),
    promociones: document.getElementById('promociones'),
    calendario: document.getElementById('calendario'),

    renderNovedades: function () {
        novedades.forEach(novedad => {
            this.novedades.innerHTML += `<div class="novedad">
                                            <img src="${novedad.Poster}" alt="${novedad.Title}" width="200" height="300">
                                            <p class="titulo">${novedad.Title}</p>
                                            <p class="año">${novedad.Year}</p>
                                        </div>`;
        });
    },

    renderPromociones: function () {
        promociones.forEach(promocion => {
            this.promociones.innerHTML += `<div class="promocion">
                                            <img src="${promocion.Poster}" alt="${promocion.Titulo}" width="200" height="60">
                                            <p class="titulo">${promocion.Titulo}</p>
                                        </div>`;
        })
    },
    renderCalendario: function (){
        this.calendario.innerHTML = calendario.calendario();
    }
}
app.renderNovedades();
app.renderPromociones();
app.renderCalendario();
