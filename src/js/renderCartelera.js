/**
 * @author oasiao@cifpfbmoll.eu, smartinez@cifpfbmoll.eu
 * @version 1.0.0
 */
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
                this.cartelera.innerHTML += this.renderPeliculas(pelicula,contador);
                tituloRep = pelicula.Title;
                contador++;
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
        this.back();
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
            if (carta.Title === pelicula){
                inputForms.forEach(input => {
                    for (let key in carta){
                        if (input.getAttribute('name') === key){
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
                form.get('Runtime'), form.get('Poster'),form.get('Plot'),form.get('Director'),form.get('Released'),
                form.get('Writer'),form.get('Actors'),form.get('Awards'),form.get('imdbRating'),pelicula);


        }.bind(this));

    },
    renderNuevaCartelera: function (Title, Genre, Year, Runtime, Poster, Plot, Director, Released, Writer, Actors, Awards, imdbRating, pelicula) {
        cartelera.forEach(carta => {
            if (carta.Title === pelicula) {
                carta.Title = Title;
                carta.Genre = Genre;
                carta.Year = Year;
                carta.Runtime = Runtime;
                if (Poster.name.includes('.jpg')||Poster.name.includes('.png')||Poster.name.includes('.jpeg')){
                    carta.Poster = `img/subir/${Poster.name}`;
                }
                carta.Plot = Plot;
                carta.Director = Director;

                if (Released !== ""){
                    carta.Released = Released;
                }
                carta.Writer = Writer;
                carta.Actors = Actors;
                carta.Awards = Awards;
                carta.imdbRating = imdbRating;
                this.cartelera.innerHTML = "";
                this.renderCartelera();
                this.listenerBotones();
                this.back();
                this.filter();
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
        document.getElementById('add').addEventListener('click', function () {
            const formId = document.getElementById('form');
            const form = new FormData(formId);
            let formObject = {};

            if (this.camposValidados()){

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
                this.filter();
            }


        }.bind(this))
    },
    filter : function (){
        document.getElementById("filterButton").addEventListener('click', function (){
            let contador = 0;
            let filter = document.getElementById('filterInput').value;
            filter = filter.toLowerCase();
            let select = document.getElementById('filter');
            let option = select.options[select.selectedIndex].value;
            this.cartelera.innerHTML = `<h1>CARTELERA</h1>`;
            cartelera.forEach(pelicula => {
                if (option === 'Year'){
                    if (pelicula.Year === filter){
                        this.cartelera.innerHTML += this.renderPeliculas(pelicula,contador);
                        contador++;
                    }
                }
                else if(option === 'Title'){
                    let titulo = pelicula.Title.toLowerCase();
                    if (titulo.includes(filter)){
                        this.cartelera.innerHTML += this.renderPeliculas(pelicula,contador);
                        contador++;
                    }
                }
                else if(option === 'Genre'){
                    let genero = pelicula.Genre.toLowerCase();
                    if (genero.includes(filter)){
                        this.cartelera.innerHTML += this.renderPeliculas(pelicula,contador);
                        contador++;
                    }
                }
                else{
                    console.log("ERROR");
                }
            });

            document.getElementById('cleanFilter').style.display = "block";

            this.cleanFilter();
            this.listenerBotones();
            this.filter();

        }.bind(this));

    },
    cleanFilter : function (){
        document.getElementById('cleanFilter').addEventListener('click',function (){
            document.getElementById('cleanFilter').style.display = "none";
            document.getElementById('filterInput').value="";
            this.cartelera.innerHTML = "";
            this.filter();
            this.renderCartelera();
            this.listenerBotones();

        }.bind(this));
    },
    renderPeliculas : function(pelicula,contador){
        return `<div id="${contador}" class="pelicula" name="${pelicula.Title}" >
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

    },
    camposValidados : function (){
        let inputForms = document.querySelectorAll('.inputForm');
        let validated = true;
        inputForms.forEach(input => {
            if (input.value === "" || input.value === null){
                validated = false;
                input.classList.add('campoVacio');
            }
            else{
                input.classList.remove('campoVacio');
            }
        });

        return validated;
    },
    back : function (){
        document.getElementById('back').addEventListener('click',function (){
            document.querySelector('.filter').style.display = "flex";
            document.querySelector('.add-button').style.display = "block";
            document.querySelector('.divBack').style.display = "none";
            document.querySelector('.pelicula-content').innerHTML = "";
            this.cartelera.innerHTML = "";
            this.renderCartelera();
            imageAsButton();
            this.listenerBotones();
            this.filter();
        }.bind(this));
    }
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
renderCartelera.filter();