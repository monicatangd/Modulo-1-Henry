'use strict';


// EJERCICIO 1
function nFactorial(n) {
   if(n===1||n===0) return 1;
   if(n<0) return 0;
   
   return n * nFactorial(n-1);
}


// EJERCICIO 2
function nFibonacci(n) {
   if(n<0) return null;
   if(n===0 || n===1) return n;

   return nFibonacci(n-1) + nFibonacci(n-2);
}


   


// EJERCICIO 3
function Queue() {
   this.queue=[];
}
Queue.prototype.enqueue = function(element){
   this.queue.push(element);
}

Queue.prototype.dequeue = function(){
   return this.queue.shift();
}

Queue.prototype.size = function(){
   return this.queue.length;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
