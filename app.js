function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

        // Verifica se o campo, após remover espaços em branco, está vazio

    if (!campoPesquisa) {
        section.innerHTML = `<p style="color: white;">Nenhuma curiosidade encontrada, pesquise por algo relacionado a Cidade</p>`;
        return;
    }

    const callout = document.querySelector('.callout');

    // Animação de pulsos (opcional)
    setInterval(() => {
    callout.style.transform = 'translateY(-2px)';
    setTimeout(() => {
    callout.style.transform = 'translateY(0)';
        }, 100);
    }, 500);

    // Converte o termo de pesquisa para minúsculas
    let termoPesquisaMinusculo = campoPesquisa.trim().toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        // Converte o título do dado para minúsculas para a comparação
        let tituloMinusculo = dado.titulo.toLowerCase();
        let descricaoMinusculo = dado.descricao.toLowerCase();
        if (tituloMinusculo.includes(termoPesquisaMinusculo) || descricaoMinusculo.includes(termoPesquisaMinusculo) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
        `;
        }
    console.log(dado.titulo.includes(campoPesquisa))
        

    }

    if (!resultados) {
        resultados = `<p style="color: white;">Nada foi encontrado</p>`;
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}