'use strict';

function BinarioADecimal(num) {
   //let array=num.split('').reverse();
   //array.map((array, index)=>array*2 **index).reduce((total, currentValue)=>total + currentValue);
 let array=num.split('');
 //['1', '1','0', '1']
 let decimal=0;
 for(let i=0; i<array.length; i++){
   let position=array.length -1 -i;
   decimal=decimal+array[i] * 2** position;
 }
 return decimal;

}

function DecimalABinario(num) {
let binary="";

while(num>0){
   binary=(num%2).toString() +binary;
   num=Math.floor(num/2);
}
return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
