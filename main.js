// Para ver cada ejercicio descomentar console.log o función correspondiente al ejercicio

// Para la declaración de variables se debe utilizar const
const productos = [
  { nombre: "manzana", precio: 500, stock: 30 },
  { nombre: "pera", precio: 400, stock: 0 },
  { nombre: "platano", precio: 2000, stock: 0 },
  { nombre: "lechuga", precio: 500, stock: 20 },
  { nombre: "palta", precio: 2000, stock: 0 },
  { nombre: "limon", precio: 300, stock: 0 },
];

//Mostrar con console.log cuántos productos quedan en stock | Para filtrar elementos utilizar filter.
//Simular al menos una vez un código asíncrono con Async/Await. Para esto se puede utilizar setTimeout para simular un código que no retorne inmediatamente el resultado.
const productosStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.filter((producto) => producto.stock > 0));
    }, 1500);
  });
};
async function mostrarProductos() {
  const datosAwait = await productosStock();
  console.log(datosAwait);
}
// mostrarProductos();

//Subir el precio de los productos cuando quede poca existencia (modificar el precio de un producto cuando algún producto tenga una existencia) | Para cambiar valores a objetos dentro del Array utilizar map.
const subirPrecioProductoUnico = productos.map((producto) => {
  if (producto.stock === 1) {
    return {
      ...producto,
      precio: producto.precio * 2,
    };
  }
  return producto;
});
// console.log(subirPrecioProductoUnico);


//Averiguar si pueden vender un producto (si hay suficiente en stock) | Para averiguar si algún producto o todos los productos cumplen con alguna condición utilizar some o every.
// Manejar errores con throw y Error.
const pedido = {
  nombre: "manzana",
  cantidad: 5,
};
const existeProducto = (arr, val) => {
  return arr.some(arrVal => val === arrVal.nombre);
}
const puedoVender = ((nombre, stock) => {
try {
  if (existeProducto(productos, nombre)) {
      let index = productos.findIndex(elem => elem.nombre === nombre);
      //   console.log(index)
      if (productos[index].stock >= stock) {
          return (console.log("puede vender"))
      }
      throw new Error("no hay suficiente stock");
  }
  throw new Error("El producto no existe");
} catch (e) {
  console.log(e)
}
});
// puedoVender(pedido.nombre, pedido.cantidad);


//Saber cuánto es el valor total de los productos | Para calcular totales se debe utilizar reduce donde se debe sumar los valores de cada producto y luego retornar el total.
const valorTotalProductos = () => {
  const array = [];
  let sumaTotal = 0;
  productos.forEach((producto) => {
    array.push(producto.precio * producto.stock);
  });
  array.reduce((acum, num) => {
    return (sumaTotal = acum + num);
  }, 0);
  return sumaTotal;
};
// console.log(valorTotalProductos())
