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

    //Cria as duas colunas com os dados das salas
    tdId.innerHTML = sala.id
    tdNome.innerHTML = sala.nome

    //Cria a coluna com o botão para excluir
    tdExcluir = document.createElement("td");
    tdExcluir.innerHTML = '<button type="button" class="btn btn-danger" onclick="excluirSala(' + tdId.textContent + ')">Deletar</button>';
    tdExcluir.setAttribute("onclick", "id.excluirSala()");
    
    //Adiciona as colunas na linha
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdExcluir);


    return linha;
}

function excluirSala(id) {
    if (confirm("Tem certeza que deseja excluir a sala de id: " + id + "?") == true) {
        let data = fazDelete("http://127.0.0.1:8000/salas/id");
        let tabela = document.getElementById("tabela");
        tabela.deleteRow(i);
        // Aqui você inclui a chamada para a API, usando o verbo DELETE do http
        // Depois exibe a mensagem de sucesso e atualiza a página de salas, para remover o item excluido da grade
    }
}

//Abre o formulário de cadastro de salas
function abrirFormCadastro() {
    window.location.href ='cadastro/form.html'
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

    //Aqui a aplicação se inicia
    main()