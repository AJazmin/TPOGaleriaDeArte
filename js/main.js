// Validar nombre: verificar null y numeros.
function validarForm(){
    let valido = true;
        for(let i = 0; i < document.validar.nombre.value.length; i++){
            for(let j = 0; j < 10; j++){
                if(parseInt(String(document.validar.nombre.value[i])) == j){
                    valido = false;
                }
            }
        }
        if(document.validar.nombre.value.length == 0) alert("Escriba su nombre");
        else if (!valido) alert("Caracter no valido");
        else {
            alert("¡Muchas gracias por enviar el formulario!");
            document.validar.submit();
        }
}
function submitForm(event){
    event.preventDefault();
    validarForm()
  }