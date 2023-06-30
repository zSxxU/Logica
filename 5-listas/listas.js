const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
};

function adicionarItem(nome, categoria) {
    listaDeCompras[categoria].push(nome)
    exibirListaDeCompras();
}

function exibirListaDeCompras() {
    const listaElement = document.getElementById("lista")
    listaElement.innerHTML = ""
    for (const categoria in listaDeCompras) {
        const itens = listaDeCompras[categoria]
        if (itens.length > 0) {
            const categoriaElement = document.createElement("li")
            categoriaElement.textContent = categoria
            listaElement.appendChild(categoriaElement)
            const itensElement = document.createElement("ul")
            categoriaElement.appendChild(itensElement)
        for (const item of itens) {
            const itemElement = document.createElement("li")
            itemElement.textContent = item
            itensElement.appendChild(itemElement)
        }
      }
    }
}

function adicionarItemNaLista() {
    const nome = document.getElementById("nome").value
    const categoria = document.getElementById("categoria").value
    adicionarItem(nome, categoria);
    document.getElementById("nome").value = ""
    document.getElementById("categoria").value = ""
}