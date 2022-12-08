var salas = [];

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(sala) {

    this.salas.push(sala)

    console.log(sala)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");

    //Cria as duas colunas com os dados das salas
    tdId.innerHTML = sala.id
    tdNome.innerHTML = sala.nome

    //Cria a coluna com o botão para excluir
    tdExcluir = document.createElement("td");
    tdExcluir.innerHTML = 
        '<button type="button" class="btn btn-danger" onclick="excluirSala(' + tdId.textContent + ')">Deletar</button>' + 
        '<button type="button" class="btn btn-danger" onclick="editarSala(' + tdId.textContent + ')">Editar</button>';

    //Adiciona as colunas na linha
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdExcluir);


    return linha;
}

function fazDelete(url) {
    let request = new XMLHttpRequest()
    request.open("DELETE", url, false)
    request.send()
    return request
}

function excluirSala(id) {
    if (confirm("Tem certeza que deseja excluir a sala de id: " + id + "?") == true) {
        let request = fazDelete("http://127.0.0.1:8000/salas/"+id);        
        
        //Quando dá certo, o servidor retorna 200
        if (request.status === 200) {
            var json = JSON.parse(request.responseText);
            alert(json.message);
            //Quando dá erro, qualquer código http diferente de 200 é retornada
        } else {
            alert('Erro ao excluir a sala! ' + request.responseText);
        }
    }
    window.location.reload();    
};

//Abre o formulário de cadastro de salas
function abrirFormCadastro() {
    window.location.href = 'cadastro/form.html'
}

//Abre o formulário de atualizar salas
function editarSala(id) {
    window.location.href = 'cadastro/edit.html'
   
    //Localiza a sala no array de salas, através do id
    let salaPesquisadaNoArray = salas.find(element => element.id == id);

    //Gera o JSON da sala selecionada
    let JsonSalaPesquisadaNoArray = JSON.stringify(salaPesquisadaNoArray)

    //Salva o JSON da sala no localStorage
    localStorage.setItem('salaSendoEditada', JsonSalaPesquisadaNoArray);

    
}

function consultaId(){
    let id = document.querySelector('#id').value;

    if (id.length == ' '){
        alert('Você não digitou um valor');
        return;
    }
    let url = `http://127.0.0.1:8000/salas/${id}/`;

    fetch(url).then(function(response) {
        response.json().then(mostrarSala);

    });

}

function mostrarSala(dados) {
    let resultado = document.querySelector('#resultado');
    if(dados.erro){
        resultado.innerHTML = "Não foi possível localizar a sala";
    } else {
    resultado.innerHTML = `<p>Id: ${dados.id}</p>
                           <p>Nome: ${dados.nome}</p>`
    }
}


function main() {

    this.salas = []

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
