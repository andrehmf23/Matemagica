
function obterParametroDaUrl(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

const id = obterParametroDaUrl('id');

// Use o valor do indicador para gerar o conteúdo dinamicamente
if (id >= 0 && id <= 100) {
    const elementoConteudo = document.getElementById('conteudo-dinamico');
    // Lógica para gerar o conteúdo com base no id... 
    console.log(dados)
    elementoConteudo.innerHTML = `<h1>Conteúdo para id ${interesses[0].titulo}</h1>
    <p>${interesses.conteudo}</p>`;
}