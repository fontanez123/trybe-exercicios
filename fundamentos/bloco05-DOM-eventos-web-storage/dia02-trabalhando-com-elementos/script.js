let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");

let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "green";

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "Primeiro filho";

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

let texto = elementoOndeVoceEsta.nextSibling;

let terceiroFIlho = elementoOndeVoceEsta.nextElementSibling;

let elemento = document.createElement("section");
elemento.id = "Irmão"
let irmao1 = pai.appendChild(elemento);

let elemento1 = document.createElement("section");
elemento1.id = "Filho1"
let filhoDoElemento = elementoOndeVoceEsta.appendChild(elemento1);

let elemento2 = document.createElement("section");
elemento2.id = "Filho2"
let filhoDoFilhoDoElemento = primeiroFilhoDoFilho.appendChild(elemento2);

let terceiroFilho2 = filhoDoFilhoDoElemento.parentNode.parentNode.nextElementSibling;

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
      currentChildren.remove();
    }
  }

  const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
  segundoEUltimoFilhoDoFilho.remove();


