
function pesquisar(){
    let busca = document.getElementById("busca-pesquisa").value.toLowerCase();
    let section = document.getElementById("resultados-pesquisa");


    if (!busca){
        section.innerHTML = "<h2>Nada encontrado!</h2>";
        return;
    };


    resultado = "";
    
    for (let dado of interesses){
        if (dado.titulo.toLowerCase().includes(busca)||dado.descricao.toLowerCase().includes(busca)){
            resultado += 
            `<a href="content.html?id=${dado.id}" target="_blank" class="link-resultado">
                <div class="item-resultado">
                    <h3>${dado.titulo}</h3>
                    <p class="descricao">${dado.descricao}</p>
                </div>
            </a>`;
        }
    }

    if (!resultado){
        section.innerHTML = "<h2>Nada encontrado!</h2>";
        return;
    };

    section.innerHTML = resultado;
}