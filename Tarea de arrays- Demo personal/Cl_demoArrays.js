export default class Cl_demoArrays {
    creacionArray() {
        let familia=[
            {nombre: 'Samuel',parentesco: 'Hijo',genero:'Masculino'},
            {nombre: 'Zulimar',parentesco: 'Madre',genero:'Femenino'},
            {nombre: 'Nidia',parentesco: 'Tia',genero:'Femenino'},
            {nombre: 'Veronica',parentesco: 'Abuela',genero:'Femenino'},
            {nombre: 'Jhonny',parentesco: 'Padre',genero:'Masculino'},
        ];
        alert(`
        ==> Mi familia es:
        ${JSON.stringify(familia)}
        ==> Tipo de datos de Objetos
        ${familia[0].nombre} es hijo de ${familia[4].nombre} y ${familia[1].nombre}
        ${familia[3].nombre} es madre de ${familia[1].nombre} y ${familia[2].nombre}
        `);
    }
    acceso(){
        let familia=[
            {nombre: 'Samuel',parentesco: 'Hijo',genero:'Masculino'},
            {nombre: 'Zulimar',parentesco: 'Madre',genero:'Femenino'},
            {nombre: 'Nidia',parentesco: 'Tia',genero:'Femenino'},
            {nombre: 'Veronica',parentesco: 'Abuela',genero:'Femenino'},
            {nombre: 'Jhonny',parentesco: 'Padre',genero:'Masculino'},
        ];
    alert(`
        ==> Acceso a datos especificos de mi familia:
        El nombre de mi papá es ${familia[4].nombre}
        El nombre de mi madre es ${familia[1].nombre}
        El nombre de mi tia es ${familia[2].nombre}
        El nombre de mi abuela es ${familia[3].nombre}
        El nombre mio es ${familia[0].nombre}
        `);}
        acceso2(){
            let libro=[
                {Autor: 'Louis Leithold',titulo: 'Calculo',editorial:'Oxford'},
                {Autor: 'James Stewart',titulo: 'Calculo de una Variable',editorial:'Cengage'},
                {Autor: 'Jorge Saenz',titulo:'Calculo Integral',editorial:'Hipotenusa'},
            ];
            alert(`
                ==> Acceso a datos especificos de libros:
                El autor del libro ${libro[0].titulo} es ${libro[0].Autor}
                El autor del libro ${libro[1].titulo} es ${libro[1].Autor}
                El autor del libro ${libro[2].titulo} es ${libro[2].Autor}
                El libro ${libro[0].titulo} fue publicado por la editorial ${libro[0].editorial}
                El libro ${libro[1].titulo} fue publicado por la editorial ${libro[1].editorial}
                El libro ${libro[2].titulo} fue publicado por la editorial ${libro[2].editorial}
                `);
        }
        Metodopush(){
            let audifonos=[
                {marca: 'Wireless',modelo: 'WF-1000XM4',color: 'Gris con bronce'},
                {marca:'Sony',modelo: 'F95',color: 'Negro'}
            ];
            alert(`
                ==> Antes de push de audifonos:
                ${JSON.stringify(audifonos)}
                `);
                audifonos.push( ':Bluetooth');
                alert(`
                ==> Despues de push de audifonos:
                ${JSON.stringify(audifonos)} 
                `); 
        }
        ejemploUnshift() {
            let futbolistas = [
                {nombre: 'Sergio Ramos',posicion: 'Defensa',equipo: 'Rayados'},
                {nombre: 'Cristiano Ronaldo',posicion: 'Delantero',equipo: 'Al Nassr'},];
            alert(`
        ==> Antes de unshift
        futbolistas = ${JSON.stringify(futbolistas)}
            `);
            futbolistas.unshift( ':Real Madrid');
            alert(`
        ==> Despues de futbolistas.unshift("Real Madrid")
        futbolistas = ${JSON.stringify(futbolistas)}
            `);
            futbolistas.unshift( ':5');
            alert(`
        ==> Despues de futbolistas.unshift(champions, ':5')
        futbolistas = ${JSON.stringify(futbolistas)}
            `);
          }
          ejemploPop(){
            let articulos=[
                {tipo: 'Cuaderno',marca: 'Fama',precio: '45'},
                {tipo: 'Lapiz',marca: 'trazos',precio: '15',}
            ];
            
            alert(`
                ==> Antes de pop
                articulos = ${JSON.stringify(articulos)}
            `);
            let lapiz=articulos.pop();
            alert(`
                ==> Despues de pop
                articulos = ${JSON.stringify(lapiz)}
            `);
          }
          ejemploShift(){
            let zapatos=[
                {tipo: 'deportivo',marca: 'Nike',precio: '25$'},
                {tipo: 'casual',marca: 'Benneli',precio: '35$'},
            ];
            alert(`
                ==> Antes de shift
                zapatos = ${JSON.stringify(zapatos)}
            `);
            zapatos.shift();
            alert(`
                ==> Despues de shift
                zapatos = ${JSON.stringify(zapatos)}
            `); 
    }
    ejemploSplice(){
        let camisas=[
            {tipo: 'chemise',marca: 'American Eagle',color: 'Naranja'},
            {tipo: 'camisa',marca: 'Assole & Bottoni',color: 'Gris'},
        ];
        alert(`
            ==> Antes de splice
            camisas = ${JSON.stringify(camisas)}
        `);
        camisas.splice(1,1,{tipo: 'camiseta',marca: 'GNZ',color: 'Azul y Negro'});
        alert(`
            ==> Despues de splice
            camisas = ${JSON.stringify(camisas)}
        `);
    }
    ejemploMap1(){
        let bolsos=[
            {marca:'Caruso',color:'Azul marino'},
            {marca:'Axces',color:'Azul claro'},
        ];
        alert(`
            ==> Antes de map
            bolsos = ${JSON.stringify(bolsos)}
            `);
           const marcas = bolsos.map((bolsos) => bolsos.marca);
            alert(`
            ==> Despues de map
            bolsos = ${'Solamente las marcas'} ${JSON.stringify(marcas)}
            `)
    }

    ejemploMap2(){
        let usbs=[
            {marca:'Kingston',capacidad:64},
            {marca:'Kingston',capacidad:16},
        ];
        alert(`
            ==> Antes de map
            usbs = ${JSON.stringify(usbs)}
            `);
            const capacidad = usbs.map((usbs) => usbs.capacidad+12);
            alert(`
            ==> Despues de map
            usbs = ${'Solamente las capacidades aumentadas en 12'} ${JSON.stringify(capacidad)}
            `);
    }

    recorridoTradicional(){
        // ciclo for 
        let gorras=[
            {color:'Negro',logo:'chicago bulls'},
            {color:'Marron',logo:'Gucci'},
            {color:'Negro conAzul',logo:'psycho bunny'}
        ];
       let i=0;
        for(i=0;i<gorras.length;i++){
            alert(`
            ==> Recorrido con for
            ${JSON.stringify(gorras[i])}
            `);
        }
        //ciclo while
        let gorras2=[
            {color:'Negro',logo:'chicago bulls'},
            {color:'Marron',logo:'Gucci'},
            {color:'Negro conAzul',logo:'psycho bunny'}
        ];
       let s=0;
        while(s<gorras2.length){
            alert(`
            ==> Recorrido con while
            ${JSON.stringify(gorras2[s])}
            `);
            s++;
        }
        // do while
        let gorras3=[
            {color:'Negro',logo:'chicago bulls'},
            {color:'Marron',logo:'Gucci'},
            {color:'Negro conAzul',logo:'psycho bunny'}
        ];
       let d=0;
        do{
            alert(`
            ==> Recorrido con do while
            ${JSON.stringify(gorras3[d])}
            `);
            d++;
        }while(d<gorras3.length);
    }

    ejemploForeach(){
        let marcadores=[
            {marca:"Sharpie",unidades:12,precio:1.50},
            {marca:"Ofimak",unidades:10,precio:1.00},
        ];
        marcadores.forEach((marcadores) => {
            alert(`
            ==> Recorrido con foreach
            ${JSON.stringify(marcadores)}
            `);
        });
        marcadores.forEach(function (item) {
            alert(`Recorrido con función tradicional: ${JSON.stringify(item)}`);
          });
    }
}
