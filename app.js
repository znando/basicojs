function pesquisar() {

  console.log("Pesquisou");

  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  campoPesquisa = campoPesquisa.toLowerCase();
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado, você precisa informar um atleta ou esporte.</p>";
    return;
  }

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tag = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tag = dado.tag.toLowerCase();
    
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
      resultados += `
    <div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Mais informações</a>
    </div>`;
    }
  }

  if (!resultados) {
    section.innerHTML = "<p>Nada foi encontrado para o termo informado.</p>";
    return;
  }

  section.innerHTML = resultados;
};

function limpar() {
  console.log("Limpou")
  let section = document.getElementById("resultados-pesquisa")
  section.innerHTML = "";
  let campoPesquisa = document.getElementById("campo-pesquisa");
  campoPesquisa.value = "";
};
