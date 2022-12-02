
//Tenta recuperar o JSON da sala sendo editada, através do localStorage
var JsonsalaSendoEditata = localStorage.getItem('salaSendoEditada');

//Converte o JSON da sala recuperado do storage, para um objeto JavaScript
var salaSendoEditata = JSON.parse(JsonsalaSendoEditata)


//Variaveis auxiliares

var request = null;
var idSala = document.getElementById("idSala");
var nomeSala = document.getElementById("nomeSala");
var resposta = document.getElementById("resposta");

//Mostra os dados da sala que está sendo editata
idSala.value = salaSendoEditata.id
nomeSala.value = salaSendoEditata.nome


//função que faz request
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

function testarSala() {
    if (idSala.value == '') {
        alert('Obrigatório preencher o id da sala');
        return false;
    }
    if (nomeSala.value == '') {
        alert('Obrigatório preencher o nome da sala');
        return false;
    }

    return true;
}

//Abre a lista de salas cadastradas
function abrirTelaInicial() {
    window.location.href = '../index.html'
}

//função que edita a sala
function editarSala() {

    if (testarSala() == false) {
        return;
    }

    createRequest();
    var url = "http://127.0.0.1:8000/salas";
    request.open("PUT", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4) {

            //Quando dá certo, o servidor retorna 200
            if (request.status === 200) {
                var json = JSON.parse(request.responseText);

                alert(json.message);
                //Quando dá erro, qualquer código http diferente de 200 é retornada
            } else {
                alert('Erro ao editar a sala! ' + request.responseText);
            }
        }
        window.location.reload();
    };

    //Aqui é o JSON que vai ser enviado para o servidor
    var data = JSON.stringify({ "id": idSala.value, "nome": nomeSala.value });
    request.send(data);

}


