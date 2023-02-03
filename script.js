let botaoPalpite = document.querySelector("button");
let numRepetidos = document.querySelector(".numerosRepetidos");

let numAleatorio = Math.floor((Math.random() * 100) + 1);
let ultimosResultados = [];

numRepetidos.textContent += "Números palpitados: "

botaoPalpite.onclick = () => { 
    let inputPalpite = document.querySelector(".value");
    let numberPalpite = Number(inputPalpite.value);
    let corDica, mensagem;

    if(numberPalpite == numAleatorio) {
        mensagem = "Acertou";
        corDica = "#993399";
    } else if(numberPalpite > numAleatorio) {
        mensagem = "O valor é menor";
        corDica = "#0000ff";
    } else if(numberPalpite < numAleatorio) {
        mensagem = "O valor é maior";
        corDica = "#008000";
    }

    let dicaP = document.querySelector("p.dica");
    dicaP.style.backgroundColor = corDica;
    console.log(ultimosResultados.length);
    if(ultimosResultados.length > 10) {
        // mensagem = " === Número máximo de tentativas";
        throw new Error("Número máximo de tentativas");
    }
    dicaP.innerText = mensagem;
    ultimosResultados.push(numberPalpite);
    numRepetidos.textContent += `  "${numberPalpite}", `;
}


