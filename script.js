
window.onload = iniciar;

function iniciar() {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBotonCalcular);
}


function clickBotonCalcular() {
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;
  
    var imc = peso / (altura*2);

    alert("Su índice de masa corporal es: " + Math.round(imc));
}

