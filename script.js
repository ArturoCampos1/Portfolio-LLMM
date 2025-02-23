// Un poquito de Js para darle alegría a la pagina

//Solo he implementado una funcion para redirigir y otra para evitar formularios vacios

function redirigir(){
    window.location.href = "index.html";
}

function alertaForm(){
    var inputNombre = document.getElementById("inputEmail4");
    var inputFecha = document.getElementById("inputPassword4");
    var inputEmail = document.getElementById("inputAddress");
    var inputTelefono = document.getElementById("inputAddress2");
    var inputMensaje = document.getElementById("inputCity");

    if(inputNombre.value == "" || inputFecha.value == "" || inputEmail.value == "" || inputTelefono.value == "" || inputMensaje.value == ""){
        alert("Todos los campos son obligatorios");
    } else {
        alert("Formulario enviado correctamente");
        redirigir();
    }

}