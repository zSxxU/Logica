const form = document.querySelector('form')
const submit = document.querySelector('button')

form.addEventListener('button', (evento) => {
    evento.preventDefault()

    const nome = document.querySelector('#idade').value

    const idade = document.querySelector('#idade').value

    const linguagem = document.querySelector('#linguagem').value
})

submit.addEventListener("click", (evento) => {
    console.log("teste")
})
