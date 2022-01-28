import { Largometraje } from "./Largometraje";

class Partido {

    constructor(titulo, duracion, equipo){
        super(titulo, duracion);
        this.equipo = equipo;
    }

    getTeam (){
        return this.equipo;
    }
};

export {Partido};