'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array=[1];
  var i=2;
  while(num>1){
    if(num%i===0){
      array.push(i);
      num=num/i;
    }else{
      i++;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux=0;

  for(let i=0; i<array.length; i++){
    for(let j=1; j<array.length-i;j++){
      if(array[j-1]>array[j]){
        aux=array[j-1];
        array[j-1]=array[j];
        array[j]=aux;
      }
    }
  }
  return array;
  
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 for(let i=1; i<array.length;i++){
  var valueToInsert=array[i];
  var j=i-1;
  for(j; j>=0; j--){
    if(array[j]>valueToInsert) array[j+1]=array[j];
    else break;
  }
  array[j+1]=valueToInsert;
 }
 return array;
}

function swap(array, idx1, idx2){
  var aux=array[idx1];
  array[idx1]=array[idx2];
  array[idx2]=aux;
}
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for(let i=0; i<array.length-1; i++){
  var min=i;
  for(let j=i+1;j<array.length; j++){
    if(array[j]<array[min]) min=j;
  }
  if(min!==i) swap(array, i, min);
}
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
