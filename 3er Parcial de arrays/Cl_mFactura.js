import Cl_mArticulo from "./Cl_mArticulo.js";
export default class Cl_mFactura{
    constructor(codigo,fecha,cntArts){
        this.codigo = codigo;
        this.fecha = fecha;
        this.cntArts = cntArts;
    }
    subtotal(articulo){
        articulo.precio = articulo.cantidad * articulo.precioFinal();
    }
    indexArticulo(codigo){
        for(let i=0; i<this.cntArts.length; i++){
            if(this.cntArts[i].codigo == codigo){
                return i;
            }
        }
        return -1;
    }
    infoArticulo({articulos}){
        /**  Programe el método correspondiente a Cl_mFactura.info(articulos), el cual debe retornar la siguiente info: 
fecha, código y datos de artículos vendidos (código, nombre, cantidad, precio y subtotal) */
        let info = {
            fecha: this.fecha,
            codigo: this.codigo,
            articulos: []
        };
        for(let i=0; i<articulos.length; i++){
            let a = articulos[i];
            info.articulos.push({
                codigo: a.codigo,
                nombre: a.nombre,
                cantidad: a.cantidad,
                precio: a.precio,
                subtotal: a.cantidad * a.precioFinal()
            });
        }
        return info;
    }
}