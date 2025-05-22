/*import Cl_mArticulo from "./Cl_mArticulo.js";
export default class Cl_mArticulos {
    constructor() {
        this.articulos = [];
    }
    listado(){
        for(let i=0; i<this.articulos.length; i++){
            let a=this.array=[]
            this.articulos.push({
                codigo: a.codigo,
                nombre: a.nombre,
                costo: a.costo,
                precioFinal:new Cl_mArticulo.precioFinal(),
            })
        }
    }
}
/*Cl_mEstudiantes.listado(){
   let arrayEstudiantes=[]
   for (let i=0; i<this.array.length, i++){
	  let e = this.array[i]
	  arrayEstudiantes.push({
	     cedula: e.cedula, 
	     nombres: e.nombres, 
	     apellidos: e.apellidos}
	  )
   }   
   return arrayEstudiantes
}
*/ 
import Cl_mArticulo from "./Cl_mArticulo.js";
export default class Cl_mArticulos {
    constructor() {
        this.articulos = [];
    }
    listado(){
        const resultado = [];
        for(let i=0; i<this.articulos.length; i++){
            let a = this.articulos[i];
            resultado.push({
                codigo: a.codigo,
                nombre: a.nombre,
                costo: a.costo,
                precioFinal: a.precioFinal()
            });
        }
        return resultado;
    }
}