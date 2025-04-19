import Cl_demoArrays from "./Cl_demoArrays.js";
 export default class Cl_principal{
    constructor(){
        this.salida= document.getElementById("salida");
        this.salida.innerHTML=this.opciones();
        this.opcion= document.getElementById("opcion");
        this.demos= new Cl_demoArrays();
        this.opcion.onclick=()=> this.mostrarDemo();
    }
    opciones(){
        return `
        A. Ejemplo creación de arrays<br>
    B. Ejemplo acceso de elementos<br>
    C. Ejemplo acceso de elementos<br>
    D. Ejemplo push<br>
        `;
    }
    mostrarDemo(){
        let opc=prompt("Seleccione una opcion").toUpperCase();
        switch(opc){
            case "A":this.demos.creacionArray();break;
            case "B":this.demos.acceso();break;
            case "C":this.demos.acceso2();break;
            case "D":this.demos.Metodopush();break;
        }
    }
 }