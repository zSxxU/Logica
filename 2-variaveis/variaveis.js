function exibirMensagem() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const linguagem = document.getElementById("linguagem").value;
    const gosta = document.getElementById("gosta").value;

    const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"`;

    document.getElementById("mensagem").innerHTML = msg;

    if (gosta == 1){
      document.getElementById("mensagem").innerHTML += "<br>Muito bom! Continue estudando e você terá muito sucesso.";
    }
    if (gosta == 2){
      document.getElementById("mensagem").innerHTML += "<br>Ahh que pena... Já tentou aprender outras linguagens?";
    }
}