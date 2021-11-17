import {cartelera} from './modules/cartelera.js';

const renderCartelera = {
    cartelera: document.querySelector('.cartelera'),

    elementosOscurecer: ['.header', '.cartelera', '.footer'],

    renderCartelera: function () {
        let contador = 1;

        cartelera.forEach(pelicula => {
            this.cartelera.innerHTML += `<div id="${contador}" class="pelicula" name="${pelicula.Title}" >
                                            <div class="img-container" name="${(pelicula.Title).toLowerCase()}" ><img src="${pelicula.Poster}" alt="${pelicula.Title}"></div>
                                            
                                            <div class="text-content">
                                                <h2 class="titulo-pelicula">${(pelicula.Title).toUpperCase()}</h2>
                                                <h3 class="subtitulo-pelicula">${(pelicula.Genre).toLowerCase()} / 
                                                ${(pelicula.Year).toLowerCase()} / ${(pelicula.Runtime).toLowerCase()}</h3>
                                            
                                            <br><div class="horarios">DIGITAL
                                                    <button>15:50</button>
                                                    <button>20:25</button>                                                
                                            </div>
                                            <div class="ediciones">
                                            <button id="${contador}" class="edicion" name="editar">EDITAR</button>
                                            <button id="${contador}" class="edicion" name="borrar">BORRAR</button>
                                            </div>
                                            </div>
                                         </div>`;
            contador++;
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
                            this.mostrarFormEdicion(pelicula.getAttribute('name'));
                        }
                    }
                })
            }.bind(this))
        });
    },

    borrarCarta: function (carta) {
        carta.remove();
    },

    mostrarFormEdicion: function (pelicula) {

        this.elementosOscurecer.forEach(elemento => {
            document.querySelector(elemento).classList.add('opacidad-fondo');
        });

        document.querySelector('.modal-contenedor').classList.add('mostrar');

        this.editarCarta(pelicula);
    },

    cerrarVentana: function () {
        document.querySelector('.boton-cerrar').addEventListener('click', function () {
            this.elementosOscurecer.forEach(elemento => {
                document.querySelector(elemento).classList.remove('opacidad-fondo');
            });
            document.querySelector('.modal-contenedor').classList.remove('mostrar');
        }.bind(this));
    },

    editarCarta: function (pelicula) {
        //TODO: HACER FORMULARIO PARA EDITAR  PELÍCULAS

        document.getElementById('submit').addEventListener('click', function () {
            event.preventDefault();

            const formId = document.getElementById('form');
            const form = new FormData(formId);

            document.querySelector('.modal-contenedor').classList.remove('mostrar');

            this.renderNuevaCartelera(form.get('Title'), form.get('Genre'), pelicula);


        }.bind(this));

    },

    renderNuevaCartelera: function (titulo, genero, pelicula) {
        cartelera.forEach(carta => {
            if (carta.Title === pelicula) {
                carta.Title = titulo;
                carta.Genre = genero;
                this.cartelera.innerHTML = "";
                this.renderCartelera();
            }

        });

    },

    mostrarFormAnadir: function () {
        document.querySelector('.add-button').addEventListener('click', function () {
            console.log("clicked");
            this.elementosOscurecer.forEach(elemento => {
                document.querySelector(elemento).classList.add('opacidad-fondo');
            });
            document.querySelector('.modal-contenedor').classList.add('mostrar');
            this.anadirElemento();
        }.bind(this));
    },

    anadirElemento: function () {
        document.getElementById('submit').addEventListener('click', function () {
            event.preventDefault();
            const formId = document.getElementById('form');
            const form = new FormData(formId);
            console.log(document.getElementById('imagen').getAttribute('class'));
            let formObject = {};
            form.forEach((value, key) => {
                formObject[key] = value;
            });

            formObject['Poster'] = `../img/subir/${formObject.Poster.name}`
            cartelera.push(formObject);
            this.elementosOscurecer.forEach(elemento => {
                document.querySelector(elemento).classList.remove('opacidad-fondo');
            });
            document.querySelector('.modal-contenedor').classList.remove('mostrar');
            this.cartelera.innerHTML = "";
            this.renderCartelera();
            this.listenerBotones();
        }.bind(this))
    }
}

renderCartelera.renderCartelera();
renderCartelera.listenerBotones();
renderCartelera.cerrarVentana();
renderCartelera.mostrarFormAnadir();
