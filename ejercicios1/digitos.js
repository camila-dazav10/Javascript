const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un número: ", function(input) {
  let numero = parseInt(input);

  if (numero >= 10 && numero <= 99) {
      console.log("El número " + numero + " es un número de dos dígitos positivo");
  } else if (numero <= -10 && numero >= -99) {
      console.log("El número " + numero + " es un número de dos dígitos negativo");
  } else {
      console.log("El número " + numero + " NO es un número de dos dígitos");
  }

  rl.close();
});
