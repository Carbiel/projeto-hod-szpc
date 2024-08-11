const botaoCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const informacoes = document.querySelectorAll('.informacoes');

botaoCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        marcarBotaoComoSelecionado(botao);

        esconderImagemAnteriormenteSelecionada();

        aparecerImagemCorrespondenteAoClicar(indice);

        esconderinformacaoDoDragaoAnterior();

        mostarInformacaoDoDragaoClicado(indice);
    })
})

function mostarInformacaoDoDragaoClicado(indice) {
    informacoes[indice].classList.add('ativa');
}

function esconderinformacaoDoDragaoAnterior() {
    const informacaoAtiva = document.querySelector('.informacoes.ativa');
    informacaoAtiva.classList.remove('ativa');
}

function aparecerImagemCorrespondenteAoClicar(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAnteriormenteSelecionada() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function marcarBotaoComoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
