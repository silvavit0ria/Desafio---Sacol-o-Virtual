let botaoBuscar = document.getElementById("btn-buscar");
let nomeItem = document.getElementById("nome-item");
let imagem = document.getElementById("imag");
let valor = document.getElementById("valor");

function NomeDigitado() {
  document.getElementById("item").innerHTML = `${nomeItem.value.toUpperCase()}`;
}

botaoBuscar.addEventListener("click", function () {
  if (/[A-Z]/.test(nomeItem.value)) {
    alert("Por favor, apenas letras minúsculas!");
    nomeItem.value = "";
    return;
  }
  switch (nomeItem.value) {
    case "banana":
      imagem.src = "image/5.png";
      NomeDigitado();
      valor.innerHTML = "R$ 3,00";
      Comprar();
      break;
    case "maça":
      imagem.src = "image/1.png";
      NomeDigitado();
      valor.innerHTML = `Valor : R$5,00 `;
      Comprar();
      break;
    case "melancia":
      imagem.src = "image/2.png";
      NomeDigitado();
      valor.innerHTML = `Valor : R$4,00 `;
      break;
    case "limao":
      imagem.src = "image/3.png";
      NomeDigitado();
      valor.innerHTML = `Valor : R$3,00 `;
      break;
    case "abacaxi":
      imagem.src = "image/4.png";
      NomeDigitado();
      valor.innerHTML = `Valor : R$11,00 `;
      break;
    case "cebola":
      imagem.src =
        "https://www.svicente.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw8f22640e/Produtos/29636-0000000004062-cebola%20kg-flv-1.jpg";
      NomeDigitado();
      valor.innerHTML = `Valor : R$13,00 `;
      break;
    case "cogumelo":
      imagem.src =
        "https://fungoshopdelivery.com/wp-content/uploads/2019/01/Cogumelo-Shiitake-2.jpg";
      NomeDigitado();
      valor.innerHTML = `Valor: R$7,00`;
      break;
    case "abacate":
      imagem.src =
        "https://saude.abril.com.br/wp-content/uploads/2017/07/abacate3.jpg?crop=1&resize=1212,909";
      NomeDigitado();
      valor.innerHTML = `Valor: R$9,00`;
      break;
    case "coco":
      imagem.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLR9Nlx36YBYIn8rkJzU-zw3Ryrbp8SRWR_A&s";
      NomeDigitado();
      valor.innerHTML = `Valor: R$15,00`;
      break;
    case "goiaba":
      imagem.src =
        "https://abrafrutas.org/wp-content/uploads/2023/04/destaque-goiaba.webp";
      NomeDigitado();
      valor.innerHTML = `Valor: R$6,00`;
      break;
    case "kiwi":
      imagem.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ldxcNoF34BRrO8zaBM7S4mcjRIXV3VF0gw&s";
      NomeDigitado();
      valor.innerHTML = `Valor: R$7,00`;
      break;
    case "laranja":
      imagem.src =
        "https://static.wixstatic.com/media/d40923_64569dd49a3a45c5b075dfe21d291463~mv2.jpg/v1/crop/x_2,y_46,w_1000,h_658/fill/w_400,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d40923_64569dd49a3a45c5b075dfe21d291463~mv2.jpg";
      NomeDigitado();
      valor.innerHTML = `Valor: R$5,00`;
      break;
    case "mamão","mamao":
      imagem.src =
        "https://vallefrutas.com.br/wp-content/uploads/papaya-01.png";
      NomeDigitado();
      valor.innerHTML = `Valor: R$8,00`;
      break;
    case "manga":
      imagem.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS41P0yJaGeOFSRNh6svlGRLEBi0M2c99s7lA&s";
      NomeDigitado();
      valor.innerHTML = `Valor: R$9,00`;
      break;
    case "maracujá",
    "maracuja":
      imagem.src =
        "https://agrojardim.cdn.magazord.com.br/img/2023/10/produto/240/muda-frutifera-de-maracuja-azedo-fruta-agrojardim.png?ims=fit-in/650x650/filters:fill(white)";
      NomeDigitado();
      valor.innerHTML = `Valor: R$7,00`;
      break;
      case "uva":
        imagem.src = 'https://cdn.awsli.com.br/2500x2500/2551/2551115/produto/209178313/uva-verde-min-gtfgiv.jpg';
        NomeDigitado();
        valor.innerHTML = `Valor: R$9,00`;
        break;

    default:
      if (nomeItem.value === "") {
        alert("Ops! Por favor, digite o nome do produto para continuar.");
      } else {
        confirm(
          `Ops! Parece que não temos ${nomeItem.value} em estoque. Não se preocupe, ele será adicionado à lista!`
        );
      }
      break;
  }
});
