document.getElementById("botonPedir").onclick = function(){
    var numero = document.getElementById("Libro").value;
    const req = new XMLHttpRequest();
    var ruta = 'https://jsonplaceholder.typicode.com/posts/';
    
    req.open('GET', ruta+numero);
    req.addEventListener('load', function(){
        if(req.status === 200 && req.readyState === 4){
            let res = JSON.parse(req.responseText);
            document.getElementById("IdLibro").innerHTML = res.id;
            document.getElementById("tituloLibro").innerHTML = (res.title);
            document.getElementById("descripcionLibro").innerHTML = (res.body);
            document.getElementById("status").innerHTML = ("Request Successful");
        }else {
            console.log("Bad Request");
        }
    })
    req.send();

}