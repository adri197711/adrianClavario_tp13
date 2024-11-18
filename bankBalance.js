

function calculateBalances(operaciones) {
  let depositos = 0;
  let retiros = 0;

  operaciones.forEach(operacion => {
    (operacion > 0) ? depositos += operacion : retiros += operacion;
  });

  let saldoActual = depositos - retiros;
  
  return { depositos, retiros, saldoActual }
}

function bankBalance(nombre, apellido,operaciones) {
  const {depositos,retiros,saldoActual} = calculateBalances(operaciones) 
  return `  
  Estimad@ ${nombre} ${apellido}:
  El monto total de los depósitos es de: $${depositos}.
  El monto total de los retiros es de: $${retiros}.
  Por lo tanto, su saldo actual en la cuenta es de: $${saldoActual}. 
  `}
  
  // const operacionesBancarias = [1000, -500, 1000, -300, -800, -5000, 10000];
  // console.log(bankBalance("Alina", "Clavario", operacionesBancarias));
  
  // const operacion = [10, -5, 10, -3, -80, -500, 100];
  // console.log(bankBalance("Ada", "Clavario", operacion));
  
  // const bancarias = [1000, -5, 10000, -3, 80000, -500, 10000];
  // console.log(bankBalance("Ana", "Veliz", bancarias));
  

  module.exports = bankBalance;
