var request = null;

var idSala = document.getElementById("idSala");
var nomeSala = document.getElementById("nomeSala");

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

function cadastrarSala() {

    if (testarSala() == false) {
        return;
    }

    createRequest();
    var url = "http://127.0.0.1:8000/salas";
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
                alert('Erro ao cadastrar a sala! ' + request.responseText);
            }
        }
    };

    //Aqui é o JSON que vai ser enviado para o servidor
    var data = JSON.stringify({ "id": idSala.value, "nome": nomeSala.value });
    request.send(data);

    /*
    //Este é o endereço da API que receberá a requisição para cadastrar uma nova sala
    var url = "http://127.0.0.1:8000/salas";
    request.open("GET", url, true);
    
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            var objResposta = JSON.parse(request.responseText);
            alert(objResposta.HttpStatusCode + '-' + objResposta.Messages[0]);
        }
    };
    request.send(null);
    */
}