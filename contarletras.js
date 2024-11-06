let nombre="Samuel Nuñez Moroyoqui"
function contarLetras (nombre){
let nombresinespacios=nombre.replace(/\s+/g," ");
return nombresinespacios.length;
}

console.log("numero de letras en el nombre: ",contarLetras(nombre));

