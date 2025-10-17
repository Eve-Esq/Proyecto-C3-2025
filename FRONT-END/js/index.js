let inputCorreo= document.getElementById("txtCorreo");
let inputNombre= document.getElementById("txtNombre");
let inputContrasena= document.getElementById("txtContrasena");
let inputConfirmacion= document.getElementById("txtConfirmacion");
let btnGuardar = document.getElementById("btnGuardar");

function validar(){
    let estadoValidacion = true;

    if(inputCorreo.value == ""){
        estadoValidacion = false;
        inputCorreo.classList.add("inputError");
    }else{
        inputCorreo.classList.remove("inputError");
    }

    if(inputNombre.value == ""){
        estadoValidacion = false;
       inputNombre.classList.add("inputError");
    }else{
        inputNombre.classList.remove("inputError");
    }

    if(inputContrasena.value == ""){
        estadoValidacion = false;
       inputContrasena.classList.add("inputError");
    }else{
        inputContrasena.classList.remove("inputError");
    }

    if(inputConfirmacion.value == ""){
        estadoValidacion = false;
       inputConfirmacion.classList.add("inputError");
    }else{
        inputConfirmacion.classList.remove("inputError");
    }

    if((inputContrasena.value != inputConfirmacion.value) || inputContrasena.value == "" || inputConfirmacion == "" ){
        estadoValidacion = false;
        inputContrasena.classList.add("inputError");
        inputConfirmacion.classList.add("inputError");
    }else{
        inputContrasena.classList.remove("inputError");
        inputConfirmacion.classList.remove("inputError");
    }
    return estadoValidacion;


}
function guardar(){
    let validacion = validar();

    if(validacion == true){
        let usuario = {
            "correo":inputCorreo.value,
            "nombre":inputNombre.value,
            "contrasena": inputContrasena.value
        }
        console.log(usuario);
        Swal.fire({
        title: '¡Bien hecho!',
        text: 'Tu acción se realizó correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }else{
        Swal.fire({
        title: 'Faltan datos',
        text: 'Revisa los campos e inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
    }

}
btnGuardar.addEventListener("click", guardar);