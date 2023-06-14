//Prova CC1MB Laura Roni Rocio
//  QUESTÃO 01  (@laurarrcn)
//explicação: if número < 2, então não é primo.
//depois deve-se verificar se o número é divisível por outro número, se for, não é primo.
//se não for, é primo. 
function numeroPrimo(numero) {
    if (numero < 2) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }

  //Para testar, colocar:
  //o resultado será true nesses exemplos:
  console.log(numeroPrimo(7)); 
  console.log(numeroPrimo(23));  
  //e falso nesses:
  console.log(numeroPrimo(32));  
  console.log(numeroPrimo(22)); 

//Listar todos os números primos (@laurarrcn)
for (let i = 1; i <= 1000; i++) {
    if (verificarPrimo(i)) {
        console.log(i);
    }
}

//-----------------------------------------------

//Questão 02 (@laurarrcn)
//Primeiro verificar se a senha tem no mínimo 8 caracteres
//depois verificar se tem pelo menos uma letra maiúscula
//uma minúscula
//e um número

function senhaValida(senha) {
    if (senha.length < 8) {
        return false;
    }
    const hasUpperCase = /[A-Z]/.test(senha);
 
   const hasLowerCase = /[a-z]/.test(senha);
    const hasNumber = /[0-9]/.test(senha);
    return hasUpperCase && hasLowerCase && hasNumber;
}

//Para testar, escreva o console.log, deverá aparecer true na primeira, uma vez que ela atende os critérios
//e false na segunda, por não atender os critérios


console.log(senhaValida("Computacao123"));  
console.log(senhaValida("false"));   


//---------------------------------------------------------


//Questão 03 (@laurarrcn)

function calcularFatorial(numberfatorial) {
    if (numberfatorial === 0 || numberfatorial === 1) {
      return 1;
    }
  
    let fatorial = 1;
  
    for (let i = 2; i <= numberfatorial; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
//Para testar, usar:
console.log(calcularFatorial(x)); 

//Para calcular faltorial de 1 a 10, usar:
for (let i = 1; i <= 10; i++) {
    console.log(`O fatorial de ${i} é: ${calcularFatorial(i)}`);
  }


  //----------------------------------------------------

//Questão 04 (@laurarrcn)
//Primeiro verifica se o número é negativo
//depois calcula a raiz quadrada do número
//depois verifica se a raiz é um número inteiro
function verificarQuadradoPerfeito(number) {
    if (number < 0) {
        return false;
    }
    const raizQuadrada = Math.sqrt(number);
    if (Number.isInteger(raizQuadrada)) {
        return true;
    } else {
        return false;
    }
}

//Aqui são exemplos de resultados, o primeiro e o segundo retornaram true pois atendem os critérios
//o terceiro retornará false por não atender aos critérios
console.log(verificarQuadradoPerfeito(25));
console.log(verificarQuadradoPerfeito(64));
console.log(verificarQuadradoPerfeito(15));   

