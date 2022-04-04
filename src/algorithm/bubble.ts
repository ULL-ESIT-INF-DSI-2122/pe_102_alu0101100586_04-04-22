import { Strategy } from "../interface/strategy";

/**
 * Clase que implementa una estrategia en concreto, En este caso, estemos hablando del Bubble Sort para ordenar array de tipo number
 */
export class Bubble_Sort implements Strategy {
    /**
     * Funcion que realiza la ordenacion especificada
     * @param data array de tipo number a ordenar
     */
    execute(data: number[]) {
        let swap: number = 0;
        for(let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length - 1; j++) {
                if (data[j] > data[j + 1]) {
                    swap = data[j];
                    data[j] = data [j + 1];
                    data [j + 1] = swap;
                }
            }
        }
    }
}