function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(sala) {
    
}

function main() {
    console.log(fazGet("http://127.0.0.1:8000/"));
   
}

main()