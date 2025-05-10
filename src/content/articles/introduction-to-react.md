---
title: Introducción a React
description: '¿Querés aprender React desde cero y no sabés por dónde empezar? En esta guía pensada para principiantes vas a descubrir todos los conceptos esenciales de React explicados paso a paso: componentes, props, estado, eventos, hooks y mucho más. Ideal para dar tus primeros pasos en el desarrollo frontend moderno con una base sólida y clara.'
img: introduction-to-react.jpg
publishedAt: 2025-05-09
lastUpdate: 2025-05-09
---

## ❓ ¿Qué es React y por qué deberías aprenderlo?

React es una biblioteca de JavaScript creada por Meta (antes Facebook) que permite construir interfaces de usuario de forma eficiente, reutilizable y declarativa. Su principal objetivo es facilitar la creación de aplicaciones web modernas que respondan a las acciones del usuario sin recargar la página.

React se ha convertido en una herramienta clave en el desarrollo frontend moderno, y es utilizada por empresas como Netflix, Airbnb, Instagram y muchas otras. Aprender React te abre las puertas a construir interfaces interactivas, mantener el código organizado y escalar tus proyectos con facilidad.

> 🌐 **Página oficial**: https://es.react.dev/

---

## ⚙️ Primeros pasos: creando tu primer proyecto en React

Para comenzar a trabajar con React, necesitás tener instalado Node.js y un gestor de paquetes como npm o yarn.
Hay dos formas populares de iniciar un proyecto React:

### Usando Vite (recomendado por su rapidez):

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

### Usando Create React App (CRA):

```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

Ambos métodos generan una estructura de archivos con todo lo necesario para empezar.

---

## 🧩 Entendiendo JSX: escribir HTML dentro de JavaScript

JSX (JavaScript XML) es una sintaxis que permite escribir código similar a HTML dentro de archivos JavaScript. Esto facilita la creación de interfaces visuales dentro del código.

```jsx
function Saludo() {
	return <h1>Hola, mundo</h1>
}
```

Aunque parece HTML, este código es transformado internamente por React en llamadas a funciones. JSX te permite combinar lógica y presentación de forma clara y ordenada.

> 💡 **Tip**: JSX siempre debe devolver un solo elemento padre (por eso usamos un `div` o un fragmento `<> </>` si necesitamos agrupar varios).

---

## 🧱 Componentes: la base de toda aplicación React

En React, las interfaces de usuario están compuestas por **componentes**, que son bloques reutilizables de código. Cada componente representa una parte de la interfaz: un botón, un formulario, un encabezado, etc.

Un componente básico en React se define como una función:

```jsx
function Boton() {
	return <button>Haz clic aquí</button>
}
```

Y se usa como si fuera una etiqueta HTML personalizada:

```jsx
<Boton />
```

Este enfoque modular permite dividir la UI en partes independientes que pueden desarrollarse, probarse y reutilizarse fácilmente.

---

## 📨 Props: cómo los componentes se comunican entre sí

Las **props** (abreviación de properties) permiten que los componentes reciban datos desde otros componentes, generalmente desde su “componente padre”.

```jsx
function Saludo(props) {
	return <h1>Hola, {props.nombre}</h1>
}

<Saludo nombre='Ana' />
<Saludo nombre='Pedro' />
```

Esto hace que los componentes sean más dinámicos y reutilizables, ya que pueden comportarse distinto dependiendo de la información que reciban.

---

## 🔁 Estado con `useState`: haciendo que tu UI reaccione

El **estado** (state) permite que los componentes recuerden información a lo largo del tiempo. En React, se gestiona con el hook `useState`.

```jsx
function Contador() {
	const [contador, setContador] = useState(0)

	return (
		<div>
			<p>Contador: {contador}</p>
			<button onClick={() => setContador(contador + 1)}>Sumar</button>
		</div>
	)
}
```

Cada vez que actualizamos el estado, el componente se vuelve a renderizar con el nuevo valor.

---

## 🖱️ Eventos en React: manejar interacciones del usuario

React maneja eventos como `onClick`, `onChange`, `onSubmit`, entre otros, de forma muy similar a JavaScript tradicional, pero con sintaxis camelCase y pasando funciones directamente:

```jsx
function Boton() {
	function manejarClick() {
		alert('¡Clickeado!')
	}

	return <button onClick={manejarClick}>Haz clic</button>
}
```

También es común usar funciones flecha directamente en el JSX.

---

## 🧪 Renderizado condicional: mostrar u ocultar contenido

A veces necesitamos mostrar contenido solo bajo ciertas condiciones. En React, esto se hace con operadores lógicos como && o expresiones ternarias:

```jsx
{
	usuarioLogueado && <p>Bienvenido, {usuario.nombre}</p>
}

{
	puntos > 0 ? <p>Ganaste</p> : <p>Intentalo otra vez</p>
}
```

Esto permite interfaces más dinámicas y adaptadas a distintos estados o datos.

---

## 📋 Listas y keys: renderizando múltiples elementos

Cuando querés mostrar varios elementos, usás .map() sobre un array. A cada elemento hay que asignarle una key única para ayudar a React a identificar qué cambió:

```jsx
const tareas = ['Estudiar', 'Practicar', 'Descansar']

<ul>
	{tareas.map((tarea, i) => (
		<li key={i}>{tarea}</li>
	))}
</ul>
```

> ⚠️ Aunque se puede usar el índice como key (`i`), lo ideal es usar un identificador único real si está disponible.

---

## 🧠 Hooks esenciales: `useState` y `useEffect`

Además de `useState`, otro hook fundamental es `useEffect`, que permite ejecutar efectos secundarios como llamadas a APIs, suscripciones, o manipulación del DOM:

```jsx
import { useEffect } from 'react'

useEffect(() => {
	console.log('El componente se montó')
}, [])
```

El segundo parámetro (`[]`) indica cuándo debe ejecutarse el efecto. Un array vacío significa que se ejecuta solo una vez, al montar el componente.

---

## 📝 Formularios e inputs controlados en React

Los **inputs controlados** son elementos de formulario cuyo valor es gestionado por el estado de React:

```jsx
function Formulario() {
	const [nombre, setNombre] = useState('')

	return <input value={nombre} onChange={e => setNombre(e.target.value)} />
}
```

Esto permite tener control total sobre los datos ingresados y aplicar validaciones fácilmente.

> 💡 **Tip**: existen librerias de npm como React Hook Form o Formik que facilitan la gestión de formularios complejos.

---

## 🌐 Llamadas a APIs: cómo obtener datos externos

React no trae herramientas de red por defecto, pero podés usar `fetch` o librerías como `axios` para obtener datos:

```jsx
useEffect(() => {
	fetch('https://api.example.com/usuarios')
		.then(res => res.json())
		.then(data => setUsuarios(data))
}, [])
```

Este patrón de `useEffect + fetch + useState` es muy común para trabajar con datos remotos.

---

## 🧼 Buenas prácticas al escribir código en React

1. **Componentes pequeños y reutilizables**: Divide tu UI en componentes pequeños y específicos.
2. **Usa propTypes o TypeScript**: Define tipos para tus props y estado para evitar errores.
3. **Nombra tus componentes y funciones de forma clara**: Usa nombres descriptivos que indiquen su propósito.
4. **Evita lógica compleja en el renderizado**: Mantén la lógica fuera del JSX para mayor claridad.
5. **Usa hooks personalizados**: Si tenés lógica repetida, considera crear un hook personalizado para encapsularla.
