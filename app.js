let titulo=document.querySelector('h1');
titulo.innerHTML="Hora del desafío"

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" 
//siempre que se presione el botón "Console".
function mostrarMensaje() {
    console.log("El botón fue clicado");
}

//Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
//preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta 
//con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function preguntarCiudad(){
    let nombreCiudad=prompt("Digite un nombre de una ciudad de Brasil por favor");
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`)

}