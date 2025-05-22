/*import Cl_mFactura from "./Cl_mFactura.js";
import Cl_mArticulo from "./Cl_mArticulo.js";
export default class Cl_mFacturas {
    constructor(){
        this.facturas=[];
    }
    listado(){
        for(let i=0;i<this.facturas.length;i++){
            let f = this.facturas[i];
            this.facturas.push({
                codigo: f.codigo,
                fecha: f.fecha,
                totalPagado: new Cl_mFactura.subtotal(),
            });
        }
    }
    totalVendido(){
        let total = 0;
        for(let i=0; i<this.facturas.length; i++){
            let f = this.facturas[i];
            total += f.totalPagado;
        }
        return total;
    }
}*/
import Cl_mFactura from "./Cl_mFactura.js";
export default class Cl_mFacturas {
    constructor(){
        this.facturas=[];
    }
    listado(){
        const resultado = [];
        for(let i=0; i<this.facturas.length; i++){
            let f = this.facturas[i];
            let total = 0;
            f.cntArts.forEach(a => {
                total += a.cantidad * a.precioFinal();
            });
            resultado.push({
                codigo: f.codigo,
                fecha: f.fecha,
                totalPagado: total
            });
        }
        return resultado;
    }
    totalVendido(){
        let total = 0;
        for(let i=0; i<this.facturas.length; i++){
            let f = this.facturas[i];
            f.cntArts.forEach(a => {
                total += a.cantidad * a.precioFinal();
            });
        }
        return total;
    }
}