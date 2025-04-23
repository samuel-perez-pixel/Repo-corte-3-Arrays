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
    E. Ejemplo unshift<br>
    F. Ejemplo pop<br>
    G. Ejemplo shift<br>
    H. Ejemplo splice<br>
    I. Ejemplo Map-versión 1<br>
    J Ejemplo Map-versión 2<br>
    K Recorridos tradicionales<br>
    L ForEach<br>
        `;
    }
    mostrarDemo(){
        let opc=prompt("Seleccione una opcion").toUpperCase();
        switch(opc){
            case "A":this.demos.creacionArray();break;
            case "B":this.demos.acceso();break;
            case "C":this.demos.acceso2();break;
            case "D":this.demos.Metodopush();break;
            case "E":this.demos.ejemploUnshift();break;
            case "F":this.demos.ejemploPop();break;
            case "G":this.demos.ejemploShift();break;
            case "H":this.demos.ejemploSplice();break;
            case "I":this.demos.ejemploMap1();break;
            case "J":this.demos.ejemploMap2();break;
            case "K":this.demos.recorridoTradicional();break;
            case "L":this.demos.ejemploForeach();break;
        }
    }
 }