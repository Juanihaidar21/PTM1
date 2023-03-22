'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) { // si la longitud de array es menor o igual a 1
    return array; // retornar array 
  }

  
  let pivotIndex = Math.floor(Math.random() * array.length); // Tomar un pivote aleatorio con math.random()
  let pivot = array[pivotIndex]; //  tomar el valor del pivote con array[pivotIndex]
  
  // Separar los elementos menores y mayores que el pivote
  let menor = [];
                    // crear dos nuevos arrays: menor y mayor
  let mayor = [];
  for (let i = 0; i < array.length; i++) { // recorrer el array original con un ciclo for
    if (i === pivotIndex) { // si el índice actual es igual al índice del pivote
      continue; // continuar
    }
    if (array[i] < pivot) { // si el elemento actual es menor que el pivote
      menor.push(array[i]); // agregar el elemento actual a menor
    } else { // de lo contrario
      mayor.push(array[i]); // agregar el elemento actual a mayor
    }
  }


  // Unir recursivamente los dos subarrays con el metodo spread operator
  return [...quickSort(menor), pivot, ...quickSort(mayor)];
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

   // Comprobar si el array tiene un solo elemento \\
  if (array.length <= 1) {
    return array;
  }

  // Dividir el array en dos mitades \\
  let IndiceMid = Math.floor(array.length / 2);
  let mitadIzq = array.slice(0, IndiceMid);
  let mitadDer = array.slice(IndiceMid);

  // Llamar recursivamente a la función Merge Sort con (mitadIzq y mitadDer) como parametro;
  let SortedIzq = mergeSort(mitadIzq);
  let SortedDer = mergeSort(mitadDer);

  // Mezclar las dos mitades ordenadas en un solo array ordenado \\
  let merged = [];  // crear un nuevo array vacío llamado merged
  let indiceIzq = 0;
                    // crear dos contadores: leftIndex y rightIndex, inicializados en 0
  let indiceDer = 0;
  while (indiceIzq < SortedIzq.length && indiceDer < SortedDer.length) {
    if (SortedIzq[indiceIzq] < SortedDer[indiceDer]) { //  mientras leftIndex sea menor que la longitud de leftSorted y rightIndex sea menor que la longitud de rightSorted
      merged.push(SortedIzq[indiceIzq]); // agregar leftSorted[leftIndex] a merged 
      indiceIzq++; //
    } else { //       de lo contrario
      merged.push(SortedDer[indiceDer]); // agregar rightSorted[rightIndex] a merged
      indiceDer++; // y aumentar rightIndex en 1
    }
  }
  return merged.concat(SortedIzq.slice(indiceIzq)).concat(SortedDer.slice(indiceDer)); // agregar rightSorted[rightIndex] a merged
} // agregar rightSorted[rightIndex] a merged







// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
