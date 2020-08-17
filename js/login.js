function submitEventHandler(evento) {
    evento.preventDefault();
    console.log(document.getElementById('nombre').value);
    console.log(document.getElementById('clave').value);
    sessionStorage.setItem('logueado', true);
    window.location.href = 'index.html';
    let nombre = document.getElementById('nombre').value;
    return true;
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById('formulario-login').addEventListener('submit', submitEventHandler);
});