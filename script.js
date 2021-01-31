let bloco = document.getElementById('bloco')
let botaoVermelho = document.getElementById('botaoVermelho')
let botaoAzul = document.getElementById('botaoAzul')
let botaoAmarelo = document.getElementById('botaoAmarelo')

botaoVermelho.addEventListener('click', trocaParaVermelho )
botaoAzul.addEventListener('click', trocaParaAzul)
botaoAmarelo.addEventListener('click', trocaParaAmarelo )

function trocaParaVermelho() {
    bloco.style.backgroundColor = 'red'
}
function trocaParaAzul() {
    bloco.style.backgroundColor = 'blue'
}
function trocaParaAmarelo() {
    bloco.style.backgroundColor = 'yellow'
}