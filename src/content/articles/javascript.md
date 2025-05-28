---
title: 'Introducción a JavaScript'
description: '¿Te interesa crear sitios web dinámicos y llenos de interactividad? En este artículo te presento JavaScript, el lenguaje clave para darle vida a tus proyectos web. Vas a aprender qué es, para qué se usa y cómo empezar a escribir tus propias líneas de código. Desde lo más básico hasta las herramientas que lo convierten en uno de los lenguajes más usados del mundo. Ideal si estás dando tus primeros pasos en el desarrollo web.'
img: javascript.jpg
publishedAt: 2025-05-27
lastUpdate: 2025-05-27
---

## 🟨 ¿Qué es JavaScript?

**JavaScript (JS)** es un lenguaje de programación **interpretado, dinámico y orientado a objetos**, utilizado principalmente para **crear interactividad en páginas web**. Se ejecuta en el navegador del usuario (como `Chrome`, `Firefox`, `Safari`, etc.) y permite que los sitios web hagan cosas como:

- Mostrar mensajes emergentes.
- Validar formularios antes de enviarlos.
- Crear menús interactivos.
- Cambiar el contenido de la página sin recargarla.
- Crear aplicaciones web completas (como juegos, redes sociales, etc.).

> Recomendación: para entender mejor cómo se maneja el desarrollo web, te recomendamos leer nuestro artículo sobre [Desarrollo Web](/article/web-development).

### ¿Para qué se usa JavaScript?

Hoy en dia, JavaScript se utiliza en una amplia variedad de aplicaciones, incluyendo:

- **En el navegador (frontend)**:
  - Manipular el contenido del HTML (DOM).
  - Controlar estilos CSS dinámicamente.
  - Escuchar eventos del usuario (clics, teclas, etc.).
  - Hacer peticiones a servidores (API) para obtener o enviar datos.
- **En el servidor (backend)**:
  - Usando entornos como `Node.js`, se puede crear servidores web y aplicaciones backend completamente con JavaScript.
- **Aplicaciones móviles**:
  - Utilizando frameworks como `React Native`, se pueden crear aplicaciones móviles nativas.
- **Aplicaciones de escritorio**:
  - Con herramientas como `Electron`, se pueden desarrollar aplicaciones de escritorio multiplataforma.

> DOM: El **Document Object Model** es una representación estructurada del documento HTML que permite a JavaScript interactuar con el contenido de la página. El DOM convierte el HTML en un árbol de nodos que JavaScript puede manipular.

<br /><br />

## ✅ ¿Cómo se usa JavaScript?

JavaScript se puede incluir en una página web de varias maneras:

- **En línea**: Directamente dentro de una etiqueta `<script>` en el HTML.

  ```html
  <script>
  	console.log('Hola, mundo!')
  </script>
  ```

- **En un archivo externo**: Enlazando un archivo `.js` externo con la etiqueta `<script>`.

  ```html
  <script src="script.js"></script>
  ```

- **A través de bibliotecas y frameworks**: Utilizando herramientas como `jQuery`, `React`, `Vue.js`, etc., que facilitan el desarrollo y añaden funcionalidades avanzadas.
- **En el backend**: Utilizando `Node.js` para crear aplicaciones del lado del servidor.

<br /><br />

## 🧩 Fundamentos básicos

Dado que este artículo no es un tutorial de javascript, sino una introducción a sus conceptos básicos, solo cubriremos la sintaxis y conceptos fundamentales en forma general.

- **Variables**: Se utilizan para almacenar datos. Puedes declarar variables con `var`, `let` o `const`.

  ```javascript
  let nombre = 'Juan'
  const edad = 30
  ```

- **Tipos de datos**: JavaScript tiene varios tipos de datos, incluyendo `string`, `number`, `boolean`, `object`, `array`, y `null`.

  ```javascript
  let texto = 'Hola, mundo' // String
  let numero = 42 // Number
  let esVerdadero = true // Boolean
  let objeto = { clave: 'valor' } // Object
  let arreglo = [1, 2, 3] // Array
  let nulo = null // Null
  ```

- **Operadores**: JavaScript tiene operadores aritméticos (`+`, `-`, `*`, `/`), lógicos (`&&`, `||`, `!`), de comparación (`==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`), entre otros.

  ```javascript
  let suma = 5 + 3 // Aritmético
  let esIgual = 5 === 5 // Comparación
  let esVerdadero = true && false // Lógico
  ```

- **Estructuras de control**: JavaScript utiliza estructuras como `if`, `else`, `switch`, `for`, `while` para controlar el flujo del programa.

  ```javascript
  if (edad >= 18) {
  	console.log('Eres mayor de edad')
  } else {
  	console.log('Eres menor de edad')
  }
  for (let i = 0; i < 5; i++) {
  	console.log(i) // Imprime números del 0 al 4
  }
  ```

- **Funciones**: Las funciones son bloques de código reutilizables que pueden recibir parámetros y devolver valores.

  ```javascript
  function saludar(nombre) {
  	return `Hola, ${nombre}!`
  }
  console.log(saludar('Juan')) // Imprime "Hola, Juan!"
  ```

- **Ámbito (Scope)**: JavaScript tiene un sistema de ámbito que determina la visibilidad de las variables. Las variables declaradas con `var` tienen un ámbito de función, mientras que las declaradas con `let` y `const` tienen un ámbito de bloque.

  ```javascript
  function ejemplo() {
  	var x = 10 // Ámbito de función
  	if (true) {
  		let y = 20 // Ámbito de bloque
  		console.log(x, y) // Imprime 10, 20
  	}
  	// console.log(y) // Error: y no está definida aquí
  }
  ejemplo()
  ```

- **Errores y consola**: Puedes utilizar `console.log()` para imprimir mensajes en la consola del navegador, lo cual es útil para depurar tu código. También puedes manejar errores con `try` y `catch`.

  ```javascript
  try {
  	// Código que puede generar un error
  	let resultado = 10 / 0 // Esto no genera error, pero podrías hacer algo que sí lo haga
  } catch (error) {
  	console.error('Ocurrió un error:', error)
  }
  ```

<br /><br />

## 🌳 Manipulación del DOM

Manipular el DOM es una de las tareas más comunes en JavaScript. Permite cambiar el contenido, estructura y estilo de una página web de forma dinámica. El DOM es una estructura de árbol que el navegador crea a partir del HTML que recibe cuando carga una página. Cada elemento del HTML se convierte en un nodo del árbol.

Para interactuar con el DOM, JavaScript proporciona el objeto `document`, que representa el documento HTML cargado en el navegador. A través de este objeto, puedes acceder a los elementos del DOM y modificarlos.

### Obtener elementos

Para manipular el DOM, primero necesitas obtener los elementos que deseas modificar. Puedes hacerlo de varias maneras:

- **Por ID**: Utilizando `document.getElementById()`.

  ```javascript
  const elemento = document.getElementById('miElemento')
  ```

- **Por clase**: Utilizando `document.getElementsByClassName()`.

  ```javascript
  const elementos = document.getElementsByClassName('miClase')
  ```

- **Por selector CSS**: Utilizando `document.querySelector()` o `document.querySelectorAll()`.

  ```javascript
  const elemento = document.querySelector('.miClase')
  const elementos = document.querySelectorAll('div')
  ```

### Cambiar contenido

Una vez que tienes el elemento, puedes cambiar su contenido utilizando la propiedad `innerHTML` o `textContent`.

```javascript
const elemento = document.getElementById('miElemento')
elemento.innerHTML = '<strong>Nuevo contenido</strong>' // Cambia el HTML interno
elemento.textContent = 'Nuevo contenido' // Cambia solo el texto
```

### Cambiar estilos

Puedes cambiar los estilos de un elemento utilizando la propiedad `style`.

```javascript
const elemento = document.getElementById('miElemento')
elemento.style.color = 'red' // Cambia el color del texto
elemento.style.backgroundColor = 'blue' // Cambia el color de fondo
```

### Escuchar eventos

Puedes agregar eventos a los elementos para que respondan a acciones del usuario, como clics o teclas presionadas.

```javascript
const boton = document.getElementById('miBoton')
boton.addEventListener('click', function () {
	alert('¡Botón clickeado!')
})
```

Existen muchos tipos de eventos, como `click`, `mouseover`, `keydown`, entre otros. Puedes consultar la <a href="https://developer.mozilla.org/es/docs/Web/Events" target="_blank" rel="noopener noreferrer">documentación de eventos</a> para más detalles.

### Crear y eliminar elementos

Puedes crear nuevos elementos y agregarlos al DOM, o eliminar elementos existentes.

```javascript
// Crear un nuevo elemento
const nuevoElemento = document.createElement('div')
nuevoElemento.textContent = 'Soy un nuevo div'

// Agregarlo al DOM
document.body.appendChild(nuevoElemento)

// Eliminar un elemento existente
const elementoAEliminar = document.getElementById('elementoAEliminar')
elementoAEliminar.remove()
```

<br /><br />

## ⏰ Temporizadores

JavaScript permite ejecutar código después de un cierto período de tiempo utilizando los métodos `setTimeout` y `setInterval`.

### setTimeout

`setTimeout` ejecuta una función después de un tiempo específico (en milisegundos).

```javascript
setTimeout(() => {
	console.log('Esto se ejecuta después de 2 segundos')
}, 2000)
```

Puedes cancelar un `setTimeout` utilizando `clearTimeout()` si es necesario.

```javascript
const timeoutId = setTimeout(() => {
	console.log('Esto no se ejecutará')
}, 5000)
clearTimeout(timeoutId) // Cancela el timeout
```

### setInterval

`setInterval` ejecuta una función repetidamente a intervalos específicos (en milisegundos).

```javascript
setInterval(() => {
	console.log('Esto se ejecuta cada 1 segundo')
}, 1000)
```

Igualmente, puedes cancelar un `setInterval` utilizando `clearInterval()`.

```javascript
const intervalId = setInterval(() => {
	console.log('Esto no se ejecutará más')
}, 1000)
clearInterval(intervalId) // Cancela el intervalo
```

<br /><br />

## ⏳ Sincronización y asincronía

JavaScript es un lenguaje **asíncrono por naturaleza**, lo que significa que puede ejecutar tareas en segundo plano sin bloquear la ejecución del código principal. Esto es especialmente útil para operaciones que pueden tardar, como peticiones a servidores o temporizadores.

```javascript
console.log('Inicio')

setTimeout(() => {
	console.log('Timeout')
}, 2000)

console.log('Fin')
```

En este ejemplo, el mensaje "Inicio" se imprime primero, luego "Fin", y finalmente "Timeout" después de 2 segundos. Esto demuestra cómo JavaScript puede manejar tareas asíncronas sin bloquear el hilo principal.

Para cambiar el comportamiento asíncrono, JavaScript utiliza **promesas** y **async/await**.

### Promesas

Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.

```javascript
function obtenerDatos() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Datos obtenidos')
		}, 2000)
	})
}
obtenerDatos()
	.then(resultado => {
		console.log(resultado) // Imprime "Datos obtenidos" después de 2 segundos
	})
	.catch(error => {
		console.error('Error:', error)
	})
```

### Async/Await

`async/await` es una sintaxis más sencilla para trabajar con promesas. Permite escribir código asíncrono de manera más legible, como si fuera síncrono.

```javascript
async function obtenerDatosAsync() {
	try {
		const resultado = await obtenerDatos()
		console.log(resultado) // Imprime "Datos obtenidos" después de 2 segundos
	} catch (error) {
		console.error('Error:', error)
	}
}
obtenerDatosAsync()
```
