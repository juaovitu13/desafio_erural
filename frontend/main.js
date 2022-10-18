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

function cadastrarSala() {
    createRequest();
	
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
}