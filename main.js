let nuevoDiv = document.createElement('div')
let usuario = document.querySelectorAll('.usuario')


class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
let usuario1 = new Usuario (prompt('Ingresa tu nombre'))
usuario.innerHTML = usuario1.nombre

localStorage.setItem('Usuario', JSON.stringify(usuario1.nombre))

let UsuarioActivo = JSON.parse(localStorage.getItem('Usuario'))
nuevoDiv.innerHTML = `<p> Hola` + UsuarioActivo
// document.body.append(nuevoDiv)
console.log('Hola ' + UsuarioActivo);



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

