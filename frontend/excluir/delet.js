function fazDelete(url) {
    let request = new XMLHttpRequest()
    request.open("DELETE", url, false)
    request.send()
    return request.responseText
}

function excluirLinha(sala) {
    console.log(sala)
    linha = document.deleteElement("tr");
    tdId = document.deleteElement("td");
    tdNome = document.deleteElement("td");
    tdId.innerHTML = sala.id
    tdNome.innerHTML = sala.nome

    linha.delete(tdId);
    linha.delete(tdNome);

    return linha;
}

function delet() {
    let data = fazDelete("http://127.0.0.1:8000/salas/id");
    let salas = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    salas.forEach(element => {
        let linha = excluirLinha(element);
        tabela.delete(linha);
    });

}

delet()