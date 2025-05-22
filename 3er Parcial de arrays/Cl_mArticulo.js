export default class Cl_mArticulo {
    constructor(codigo,nombre,costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.costo = costo;
    }
    precioFinal(){
        return this.costo*(25/100);
    }
}