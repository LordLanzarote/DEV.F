import { Largometraje } from "./Largometraje";
class Documental extends Largometraje {

    constructor(titulo, duracion, autor){
        super(titulo, duracion);
        this.autor = autor;
    }

    getAuthor(){
        return this.autor;
    }
};

export {Documental};