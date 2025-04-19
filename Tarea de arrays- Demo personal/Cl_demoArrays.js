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
        frutas = ${JSON.stringify(futbolistas)}
            `);
            futbolistas.unshift(equipo, ':Real Madrid');
            alert(`
        ==> Despues de futbolistas.unshift("Real Madrid")
        futbolistas = ${JSON.stringify(futbolistas)}
            `);
            futbolistas.unshift(champions, ':5');
            alert(`
        ==> Despues de futbolistas.unshift(champions, ':5')
        futbolistas = ${JSON.stringify(futbolistas)}
            `);
          }
    }
