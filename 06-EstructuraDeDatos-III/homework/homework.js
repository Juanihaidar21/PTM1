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
         if(this.left) {
            contador += this.left.size()
         }
         if(this.right) {
            contador += this.right.size()
         }
         return contador;
      }
   
      insert(value){
         if( value >= this.value ){
            if(this.right){
               this.right.insert(value)
            }else{
               this.right = new BinarySearchTree(value)
            }
            }else{
            if(this.left){
                  this.left.insert(value)
               }else{
                  this.left = new BinarySearchTree(value)
            }
         }
      } 
      contains(value){
         if(this.value === value) return true;
         if(value < this.value){
            if(this.left){
               return this.left.contains(value);
            }else{
               return false;
            }
            }else{
            if(this.right){
               return this.right.contains(value)
            }else{
               return false;
         }
      }
   }
      depthFirstForEach(callback, order = 'in-order'){
         if(order === "pre-order") callback(this.value);
         if(this.left) this.left.depthFirstForEach(callback, order) 
         if(order === "in-order") callback(this.value);
         if(this.right) this.right.depthFirstForEach(callback, order)
         if(order === "post-order") callback(this.value)   
      } 
   
      breadthFirstForEach(callback){
         let queue = [this];
         while(queue.length > 0){
            let node = queue.shift();
            callback(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
         }
      }
      // prueba 
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
