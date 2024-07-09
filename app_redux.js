//La utilización de funciones puede simplificar la descripcion de elementos en 
//Pagina a traves de invocaciones que solo requieren de la modificacion de
//Variables para cambiar y asignar su respectivo valor en el elemento HTML

//Las variables fuera del bloque de funcion se llaman de ambito global
//Las variables dentro del bloque de funcion se llaman de ambito local
let numeroSecreto = "";
let intentos = 0;
let listaNumerosGenerados = [];
let cotaSuperior = 10;

function asignacionElementoConTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generadorNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*cotaSuperior)+1;
    console.log(`Numero secreto: ${numeroGenerado}`);
    //Esta el numero generado en la lista?
    if (listaNumerosGenerados.includes(numeroGenerado)){
        return generadorNumeroSecreto();
    } else {
        listaNumerosGenerados.push(numeroGenerado);
    }
    return numeroGenerado; 
 }
 
function condicionesIniciales() {
    asignacionElementoConTexto('h1','Adivina el Número Secreto');
    asignacionElementoConTexto('p',`Dame un número entre el 1 y el ${cotaSuperior}`);
    numeroSecreto = generadorNumeroSecreto();
    return;
}

condicionesIniciales();

function verificarIntento() {
    intentos++;
    console.log(`Cantidad de Intentos ${intentos}`);
    if (intentos === 3){
    asignacionElementoConTexto('p',"GAME OVER :("); 
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    limpiarValorUsuario();
    } else{
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // === Identidad en valor y en tipo de entrada, string o numerica
    console.log(numeroSecreto === numeroDeUsuario);
    
    if (numeroSecreto === numeroDeUsuario){
        asignacionElementoConTexto('p',`Felicidades, adivinaste el numero secreto y lo intentaste ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (numeroDeUsuario > numeroSecreto) { 
        asignacionElementoConTexto('p','El numero que pusiste es muy grande');
     } else {
        asignacionElementoConTexto('p','El numero que pusiste es muy pequeño');        
     }
     if (listaNumerosGenerados.length === cotaSuperior) {
        listaNumerosGenerados = [];
     }
     limpiarValorUsuario();
    console.log(listaNumerosGenerados);
     return;
    }
   

} //Aqui cierra la funcion verificarIntento

function limpiarValorUsuario() {
    document.getElementById('valorUsuario').value = "";
    return;
}

function reiniciarJuego() {
    /*Esta función necesita:
    Limpiar la caja
    Indicar mensaje de inicio "Dame un número entre el 1 y el cotaSuperior"
    Generar el numero aleatorio
    Volver a inhabilitar el botón de juego nuevo
    */
   limpiarValorUsuario();
   condicionesIniciales();
   document.getElementById("reiniciar").setAttribute("disabled", "true");
   return;
}
