function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(sala) {
    console.log(sala)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = sala.id
    tdNome.innerHTML = sala.nome

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}

//Abre o formulário de cadastro de salas
function abrirFormCadastro(){
    window.open('cadastro/form.html');
}

//deletar salas
function abrirFormDeletar(){
    window.open('excluir/delet.html');
}

function main() {
    let data = fazGet("http://127.0.0.1:8000/salas");
    let salas = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    salas.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });

   // Para cada sala
        // criar uma linha
        // adicionar na tabela
}

main()