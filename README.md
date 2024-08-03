<h1 align="center"> Primer desafio de logica de programacion: explorando listas y funciones</h1>
<p>cambios que se realizaran en los archivos iniciales </p>


1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
```javascript
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';
```
2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
```javascript
<button onclick="mostrarMensaje();" class="button">Console</button>
```

En el `app.js`

```js
function mostrarMensaje() {
    console.log('El botón fue clicado!')
}
```

3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
En el `index.html` , agregamos en el `onclick` el siguiente código:

```javascript
<button onclick="preguntarCiudad();" class="button">Alert</button>
```

En el `app.js`

```js
function preguntarCiudad() {
   let nombreCiudad=prompt("Digite un nombre de una ciudad de Brasil por favor");
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`);

}
```

4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
En el `index.html` , agregamos en el `onclick` el siguiente código:

```js
<button onclick="mostrarAlert();" class="button">Alert</button>
```

En el `app.js`

```js
function mostrarAlert(){
    alert("Yo amo JS");
} 
```

5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
   En el `index.html` , agregamos en el `onclick` el siguiente código:

```js
 <button onclick="sumarNumeros();" class="button">Suma</button>
```

En el `app.js`

```js
function sumarNumeros(){
   let numero1=parseInt(prompt('Digite un número:'));
    let numero2=parseInt(prompt('Digite otro número:'));
    let resultado=numero1+numero2
    alert(`La suma de ${numero1} + ${numero2} es: ${resultado}`);
}
```
