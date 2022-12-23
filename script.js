let num = document.querySelector("#stringNumber");
let lista = document.querySelector("#selForm");
let res = document.querySelector("#res");
let valores = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, val) {
  if (val.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumber(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    /*console.log(item);
    console.log(item.text);
    console.log(lista);*/
    res.innerHTML = "";

    num.value = "";
    num.focus();
  } else {
    alert("Número inválido ou já encontrado na lista");
  }
}

function finalizar() {
  if (valores.length == 0) {
    alert("Digite valores para continuar");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (i in valores) {
      if (valores[i] > maior) {
        maior = valores[i];
      }
      if (valores[i] < menor) {
        menor = valores[i];
      }

      soma += valores[i];
    }

    media = soma / total;

    res.innerHTML += `<p>O total de números adicionados foi ${total}</p>`;
    res.innerHTML += `<p>O maior número adicionado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor número adicionado foi ${menor}</p>`;
    res.innerHTML += `<p>A soma de todos os números é ${soma}</p>`;
    res.innerHTML += `<p>A média dos números é ${media}</p>`;
  }
}
