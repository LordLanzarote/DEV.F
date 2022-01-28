import { Sala } from "./Javascript/Sala.js";
import { Pelicula } from "./Javascript/Pelicula.js";
import { Documental } from "./Javascript/Documental.js";
import { Partido } from "./Javascript/Partido.js";

class Cine {

    constructor(sala){
        this.sala = sala;
    }

    reproducir(){
        return this.sala.setMovie();
    }
}

// INSTANCIAR OBJETO PELICULA
const titanic = new Pelicula ('TITANIC', '22MIN', 'B');
const SalaUno = new Sala ('1', '230personas', titanic);
const cinepolisPabellon = new Cine (SalaUno);

// INSTANCIAR OBJETO DOCUMENTAL
const documental = new Documental ('Catfish', '50MIN', 'A');
const SalaDos = new Sala ('2', '230personas', documental);
const cinepolisGalerias = new Cine (SalaDos);

// INSTANCIAR OBJETO PARTIDO
const partidoFut = new Partido ('Champions', '125MIN', 'A');
const SalaTres = new Sala ('3', '270personas', partidoFut);
const cinemex = new Cine (SalaTres);

// IMPRIMIR LOS OBJETOS DE CLASE
console.log(cinepolisPabellon.reproducir());
console.log(cinepolisGalerias.reproducir());
console.log(cinemex.reproducir());