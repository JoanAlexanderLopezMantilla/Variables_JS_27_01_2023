// Se crea variable
let nombre = "Joan Alexander Lopez Mantilla"

// Se prueban todas los tipos de consola del navegador

console.log(nombre);//El mas utilizado para mostrar en consola del navegador
console.warn(nombre);//Muestra una advertencia
console.error(nombre);//Muestra un error
console.info(nombre);//Lo mismo que console.log

console.group(" Este es el grupo de consolas");
    console.log(nombre);//El mas utilizado para mostrar en consola del navegador
    console.warn(nombre);//Muestra una advertencia
    console.error(nombre);//Muestra un error
    console.info(nombre);//Lo mismo que console.log
console.groupEnd();

console.table([nombre])
console.table([{nombre_variable: nombre}]);

//console.clear();

console.time();
    console.log("Este es el tiempo que demora en ejecutar");
console.timeEnd();