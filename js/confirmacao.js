const body = document.getElementsByTagName("body");
const header = document.getElementById("header");

var asim = document.createElement("a");
var anao = document.createElement("a");

anao.addEventListener("click", () => {
    var div2 = document.getElementById("divmensagem");
    var div1 = document.getElementById("blurr");
    body[0].removeChild(div1);
    body[0].removeChild(div2);
})

function confirmacao(link,mensagem) {

    var element = document.createElement("div");
    element.classList.add("blurr");
    element.id = "blurr";
    body[0].insertBefore(element, header);

    var divmensagem = document.createElement("div");
    var h3 = document.createElement("h3");
    h3.id = "msg";
    h3.innerHTML = mensagem;

    asim.classList.add("btn");
    asim.classList.add("sucesso");
    asim.innerHTML = "Sim"
    asim.href = link

    anao.classList.add("btn");
    anao.classList.add("insucesso");
    anao.innerHTML = "Não"

    divmensagem.id = "divmensagem";
    divmensagem.classList.add("mensagem-form");
    divmensagem.appendChild(h3);
    divmensagem.appendChild(asim);
    divmensagem.appendChild(anao);

    body[0].insertBefore(divmensagem, header);

 
}


