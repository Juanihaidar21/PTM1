'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this.tail = null;   
}
// Método para agregar un nuevo nodo al final de la lista
LinkedList.prototype.add = function(value) {
// El .add crea un nuevo nodo con el valor proporcionado
  const newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
    // Si la lista está vacía, establecer la cabeza como el nuevo nodo
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
// Si la lista no está vacía, recorrer la lista hasta el final
    }
    current.next = newNode;
  }
}

// Método para eliminar el último nodo de la lista y retornar su valor
LinkedList.prototype.remove = function() {
  // Si la lista está vacía, retornar null
  if (this.head === null) {
    return null;
  } 
  // Si la lista tiene un solo elemento, eliminarlo y retornar su valor
  else if (this.head.next === null) {
    const value = this.head.value;
    this.head = null;
    return value;
  } 
  // Si la lista tiene más de un elemento, encontrar el penúltimo nodo, eliminar el último y retornar su valor
  else {
    // Empezar desde el primer nodo
    let current = this.head;
    // Mientras el siguiente del siguiente nodo no sea nulo
    while (current.next.next !== null) {
      // Pasar al siguiente nodo
      current = current.next;
    }
    // Guardar el valor del último nodo
    const value = current.next.value;
    // Eliminar el último nodo
    current.next = null;
    // Retornar el valor del último nodo
    return value;
  }
}

LinkedList.prototype.search = function(x) {
  // definir el nodo actual como this.head
  let current = this.head;
  // si el nodo actual no existe, devolver null
  if (!current) return null;
  // si x es una función, buscar la primera aparición del valor de x en los nodos de la lista
  if (typeof x === 'function') {
  // si el valor actual cumple con la función x, devolver el valor actual
      if (x(current.value)) return current.value;
  // mientras que haya nodos siguientes, buscar la próxima aparición del valor de x que cumpla con la función
      while (current.next) {
          current = current.next;
          if (x(current.value)) return current.value;
      }
  // si no se encontró el valor de x, devolver null
      return null;
  // si x es una cadena, buscar la primera aparición de la cadena en los nodos de la lista
  } else if (typeof x === 'string') {
      // si el valor actual es igual a la cadena x, devolver el valor actual
      if (current.value === x) return current.value;
  // mientras que haya nodos siguientes, buscar la próxima aparición de la cadena x
      while (current.next) {
          current = current.next;
          if (current.value === x) return current.value;
      }
  // si no se encontró la cadena x, devolver null
      return null;
  // si x no es una función ni una cadena, devolver null
  }
}



function Node(value) {
  this.value = value;
  this.next = null;

}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  class HashTable {
    constructor() {
      this.numBuckets = 35;
      this.buckets = Array(this.numBuckets);
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.numBuckets;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.buckets[index]) {
        this.buckets[index] = {};
      }
      this.buckets[index][key] = value;
    }
  
    get(key) {
      const index = this.hash(key);
      if (!this.buckets[index] || !this.buckets[index][key]) {
        return null;
      }
      return this.buckets[index][key];
    }
  
    hasKey(key) {
      const index = this.hash(key);
      if (!this.buckets[index]) {
        return false;
      }
      return key in this.buckets[index];
    }}
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
