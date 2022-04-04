/**
 * Interface comun  para todos loa objetos de tipo Strategy, será usada por la clase context, en este caso Sort_Strategy
 */
export interface Strategy {
    /**
     * Unico metodo de la interface
     * @param data array de tipo number sobre el que vamos a trabajar
     */
    execute(data: number[]): void;
}