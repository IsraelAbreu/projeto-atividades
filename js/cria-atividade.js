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

    if (descricao.length < 1 || descricao == undefined ) {
       window.alert("Você precisa preencher a descrição da atividade");
    }
    if (horario.length < 1 || horario === undefined) {
      window.alert("Você precisa preencher o horário da atividade");
    }

    if (descricao != null && descricao.length > 4 && horario != null && horario.length > 5) {
      atividade.id = Math.round(Math.random() * (100 - 1) + 1);
      atividade.descricao = descricao;
      atividade.horario = horario;

      salvarAtividade();
      manipularDom(atividade);
    }

}

function getAtividades () {
    let listaAtividades = Object.values(localStorage);

    listaAtividades.forEach((element) => {
      let atividade = JSON.parse(element);
      manipularDom(atividade)
    });
}

function manipularDom(atividade) {
    const listaAtividades = document.querySelector("#div-lista");
    let itemDaLista = document.createElement("p");
    itemDaLista.innerHTML = `${atividade.descricao} - ${formataData(
      atividade.horario
    )}`;
    listaAtividades.appendChild(itemDaLista);
}

function limparAtividades () {
    localStorage.clear()
    window.location.reload()
}

function formataData (data) {
  let dateForm = new Date(data)
  let dia = dateForm.getDate().toString().padStart(2, '0')
  let mes = (dateForm.getMonth() + 1).toString().padStart(2, '0')
  let ano = dateForm.getFullYear()
  let horas = dateForm.getHours().toString().padStart(2, '0')
  let minutos = dateForm.getMinutes().toString().padStart(2, '0')

  return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
}
