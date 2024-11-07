function showNumbers(numero){
  for(let i = numero +1; i <= numero + 10; i++){
    console.log(i);
  }
}


function printEveryThree(){
  for (let i = 1; i <= 57; i += 3) {
console.log(i);    
  }
}


function totalSummation(){
  let suma = 0;
  for(let i = 0; i <= 100; i++){
console.log(i, suma += i);
  }
}


function showToUpperCase(texto) {
  console.log("practicando el uso de los ciclos o bucles".toUpperCase());
}



const numeros = [5,2,6,3,1,4,8,9,7,10,21,33,44,52];
function returnPairs(numeros){
let pares = numeros.filter(numero => numero % 2 === 0);
return console.log(pares);
}

returnPairs(numeros);


module.exports = {
  showNumbers,
  printEveryThree,
  totalSummation,
  showToUpperCase,
  returnPairs
  }
  