import {cartelera} from './modules/cartelera.js';
import {imageAsButton} from './modules/movieDescription.js';

const renderCartelera = {
    cartelera: document.querySelector('.cartelera'),
    elementosOscurecer: ['.header', '.cartelera', '.footer'],
    modal: document.querySelector('.modal-contenedor'),
    scroll: document.querySelector('.scroll'),
    add: document.querySelector('#add'),
    edit: document.querySelector('#submit'),

    renderCartelera: function () {
        let contador = 0;
        let tituloRep = "";
        this.cartelera.innerHTML += `<h2 class="carteleraTitulo">CARTELERA</h2>`;
        cartelera.forEach(pelicula => {
            if (tituloRep !== pelicula.Title) {
                this.cartelera.innerHTML += `<div id="${contador}" class="pelicula" name="${pelicula.Title}" >
                                            <div id="${contador}" class="img-container" name="${(pelicula.Title).toLowerCase()}" ><img src="${pelicula.Poster}" alt="${pelicula.Title}"></div>
                                            
                                            <div class="text-content">
                                                <h2 class="titulo-pelicula">${(pelicula.Title).toUpperCase()}</h2>
                                                <h3 class="subtitulo-pelicula">${(pelicula.Genre).toLowerCase()} / 
                                                ${(pelicula.Year).toLowerCase()} / ${(pelicula.Runtime).toLowerCase()}</h3>
                                            
                                            <br><div class="horarios">DIGITAL
                                                    <button>15:50</button>
                                                    <button>20:25</button>                                                
                                            </div>
                                            <div class="ediciones">
                                            <button id="${contador}" class="edicion" name="editar"><i class="far fa-edit"></i></button>
                                            <button id="${contador}" class="edicion" name="borrar"><i class="far fa-trash-alt"></i></button>
                                            </div>
                                            </div>
                                         </div>`;
                contador++;
                tituloRep = pelicula.Title;
            }
        });
    },
    listenerBotones: function () {

        const botones = document.querySelectorAll('.edicion');
        const peliculas = document.querySelectorAll('.pelicula');

        botones.forEach(boton => {
            boton.addEventListener('click', function () {

                peliculas.forEach(pelicula => {
                    if (boton.getAttribute('id') === pelicula.getAttribute('id')) {
                        if (boton.getAttribute('name') === 'borrar') {
                            this.borrarCarta(pelicula);
                        } else {
                            document.getElementById('form').reset();
                            this.mostrarFormEdicion(pelicula.getAttribute('name'));
                        }
                    }
                })
            }.bind(this))
        });
        imageAsButton();
    },
    borrarCarta: function (carta) {
        carta.remove();
    },
    mostrarFormEdicion: function (pelicula) {

        this.elementosOscurecer.forEach(elemento => {
            document.querySelector(elemento).classList.add('opacidad-fondo');
        });
        this.edit.style.display = "block";
        this.add.style.display = "none";
        this.modal.style.display = "block";
        this.scroll.style.display = "none";
        let inputForms = document.querySelectorAll('.inputForm');

        cartelera.forEach(carta => {
            if (carta.Title === pelicula) {
                inputForms.forEach(input => {
                    for (let key in carta) {
                        if (input.getAttribute('name') === key) {
                            console.log(input.getAttribute('name') + "===" + key);
                            input.value = carta[key];
                        }
                    }
                });
            }
        });


        this.editarCarta(pelicula);
    },
    cerrarVentana: function () {
        document.querySelector('.boton-cerrar').addEventListener('click', function () {
            this.elementosOscurecer.forEach(elemento => {
                document.querySelector(elemento).classList.remove('opacidad-fondo');
            });
            this.modal.style.display = "none";
            this.scroll.style.display = "block";
        }.bind(this));
    },
    editarCarta: function (pelicula) {
        document.getElementById('submit').addEventListener('click', function () {
            const formId = document.getElementById('form');
            const form = new FormData(formId);

            this.elementosOscurecer.forEach(elemento => {
                document.querySelector(elemento).classList.remove('opacidad-fondo');
            });

            this.modal.style.display = "none";
            this.scroll.style.display = "block";

            this.renderNuevaCartelera(form.get('Title'), form.get('Genre'), form.get('Year'),
                form.get('Runtime'), form.get('Poster'), form.get('Plot'), form.get('Director'), form.get('Released'),
                form.get('Writer'), form.get('Actors'), form.get('Awards'), form.get('imdbRating'), pelicula, form);


        }.bind(this));

    },
    renderNuevaCartelera: function (Title, Genre, Year, Runtime, Poster, Plot, Director, Released, Writer, Actors, Awards, imdbRating, pelicula) {
        cartelera.forEach(carta => {
            if (carta.Title === pelicula) {
                carta.Title = Title;
                carta.Genre = Genre;
                carta.Year = Year;
                carta.Runtime = Runtime;
                carta.Poster = `img/subir/${Poster.name}`;
                carta.Plot = Plot;
                carta.Director = Director;
                carta.Released = Released;
                carta.Writer = Writer;
                carta.Actors = Actors;
                carta.Awards = Awards;
                carta.imdbRating = imdbRating;
                this.cartelera.innerHTML = "";
                this.renderCartelera();
                this.listenerBotones();
                imageAsButton();
                document.getElementById('form').reset();
            }
        });

    },

    mostrarFormAnadir: function () {
        document.querySelector('.add-button').addEventListener('click', function () {
            document.getElementById('form').reset();
            this.elementosOscurecer.forEach(elemento => {
                document.querySelector(elemento).classList.add('opacidad-fondo');
            });
            this.modal.style.display = "block";
            this.edit.style.display = "none";
            this.add.style.display = "block";
            this.scroll.style.display = "none";
            this.anadirElemento();
        }.bind(this));
    },

    anadirElemento: function () {
        document.getElementById('add').addEventListener('click', function (event) {
            const formId = document.getElementById('form');
            const form = new FormData(formId);
            let formObject = {};
            form.forEach((value, key) => {
                formObject[key] = value;
            });

            formObject['Poster'] = `img/subir/${formObject.Poster.name}`
            cartelera.push(formObject);

            this.elementosOscurecer.forEach(elemento => {
                document.querySelector(elemento).classList.remove('opacidad-fondo');
            });

            this.edit.style.display = "block";
            this.add.style.display = "none";
            this.modal.style.display = "none";
            this.scroll.style.display = "block";

            this.cartelera.innerHTML = "";

            this.renderCartelera();
            this.listenerBotones();
            imageAsButton();

        }.bind(this))
    },
    /*datePicker : function() {
        $( "#datePicker" ).datepicker({
            dateFormat: 'dd-mm-yy'
        });
    }*/
}

renderCartelera.renderCartelera();
renderCartelera.listenerBotones();
renderCartelera.cerrarVentana();
renderCartelera.mostrarFormAnadir();