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


//Funções para executar o delete

function fazDelete(url) {
    let request = new XMLHttpRequest()
    request.open("DELETE", url, false)
    request.send()
    return request
}

function deletarVideo(idVideo) {
    var idVideo = document.getElementById("idVideo").value;
    if (confirm("Tem certeza que deseja excluir o video de id: " + idVideo + "?") == true) {
        let request = fazDelete("http://127.0.0.1:8000/salas/" + salaSendoConsultada.id + "/videos/" + idVideo);

        //Quando dá certo, o servidor retorna 200
        if (request.status === 200) {
            var json = JSON.parse(request.responseText);
            alert(json.message);
            //Quando dá erro, qualquer código http diferente de 200 é retornada
        } else {
            alert('Erro ao excluir o video! ' + request.responseText);
        }
    }
    window.location.reload();
};

function abrirTelaInicial() {
    window.location.href = '../index.html'
}