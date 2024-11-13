const ask = require('readline-sync')
//codigo para criar perguntas ao usuario
let num1 = Number(ask.question("Digite o 1 numero:"))
//esse codigo está fazendo uma pergunta ao usuario.
let num2 = Number(ask.question("Digite o 2 numero:"))
//esse codigo está fazendo uma segunda pergunta ao usuario.
let operaçao = ask.question("Digite uma operacao:" + "+,-,*,/")
//esse codigo está falando para o usuario escolher um tipo de operação.
let resultado
//esse codigo cria uma variavel chamada resultado.
switch (operaçao) {
  case "+":                 //switch = Compara os valores escholhidos em diferentes operações.  

    resultado = num1 + num2   //case = Guarda a operação
    break;
                              
  case "-":
    resultado = num1 - num2   //break = ele espera a conta ser selecionada , ent transferi para o console.
    break;

  case "*":
    resultado = num1 * num2
    break;

  case "/":
    resultado = num1 / num2
    break;

}

console.log("O resultado é " + resultado)  //Resultado 
































































