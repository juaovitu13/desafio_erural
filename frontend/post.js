function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraUsuario() {
    event.preventDefault()
    let url = "http://127.0.0.1:8000"
    let nome = document.getElementById("id").value
    let email = document.getElementById("nome").value
    console.log(id)
    console.log(nome)

    body = {
        "id": id,
        "name": nome
    }

    fazPost(url, body)
}