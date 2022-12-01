//Fazendo requests para a API


var idSala = document.getElementById("idSala");
var nomeSala = document.getElementById("nomeSala");
var resposta = document.getElementById("resposta");

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

function mostraDados(id) {
    let request = dados("http://127.0.0.1:8000/salas/{id_sala}");
    var json = JSON.parse(request.responseText);
    localStorage.setItem(id, nome);
}


function editarSala(id) {
    if (confirm("Tem certeza que deseja editar a sala de id: " + id + "?") == true) {
        let request = Editar("http://127.0.0.1:8000/salas/"+id);  
             
        //Quando dá certo, o servidor retorna 200
        if (request.status === 200) {
            var json = JSON.parse(request.responseText);
            var data = JSON.stringify({ "id": idSala.value, "nome": nomeSala.value });
            request.send(data);
            alert(json.message);
        //Quando dá erro, qualquer código http diferente de 200 é retornada
        } else {
           alert('Erro ao editar a sala! ' + request.responseText);
            }
    }  
};



//Abre a lista de salas cadastradas
function abrirTelaInicial() {
    window.location.href = '../index.html'
}