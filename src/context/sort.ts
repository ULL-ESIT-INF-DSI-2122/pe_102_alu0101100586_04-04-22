import { Strategy } from "../interface/strategy";

/**
 * Clase contexto para la ordenacion de array de tipo number dependiendo de las estrategiasd que se quieran implementar
 */
export class Sort_Strategy {
    /**
     * Constructor de la clase Sort_Srategy
     * @param data array de tipo number que vamos a ordenar
     * @param strategy elemento de tipo Strategy
     */
    constructor(protected data: number[], protected strategy: Strategy) {

    }

    /**
     * Retorna el array de numeros 
     */
    getData(): number[] {
        return this.data;
    }

    /**
     * Modifica el array de numeros a un array nuevo
     * @param new_data 
     */
    setData(new_data: number[]) {
        this.data = new_data;
    }

    /**
     * Cambia la estrategia a usar
     * @param new_strategy 
     */
    setStrategy(new_strategy: Strategy) {
        this.strategy = new_strategy;
    }

    /**
     * Realiza la estrategia
     */
    logic() {
        this.strategy.execute(this.data);
    }
}