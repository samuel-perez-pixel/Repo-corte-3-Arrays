export default class Cl_demoArrays {
    creacionArray() {
        let familia=[
            {nombre: 'Samuel',parentesco: 'Hijo',genero:'Masculino'},
            {nombre: 'Zulimar',parentesco: 'Madre',genero:'Femenino'},
            {nombre: 'Nidia',parentesco: 'Tia',genero:'Femenino'},
            {nombre: 'Veronica',parentesco: 'Abuela',genero:'Femenino'},
            {nombre: 'Jhonny',parentesco: 'Padre',genero:'Masculino'},
        ];
        console.log(`
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
    console.log(`
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
            console.log(`
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
            console.log(`
                ==> Antes de push de audifonos:
                ${JSON.stringify(audifonos)}
                `);
                audifonos.push( ':Bluetooth');
                console.log(`
                ==> Despues de push de audifonos:
                ${JSON.stringify(audifonos)} 
                `); 
        }
        ejemploUnshift() {
            let futbolistas = [
                {nombre: 'Sergio Ramos',posicion: 'Defensa',equipo: 'Rayados'},
                {nombre: 'Cristiano Ronaldo',posicion: 'Delantero',equipo: 'Al Nassr'},];
            console.log(`
        ==> Antes de unshift
        futbolistas = ${JSON.stringify(futbolistas)}
            `);
            futbolistas.unshift( ':Real Madrid');
            console.log(`
        ==> Despues de futbolistas.unshift("Real Madrid")
        futbolistas = ${JSON.stringify(futbolistas)}
            `);
            futbolistas.unshift( ':5');
            console.log(`
        ==> Despues de futbolistas.unshift(champions, ':5')
        futbolistas = ${JSON.stringify(futbolistas)}
            `);
          }
          ejemploPop(){
            let articulos=[
                {tipo: 'Cuaderno',marca: 'Fama',precio: '45'},
                {tipo: 'Lapiz',marca: 'trazos',precio: '15',}
            ];
            
            console.log(`
                ==> Antes de pop
                articulos = ${JSON.stringify(articulos)}
            `);
            let lapiz=articulos.pop();
            console.log(`
                ==> Despues de pop
                articulos = ${JSON.stringify(lapiz)}
            `);
          }
          ejemploShift(){
            let zapatos=[
                {tipo: 'deportivo',marca: 'Nike',precio: '25$'},
                {tipo: 'casual',marca: 'Benneli',precio: '35$'},
            ];
            console.log(`
                ==> Antes de shift
                zapatos = ${JSON.stringify(zapatos)}
            `);
            zapatos.shift();
            console.log(`
                ==> Despues de shift
                zapatos = ${JSON.stringify(zapatos)}
            `); 
    }
    ejemploSplice(){
        let camisas=[
            {tipo: 'chemise',marca: 'American Eagle',color: 'Naranja'},
            {tipo: 'camisa',marca: 'Assole & Bottoni',color: 'Gris'},
        ];
        console.log(`
            ==> Antes de splice
            camisas = ${JSON.stringify(camisas)}
        `);
        camisas.splice(1,1,{tipo: 'camiseta',marca: 'GNZ',color: 'Azul y Negro'});
        console.log(`
            ==> Despues de splice
            camisas = ${JSON.stringify(camisas)}
        `);
    }
    ejemploMap1(){
        let bolsos=[
            {marca:'Caruso',color:'Azul marino'},
            {marca:'Axces',color:'Azul claro'},
        ];
        console.log(`
            ==> Antes de map
            bolsos = ${JSON.stringify(bolsos)}
            `);
           const marcas = bolsos.map((bolsos) => bolsos.marca);
            console.log(`
            ==> Despues de map
            bolsos = ${'Solamente las marcas'} ${JSON.stringify(marcas)}
            `)
    }

    ejemploMap2(){
        let usbs=[
            {marca:'Kingston',capacidad:64},
            {marca:'Kingston',capacidad:16},
        ];
        console.log(`
            ==> Antes de map
            usbs = ${JSON.stringify(usbs)}
            `);
            const capacidad = usbs.map((usbs) => usbs.capacidad+12);
            console.log(`
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
            console.log(`
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
            console.log(`
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
            console.log(`
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
            console.log(`
            ==> Recorrido con foreach
            ${JSON.stringify(marcadores)}
            `);
        });
        marcadores.forEach(function (item) {
            console.log(`Recorrido con función tradicional: ${JSON.stringify(item)}`);
          });
    }
}
