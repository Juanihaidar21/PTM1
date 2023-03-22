'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  // Si el número es 0 o 1, retornar 1
  if (n >= 0 && n < 2) {
    return 1;
  }
  // Si el número es mayor que 1, multiplicarlo por el factorial del número anterior
  return n * nFactorial(n - 1);
}


function nFibonacci(n) {
  // Caso base
  if (n === 0) {
    return 0;
  }
  // Caso base
  if (n === 1) {
    return 1;
  }
  // Recursivamente calcular el número de Fibonacci
  return nFibonacci(n - 2) + nFibonacci(n - 1);
}


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

// Definición de la función constructora Queue
function Queue() {
  this.array = []
}

// Método enqueue que agrega un elemento al final de la cola
Queue.prototype.enqueue = function(elemento){
  // Pseudo código:
  // agregar el elemento al final de this.array
  return this.array.push(elemento)
}

// Método dequeue que elimina el primer elemento de la cola y lo retorna
Queue.prototype.dequeue = function(){
  // Pseudo código:
  // guardar el primer elemento de this.array en una variable llamada elemento
  // eliminar el primer elemento de this.array
  // retornar el valor de la variable elemento
  return this.array.shift()
}

// Método size que retorna la cantidad de elementos en la cola
Queue.prototype.size = function (){
  // Pseudo código:
  // retornar la longitud de this.array
  return this.array.length;
}


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
