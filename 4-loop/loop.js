const nmbrAleatorio = gerarNumeroAleatorio()
const menorNmbr = 1
const maiorNmbr = 10

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10);
}

console.log(nmbrAleatorio)