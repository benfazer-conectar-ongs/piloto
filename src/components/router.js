var cards;

window.addEventListener("load", () => {
  setTimeout(() => {
    cards = document.querySelectorAll(".card");
    console.log(cards);
    cards.forEach((card) => {
      var dados;
      card.addEventListener("click", () => {
        console.log("router acionado");
        const data = card.id;
        dados = JSON.stringify(data);
        console.log(data);
        sessionStorage.setItem("chave", dados);
        //   console.log(JSON.parse(sessionStorage.getItem('chave')));
      });
    });
  }, 2000);
});

// var dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));
// console.log(dadosArquivados);
// document.querySelector('h1').innerHTML = dadosArquivados

// var passaValor= function(valor)
// {
//     window.location = "recebe_variavel.html?minhaVariavel="+valor;
// }

// var valorQueEuQueroPassar = 123;

//  passaValor(valorQueEuQueroPassar);

// // função pra ler querystring
// function queryString(parameter) {
//               var loc = location.search.substring(1, location.search.length);
//               var param_value = false;
//               var params = loc.split("&");
//               for (i=0; i<params.length;i++) {
//                   param_name = params[i].substring(0,params[i].indexOf('='));
//                   if (param_name == parameter) {
//                       param_value = params[i].substring(params[i].indexOf('=')+1)
//                   }
//               }
//               if (param_value) {
//                   return param_value;
//               }
//               else {
//                   return undefined;
//               }
//         }

// var variavel = queryString("minhaVariavel");
