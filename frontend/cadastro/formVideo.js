//Fazendo requests para a API

//Tenta recuperar o JSON da sala sendo Consultada, através do localStorage
var JsonsalaSendoConsultada = localStorage.getItem('salaSendoConsultada');

//Converte o JSON da sala recuperado do storage, para um objeto JavaScript
var salaSendoConsultada = JSON.parse(JsonsalaSendoConsultada)

var idSala = document.getElementById("idSala");
var nomeSala = document.getElementById("nomeSala");
var resposta = document.getElementById("resposta");

//Mostra os dados da sala que está sendo Consultada
idSala.value = salaSendoConsultada.id
nomeSala.value = salaSendoConsultada.nome


//Variaveis do cadastro do video
var request = null;

var idVideo = document.getElementById("idVideo");
var nomeVideo = document.getElementById("nomeVideo");
var linkVideo = document.getElementById("linkVideo");

var resposta = document.getElementById("resposta");

function createRequest() {
    try {
        request = new XMLHttpRequest();
    } catch (trymicrosoft) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (othermicrosoft) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (failed) {
                request = null;
            }
        }
    }

    if (request == null)
        alert("Error creating request object!");
}

function testarVideo() {
    if (idVideo.value == '') {
        alert('Obrigatório preencher o id da Video');
        return false;
    }
    if (nomeVideo.value == '') {
        alert('Obrigatório preencher o nome do Video');
        return false;
    }
    if (linkVideo.value == '') {
        alert('Obrigatório preencher o link do Video');
        return false;
    }

    return true;
}


function abrirTelaInicial() {
    window.location.href = '../index.html'
}


function cadastrarVideo() {

    if (testarVideo() == false) {
        return;
    }

    createRequest();
    var url = `http://127.0.0.1:8000/salas/${idSala}/videos/`;
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4) {

            //Quando dá certo, o servidor retorna 200
            if (request.status === 200) {
                var json = JSON.parse(request.responseText);

                alert(json.message);
                //Quando dá erro, qualquer código http diferente de 200 é retornada
            } else {
                alert('Erro ao cadastrar o video! ' + request.responseText);
            }
        }
        window.location.reload();
    };

    //Aqui é o JSON que vai ser enviado para o servidor
    var data = JSON.stringify({ "id": idVideo.value, "nome": nomeVideo.value, "link": linkVideo.value });
    request.send(data);

    
}