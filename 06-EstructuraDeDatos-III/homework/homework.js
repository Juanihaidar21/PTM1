'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
   constructor (value) {
      this.value = value; 
      this.left = null;
      this.right = null;
      }
      
      size(){
         let contador = 1;
      // definir contador como 1
         if(this.left) {
            contador += this.left.size()
      // si this.left existe entonces incrementar contador con el valor devuelto de this.left.tamaño()
         }
         if(this.right) {
            contador += this.right.size()
      // si this.right existe entonces incrementar contador con el valor devuelto de this.right.tamaño()
         }
         return contador;
      // devolver contador
      }
   
      insert(value){
         if( value >= this.value ){
      // si valor es mayor o igual que el valor de this entonces
            if(this.right){
               this.right.insert(value)
      // si this.right existe entonces llamar a insertar de this.right con valor
            }else{
               this.right = new BinarySearchTree(value)
      // sino crear un nuevo BinarySearchTree con valor y asignarlo a this.right
            }
            }else{
            if(this.left){
                  this.left.insert(value)
      // si this.left existe entonces llamar a insertar de this.left con valor
               }else{
                  this.left = new BinarySearchTree(value)
      // sino crear un nuevo BinarySearchTree con valor y asignarlo a this.left
            }
         }
      } 
      contains(value){
         if(this.value === value) return true;
      // si el valor de this es igual a valor entonces devolver verdadero
         if(value < this.value){
      // si valor es menor que el valor de this entonces
            if(this.left){
               return this.left.contains(value);
      // si this.left existe entonces devolver this.left.contiene(valor)
            }else{
               return false;
            }
            }else{
            if(this.right){
               return this.right.contains(value)
      //  si this.right existe entonces devolver this.right.contiene(valor)
            }else{
               return false;
         }
      }
   }
      depthFirstForEach(callback, order = 'in-order'){
         if(order === "pre-order") callback(this.value);
      // si order es igual a "pre-order" entonces llamar a la callback con el valor de this
         if(this.left) this.left.depthFirstForEach(callback, order) 
      // si this.left existe entonces llamar a depthFirstForEach de this.left con callback y order   
         if(order === "in-order") callback(this.value);
      // si order es igual a "in-order" entonces llamar a callback con el valor de this
         if(this.right) this.right.depthFirstForEach(callback, order)
      // si this.right existe entonces llamar a depthFirstForEach de this.right con callback y order
         if(order === "post-order") callback(this.value)   
      // si order es igual a "post-order" entonces llamar a callback con el valor de this
      } 
   
      breadthFirstForEach(callback){
         let queue = [this];
      // definir queue como una cola con el valor this
         while(queue.length > 0){
      // mientras queue tenga elementos hacer
            let node = queue.shift();
      //  definir node como el primer elemento de la cola queue y eliminarlo de la cola
            callback(node.value)
      // llamar a callback con el valor de node
            if(node.left) queue.push(node.left)
      // si node.left existe entonces agregar node.left a la cola queue
            if(node.right) queue.push(node.right)
      // si node.right existe entonces agregar node.right a la cola queue
         }
      }
      // prueba 
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
