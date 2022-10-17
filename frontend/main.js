function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(sala) {
    
}

function main() {
    let data = fazGet("http://127.0.0.1:8000/salas");
    salas = JSON.parse(data);
    console.log()
   
}

main()