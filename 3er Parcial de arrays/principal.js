import Cl_mArticulo from "./Cl_mArticulo.js";
import Cl_mArticulos from "./Cl_mArticulos.js";
import Cl_mFactura from "./Cl_mFactura.js";
import Cl_mFacturas from "./Cl_mFacturas.js";

// Creación de datos de prueba
function crearDatosPrueba() {
  // 1. Crear artículos disponibles
  const articulo1 = new Cl_mArticulo("A001", "Laptop", 800);
  const articulo2 = new Cl_mArticulo("A002", "Mouse", 20);
  const articulo3 = new Cl_mArticulo("A003", "Teclado", 50);
  const articulo4 = new Cl_mArticulo("A004", "Monitor", 200);
  
  // Agregar cantidad a los artículos (para facturación)
  articulo1.cantidad = 2;
  articulo2.cantidad = 5;
  articulo3.cantidad = 3;
  articulo4.cantidad = 1;
  
  // 2. Crear facturas
  const factura1 = new Cl_mFactura("F001", "2023-05-01", [articulo1, articulo2]);
  const factura2 = new Cl_mFactura("F002", "2023-05-02", [articulo3, articulo4]);
  
  // 3. Crear listados
  const listadoArticulos = new Cl_mArticulos();
  listadoArticulos.articulos = [articulo1, articulo2, articulo3, articulo4];
  
  const listadoFacturas = new Cl_mFacturas();
  listadoFacturas.facturas = [factura1, factura2];
  
  return {
    articulo1, articulo2, articulo3, articulo4,
    factura1, factura2,
    listadoArticulos, listadoFacturas
  };
}

// Mostrar resultados
function mostrarResultados(datos) {
  console.log("=== DATOS DE PRUEBA ===");
  console.log("\n--- Artículos Disponibles ---");
  console.log(datos.listadoArticulos.articulos);
  
  console.log("\n--- Listado de Artículos ---");
  console.log(datos.listadoArticulos.listado());
  
  console.log("\n--- Factura 1 ---");
  console.log(datos.factura1.infoArticulo({articulos: datos.factura1.cntArts}));
  
  console.log("\n--- Factura 2 ---");
  console.log(datos.factura2.infoArticulo({articulos: datos.factura2.cntArts}));
  
  console.log("\n--- Listado de Facturas ---");
  console.log(datos.listadoFacturas.listado());
  
  console.log("\n--- Total Vendido ---");
  console.log("Total vendido: $" + datos.listadoFacturas.totalVendido());
}

// Ejecutar pruebas
const datosPrueba = crearDatosPrueba();
mostrarResultados(datosPrueba);