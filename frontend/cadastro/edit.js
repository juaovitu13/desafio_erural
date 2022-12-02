
//Fazendo requests para a API

//Tenta recuperar o JSON da sala sendo editada, através do localStorage
var JsonsalaSendoEditata = localStorage.getItem('salaSendoEditada');

//Converte o JSON da sala recuperado do storage, para um objeto JavaScript
var salaSendoEditata = JSON.parse(JsonsalaSendoEditata)

var idSala = document.getElementById("idSala");
var nomeSala = document.getElementById("nomeSala");
var resposta = document.getElementById("resposta");

//Mostra os dados da sala que está sendo editata
idSala.value = salaSendoEditata.id
nomeSala.value = salaSendoEditata.nome

function Editar(url) {
    let request = new XMLHttpRequest()
    request.open("PUT", url, false)
    request.send();
    return request
}

function dados(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request
}
//funções para executar o metodo atualizar

function mostraDados(dados) {
    let request = dados("http://127.0.0.1:8000/salas/{id_sala}");
    var json = JSON.parse(request.responseText);
    localStorage.setItem(id, nome);
}

function editarSala() {
    let request = new XMLHttpRequest()

    var url = "http://127.0.0.1:8000/salas";
    request.open("PUT", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4) {

            //Quando dá certo, o servidor retorna 200
            if (request.status === 200) {
                var json = JSON.parse(request.responseText);

                abrirTelaInicial();

                alert(json.message);
                //Quando dá erro, qualquer código http diferente de 200 é retornada
            } else {
                alert('Erro ao cadastrar a sala! ' + request.responseText);
            }
        }

    };
    //Aqui é o JSON que vai ser enviado para o servidor
    var data = JSON.stringify({ "id": idSala.value, "nome": nomeSala.value });
    request.send(data);
}


//Abre a lista de salas cadastradas
function abrirTelaInicial() {
    window.location.href = '../index.html'
}
