function validateForm(){
    let name = document.getElementById("name").value;
    //alert(name);
    let email = document.getElementById("email").value;
    //alert(email);
    let mensaje = document.getElementById('text');
    let valor = mensaje.value;
    //alert(valor);
    if (name == "" && email == "" && valor == "" ){
        alert ("por favor , complete los campos");
        return false;
    }else{
        alert("formulario enviado correctamente");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        let mensaje = document.getElementById('text').value = "";
        return false;
    }

}