const nmbrAleatorio = Math.floor(Math.random() * 10) + 1
const mensagem = document.getElementById('msg')
const enviar = document.getElementById('enviar')
let tentativas = 3

console.log(nmbrAleatorio)

enviar.addEventListener("click", function(evento){
    evento.preventDefault()
})

function verificarNumero() {
    const numeroDigitado = parseInt(document.getElementById("numero").value)

    if (numeroDigitado === nmbrAleatorio) {
      mensagem.innerHTML = `
      <p>Parabens! Você acertou!</p>
      <p>Deseja jogar novamente?</p>

      <button id="jogar-novamente" class="botão-jogar">Jogar Novamente!</button>
      `
    } else {
      tentativas--
      if (tentativas > 0) {
        mensagem.innerHTML += `
        <p>Número incorreto. Tente novamente. Restam ${tentativas} tentativas.</p>
        `
      } else 
        mensagem.innerHTML += `
        <p>Suas tentativas acabaram. O número correto era: ${nmbrAleatorio}</p>

        <button id="jogar-novamente" class="botao-jogar">Jogar Novamente!</button>
        `
      }
}