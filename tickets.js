const valorTicket=200;
let descuentoEstudiante=0.80;
let descuentoTrainee=0.50;
let descuentoJunior=0.15;

let nombre= document.getElementById("inputName");
let apellido= document.getElementById("inputApellido");
let mail= document.getElementById("inputMail");
let cantidad= document.getElementById("inputCantidad");
let categoria= document.getElementById("inputCategoria");
let total=document.getElementById("total");

function quitarError(){
    let error=document.querySelectorAll(".form-control, .form-select");
    for(let i=0; i< error.length; i++){
        error[i].classList.remove('is-invalid');
    }
}
function resetear(){
    quitarError();
    total.innerHTML="";
    nombre.value="";
    apellido.value="";
    mail.value="";
    cantidad.value="";
    categoria.value="Sin categoria";
}

function total_a_pagar(){
    quitarError();
    if(nombre.value===""){
        alert("Ingrese un nombre.");
        nombre.classList.add('is-invalid');
        nombre.focus();
        return;
    }
    if(apellido.value===""){
        alert("Ingrese un apellido.");
        apellido.classList.add('is-invalid');
        apellido.focus();
        return;
    }
    if(mail.value===""){
        alert("Ingrese un mail válido.");
        mail.classList.add('is-invalid');
        mail.focus();
        return;
    }
    if(isNaN(cantidad.value) || cantidad.value==0){
        alert("Ingrese una cantidad válida.");
        cantidad.classList.add('is-invalid');
        cantidad.focus();
        return;
    }

    let totalValor=cantidad.value*valorTicket;
    if(categoria.value=="Estudiante"){
        totalValor= totalValor-(totalValor*descuentoEstudiante);
    }
    if(categoria.value=="Trainee"){
        totalValor= totalValor-(totalValor*descuentoTrainee);
    }
    if(categoria.value=="Junior"){
        totalValor= totalValor-(totalValor*descuentoJunior);
    }
    total.innerHTML="Total a Pagar: $"+totalValor;
}
let boton_resumen=document.getElementById("boton_resumen");
boton_resumen.addEventListener('click',total_a_pagar);

let boton_borrar=document.getElementById("boton_borrar");
boton_borrar.addEventListener('click',resetear);