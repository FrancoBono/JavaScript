window.prompt("Bienvenido a la Casa de Cambio. Ingrese su nombre:");

const monedas=[
    {
        id:"dolar",
        valor: 149
    },
    {
        id:"euro",
        valor: 120
    },
    {
        id:"libra",
        valor: 163
    }
]

function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    if(document.getElementById("uno").checked){
        resultado = valore / monedas[0].valor;
        alert("El cambio de Pesos a Dolares es: $" + resultado.toFixed(2));
    }
    else if(document.getElementById("dos").checked){
        resultado = valore / monedas[1].valor;
        alert("El cambio de Pesos a Euros es: €" + resultado.toFixed(2));
    }
    else if(document.getElementById("tres").checked){
        resultado = valore / monedas[2].valor;
        alert("El cambio de Pesos a Libras es: £" + resultado.toFixed(2));
    }
    else{
        alert("Error: Ingrese un numero y que moneda desea cotizar");
    }
}