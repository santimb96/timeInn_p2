import {cartelera} from './cartelera.js';

//export {pelicula}

const pelicula = {
    buttons: document.querySelectorAll('.img-container'),
    id: "",
    /*imageAsButton: function () {
        this.buttons.forEach(button => {
            console.log("hey");
            button.addEventListener('click', function () {
                this.id = button.getAttribute('id');
                document.querySelectorAll('.cartelera')[0].style.display = "none";
                document.querySelector('.contenedor-pelicula').style.display = "block";
                this.renderPeliculaDescription();
            }.bind(this));
        });
    },*/
    renderPeliculaDescription: function (id) {
                document.querySelector('.pelicula-content').innerHTML =
                    `<div class="pelicula" name="${cartelera[id].Title}" >
                <div class="img-container" name="${(cartelera[id].Title).toLowerCase()}">
                    <img src="${cartelera[id].Poster}" alt="${cartelera[id].Title}">
                </div>
                <div class="text-content">
                    <h2 class="titulo-pelicula">${(cartelera[id].Title).toUpperCase()}</h2>
                    <h3 class="subtitulo-pelicula">
                        ${(cartelera[id].Genre).toLowerCase()} / 
                        ${(cartelera[id].Year).toLowerCase()} / 
                        ${(cartelera[id].Runtime).toLowerCase()}
                    </h3>
                    <h6>${(cartelera[id].Plot)}</h6>
                    <h5>Director: ${(cartelera[id].Director)} /
                    Released: ${(cartelera[id].Released)} /
                    Writer: ${(cartelera[id].Writer)} /
                    Actors: ${(cartelera[id].Actors)} /
                    Awards: ${(cartelera[id].Awards)} / </h5>
                    <h3>IMDB RATING: ${(cartelera[id].imdbRating)}</h3>
                    
                </div>
            </div>`;
    }
};

export function imageAsButton() {
     document.querySelectorAll('.img-container').forEach(button => {
        button.addEventListener('click', function () {
            let id = button.getAttribute('id');
            document.querySelectorAll('.cartelera')[0].style.display = "none";
            document.querySelector('.contenedor-pelicula').style.display = "block";
            document.querySelector('.add-button').style.display = "none";
            pelicula.renderPeliculaDescription(id);
        });
    });
}

