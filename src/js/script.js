import {cartelera} from './modules/cartelera.js';

function print(){
    // language=HTML
    document.getElementById('carta').innerHTML = `<img src="${cartelera[0].Poster}" alt="Avengers" width="200" height="300">`
}
print();