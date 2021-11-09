import {cartelera} from './modules/cartelera.js';

const renderCartelera = {
    cartelera: document.getElementById('cartelera'),

    renderCartelera: function () {
        cartelera.forEach( pelicula => {
            this.cartelera.innerHTML += `<div class="pelicula">
                                            <img src="${pelicula.Poster}" alt="${pelicula.Title}" width="200" height="300">
                                            <p class="titulo">${pelicula.Title}</p>
                                            <p class="horarios">15:50</p>
                                            <p class="horarios">20:25</p>
                                        </div>`;
        });
    }
}
renderCartelera.renderCartelera();