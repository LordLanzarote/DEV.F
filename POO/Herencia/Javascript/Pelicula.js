import { Largometraje } from "./Largometraje";

class Pelicula extends Largometraje {

    constructor(titulo, duracion, genero){
        super(titulo, duracion);
        this.genero = genero;
    }

    getGender(){
        return this.genero;
    }
};

export {Pelicula};