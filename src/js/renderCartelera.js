import {cartelera} from './modules/cartelera.js';

const renderCartelera = {
    cartelera: document.querySelector('.cartelera'),

    renderCartelera: function () {
        cartelera.forEach( pelicula => {
            this.cartelera.innerHTML += `<div class="pelicula">
                                            <img src="${pelicula.Poster}" alt="${pelicula.Title}">
                                            <div class="text-content">
                                                <p class="titulo">${pelicula.Title}</p>
                                                <div class="horarios">
                                                    <button>15:50</button>
                                                    <button>20:25</button>                                                
                                                </div>
                                            </div>
                                            
                                        </div>`;
        });
    }
}
renderCartelera.renderCartelera();