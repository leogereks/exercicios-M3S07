function palindromo(string) {
  let inverte = "";
  for (i = string.length - 1; i >= 0; i--) {
    inverte += string[i];
  }
  return console.log(inverte == string);
}
palindromo("arara");

function maiorInt(array) {
  let maior = array[0];
  let posicao;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
      posicao = i;
    }
  }
  return console.log("Posição maior valor: " + posicao);
}
let array = [2, 3, 6, 7, 10, 1];
maiorInt(array);

function menorInt(array2) {
  let menor = array2[0];
  let posicao;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] < menor) {
      menor = array2[i];
      posicao = i;
    }
  }
  return console.log("Posição menor valor: " + posicao);
}
let array2 = [2, 4, 6, 7, 10, 0, -3];
menorInt(array2);

function maiorNome(string) {
  let palavra = str[0];
  for (i = 0; i < str.length; i++) {
    if (str[i].length > palavra.length) {
      palavra = str[i];
    }
  }
  return console.log("Maior nome: " + palavra);
}
let nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
maiorNome(nomes);

const numeros = {
  repete: function (numeros) {
    var maior = null;
    var ocorrenciasMaior = -1;

    for (i = 0; i < numeros.length; i++) {
      var ocorrencias = 1;
      if (this.verificaPrimo(numeros[i])) {
        for (var t = i + 1; t < numeros.length; t++) {
          if (numeros[i] == numeros[t]) {
            ocorrencias++;
          }
        }
      }

      if (ocorrencias > ocorrenciasMaior) {
        maior = numeros[i];
        ocorrenciasMaior = ocorrencias;
      }
    }
    return console.log(
      "numero que mais se repete:" + maior + ocorrenciasMaior + " repeticoes"
    );
  },
  verificaPrimo: function (numero) {
    let divisores = 0;
    for (aux = 0; aux <= numero; aux++) {
      if (numero % aux == 0) divisores++;
    }
    return divisores == 2;
  },
};
let arraynum = [2, 3, 2, 5, 8, 2, 3];
numeros.verificaOcorrencia(numeros);

function somaNumeroNatural(numeroNatural) {
  let soma = 0;
  for (i = 1; i <= numeroNatural; i++) {
    soma += i;
  }
  return soma;
}
console.log(somaNumeroNatural(5));

function checaString(palavra, final) {
  return palavra.endsWith(final);
}
let p1 = "roberto";
let f1 = "rto";
console.log(
  "Final " + f1 + " é final da palavra " + p1 + ": " + checaString(p1, f1)
);
let p2 = "joaofernando";
let f2 = "fernan";
console.log(
  "Final " + f2 + " é final da palavra " + p2 + ": " + checaString(p2, f2)
);
