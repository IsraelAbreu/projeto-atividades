window.addEventListener("onload", getAtividades());

let atividade = {
    id: null,
    descricao: null,
    horario: null
}

function salvarAtividade () {
                            //chave             //valor
    localStorage.setItem(`${atividade.id}`, JSON.stringify(atividade))
}

function criarAtividade () {
    let descricao = document.getElementById('descricao').value
    let horario = document.getElementById('horario').value

    atividade.id = Math.round(Math.random() * (100 - 1) + 1)
    atividade.descricao = descricao
    atividade.horario = horario

    salvarAtividade()
    manipularDom(atividade)

}

function getAtividades () {
    let listaAtividades = Object.values(localStorage);
    console.log(listaAtividades);

    listaAtividades.forEach((element) => {
      let atividade = JSON.parse(element);
      manipularDom(atividade)
    });
}

function manipularDom(atividade) {
    const listaAtividades = document.querySelector("#ul-lista");
    let itemDaLista = document.createElement("li");
    itemDaLista.innerHTML = `${atividade.descricao} | ${atividade.horario}`;
    listaAtividades.appendChild(itemDaLista);
}

function limparAtividades () {
    localStorage.clear()
    window.location.reload()
}
