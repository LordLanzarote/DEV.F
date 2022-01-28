
class Sala {
    
    constructor(numSala, cantGente, largometraje){
        this.numSala = numSala;
        this.cantGente = cantGente;
        this.largometraje = largometraje;
    }

    // (SET) & (GET)
    setMovie(){
        return "Se está reproduciendo: " + this.largometraje.getTitle() + " Duración: " + this.largometraje.getDuracion();
    }

    getPeople(){
        return this.cantGente;
    }

    getNumberSala(){
        return this.numSala;
    }
};

export {Sala};