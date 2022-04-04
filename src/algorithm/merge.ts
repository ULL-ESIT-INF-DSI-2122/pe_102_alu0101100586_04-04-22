import { Strategy } from "../interface/strategy";

/**
 * Clase que implemenda otra estrategia para ordenar
 */
export class Merge_Sort implements Strategy {
    /**
     * Funcion que llama a la realizacion de la ordenacion Merge
     * @param data 
     */
    execute(data: number[]) {
        this.range(data, 0, data.length - 1);
    }

    /**
     * Funcion que va creando rangos y va ordenando
     * @param data array sobre el que ordenar
     * @param l numero que indica desde que parte del array comenxzar
     * @param r numero quie indica hasta donde hay que ordenar
     */
    range(data: number[], l: number, r: number) {
        if(l >= r) {
            return;
        }
        let m = Math.floor(l + (r - l) / 2);
        this.range(data, l, m);
        this.range(data, m + 1, r);
        this.merge(data, l, m, r);
    }

    merge(data: number[], l: number, m: number, r: number) {
        let rslt = data.slice(l, r + 1);
        let aux_a = l;
        let aux_b = m + 1;
        let i = l;

        while (aux_a <= m && aux_b <= r) {
            const v1 = rslt[aux_a - l];
            const v2 = rslt[aux_b - l];
            if(v1 < v2) {
                data[i++] = v1;
                ++aux_a;
            } else {
                data[i++] = v2;
                ++aux_b;
            }
        }

        while(aux_a <= m) {
            data[i++] = rslt[aux_a++ - l];
        }

        while(aux_b <= m) {
            data[i++] = rslt[aux_b++ - l];
        }
    }
}