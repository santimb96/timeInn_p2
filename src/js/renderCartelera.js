import {cartelera} from './modules/cartelera.js';

const renderCartelera = {
    cartelera: document.querySelector('.cartelera'),

    renderCartelera: function () {
        cartelera.forEach(pelicula => {
            this.cartelera.innerHTML += `<div class="pelicula">
                                            <div class="img-container" name="${(pelicula.Title).toLowerCase()}" ><img src="${pelicula.Poster}" alt="${pelicula.Title}"></div>
                                            
                                            <div class="text-content">
                                                <h2 class="titulo-pelicula">${(pelicula.Title).toUpperCase()}</h2>
                                                <h3 class="subtitulo-pelicula">${(pelicula.Genre).toLowerCase()} / 
                                                ${(pelicula.Year).toLowerCase()} / ${(pelicula.Runtime).toLowerCase()}</h3>
                                            
                                            <br><div class="horarios">DIGITAL
                                                    <button>15:50</button>
                                                    <button>20:25</button>                                                
                                            </div>
                                            <div class="edicion">
                                            <button>EDITAR</button>
                                            <button onclick="this.borrarCarta()">BORRAR</button>
                                            </div>
                                            </div>
                                         </div>`;
        });
    },

    borrarCarta : function () {

    }
}
renderCartelera.renderCartelera();