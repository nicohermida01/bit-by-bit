---
title: Fundamentos de Programación
description: '¿Estás dando tus primeros pasos en el mundo de la programación y no sabés por dónde empezar? En este artículo vas a descubrir los conceptos esenciales que forman la base de todo lenguaje de programación: pensamiento lógico, variables, estructuras de control, funciones y más. Todo explicado de forma clara y sencilla para que puedas entender cómo funciona el código y desarrollarte como programador con bases sólidas desde el principio.'
img: programming-fundamentals.jpg
publishedAt: 2025-05-15
lastUpdate: 2025-05-15
ready: true
---

## 🖥️ Introducción a la Programación

La programación consiste en escribir instrucciones que una computadora puede entender y ejecutar. A través de un conjunto de órdenes precisas, conocido como **código**, le indicamos a las computadoras cómo deben comportarse, qué tareas realizar y en qué secuencia hacerlo. Este lenguaje entre humanos y computadoras es lo que permite poder construir desde simples calculadoras hasta complejos sistemas web, videojuegos o inteligencia artificial.

### Importancia de tener conocimientos sólidos

Los fundamentos nos enseñan cómo funciona realmente el código por debajo de frameworks y herramientas modernas: `estructuras de control`, `tipos de datos`, `funciones`, `algoritmos`, `estructuras de datos`, entre otros conceptos clave.

Con estos conocimientos, uno no solo puede escribir programas que funcionan, sino también entender **por qué funcionan**, **cómo mejorarlos** y **cómo adaptarlos** a nuevas situaciones. Aprender desde la base también permite moverse con más seguridad entre distintos lenguajes y tecnologías, porque los principios centrales son los mismos.

Un programador con bases sólidas sabe cómo elegir la estructura de datos adecuada, cómo optimizar su código, y entiende los límites y el comportamiento del sistema en el que trabaja. Tiene una mentalidad analítica, fundamentada, y puede adaptarse rápidamente a distintos entornos de desarrollo.

<br /><br />

## 🧠 Pensamiento lógico

El pensamiento lógico es la habilidad de descomponer un problema en partes más pequeñas, identificar patrones, establecer relaciones y encontrar soluciones efectivas paso a paso. Se trata de entender qué se necesita resolver y cómo hacerlo de la manera más eficiente posible.

> Por ejemplo, si una aplicación debe mostrar un mensaje solo cuando un usuario inicia sesión, eso implica un razonamiento lógico: “si el usuario está autenticado, mostrar el mensaje; si no, no hacer nada”.

<br /><br />

## 🛠️ Lenguajes de programación

Un lenguaje de programación es un conjunto de reglas sintácticas y semánticas que permiten a los humanos comunicarse con las computadoras. Así como usamos el lenguaje natural para interactuar entre personas, los lenguajes de programación sirven para dar instrucciones precisas a una máquina sobre qué debe hacer y cómo debe hacerlo.

### Tipos de lenguajes

Según la forma en que se ejecuta el código:

- **Lenguajes compilados**: estos lenguajes convierten el código fuente en código máquina antes de ejecutarlo. Son generalmente más rápidos en tiempo de ejecución. Ejemplos: `C`, `C++`, `Rust`.
- **Lenguajes interpretados**: en estos lenguajes, cuando se ejecuta el código, un intérprete traduce linea por línea el código fuente a código máquina, sin necesidad de compilar todo previamente. Ofrecen mayor flexibilidad y facilidad de depuración. Ejemplos: `Python`, `JavaScript`, `Ruby`.
- **Lenguajes híbridos**: combinan aspectos de compilación e interpretación. Por ejemplo, `Java` se compila a bytecode y luego se interpreta en la máquina virtual de Java (JVM).

También se pueden clasificar según el paradigma que adoptan:

- **Lenguajes imperativos**: se centran en describir cómo se debe realizar una tarea, utilizando instrucciones secuenciales, paso a paso. Ejemplos: `C`.

```c
  // Paso 1: Declarar una variable para almacenar un número
  int numero;

  // Paso 2: Pedir al usuario que ingrese un número
  printf("Ingresa un número: ");
  scanf("%d", &numero);

  // Paso 3: Verificar si el número es par o impar
  if (numero % 2 == 0) {
    printf("El número %d es par.\n", numero);
  } else {
    printf("El número %d es impar.\n", numero);
  }

  // Paso 4: Finalizar el programa
  return 0;
```

- **Lenguajes declarativos**: describen qué se quiere lograr sin especificar cómo hacerlo. Ejemplos: `SQL`.

```sql
  -- Seleccionar todos los usuarios mayores de 18 años
  SELECT * FROM usuarios WHERE edad > 18;
```

- **Lenguajes orientados a objetos**: organizan el código entorno a objetos y clases. Ejemplos: `Java`, `C#`, `Python`.

```java
  // Definición de una clase "Messi"
  class Messi {
    String nombre = "Lionel Messi";
    String frase = "Andá pa allá, bobo!";

    // Método para mostrar la frase
    void decirFrase() {
      System.out.println(this.frase);
    }
  }

  // Uso de la clase
  Messi miMessi = new Messi();
  miMessi.decirFrase(); // Salida: Andá pa allá, bobo!
```

- **Lenguajes funcionales**: se centran en el uso de funciones puras y la inmutabilidad de los datos. Ejemplos: `Haskell`, `Elixir`.

### Muchos lenguajes, un mismo concepto

A pesar de que existen muchos lenguajes de programación, todos comparten conceptos fundamentales. Cada lenguaje es diseñado con un propósito específico, adaptado a distintos tipos de problemas, contextos o preferencias de diseño.

Por eso, es común que un buen programador no se limite a un solo lenguaje, sino que entienda las fortalezas y limitaciones de varios, y elija el más adecuado según el contexto.

<br /><br />

## 🔢 Variables y tipos de datos

Una **variable** es un espacio en la memoria (RAM) de la computadora donde se almacena temporalmente un dato. Podés imaginarla como una “caja” con un nombre que contiene un valor, el cual puede cambiar a lo largo del tiempo. Su función principal es permitir que el programa manipule datos de forma dinámica.
Por ejemplo, en pseudocódigo:

```plaintext
  variable nombre = "Juan"
  variable edad = 25
```

En este caso, `nombre` es una variable que almacena el valor `"Juan"` y `edad` es otra variable que almacena el valor `25`. A lo largo del programa, podrías cambiar el valor de `nombre` a `"Pedro"` o de `edad` a `30`.

### Tipos de datos

Un **tipo de dato** es una clasificación que define qué tipo de valor puede almacenar una variable y qué operaciones se pueden realizar con él.

Los principales tipo de datos, también llamados **tipos primitivos**, son:

- **Números enteros**: representan números sin decimales. Ejemplo: `5`, `-3`, `42`.
- **Números de punto flotante**: representan números con decimales. Ejemplo: `3.14`, `-0.5`, `2.718`.
- **Cadenas de texto**: representan secuencias de caracteres. Ejemplo: `"Hola"`, `"123"`, `"¡Bienvenido!"`.
- **Booleanos**: representan valores lógicos, es decir, `verdadero` o `falso`. Son escenciales para tomar decisiones en los programas.
- **Caracter**: representan un solo carácter. Ejemplo: `'a'`, `'1'`, `'#'`. No todos los lenguajes lo distinguen del string.

<br /><br />

## ⚙️ Operadores

Los **operadores** son símbolos o palabras clave que permiten realizar operaciones sobre variables y valores. Son fundamentales para construir lógica dentro de los programas y permiten desde realizar cálculos matemáticos hasta tomar decisiones lógicas.

### Operadores aritméticos

Se usan para realizar operaciones matemáticas básicas:

| Operador | Descripción                  | Ejemplo      |
| -------- | ---------------------------- | ------------ |
| `+`      | Suma                         | `5 + 3 = 8`  |
| `-`      | Resta                        | `10 - 4 = 6` |
| `*`      | Multiplicación               | `2 * 3 = 6`  |
| `/`      | División                     | `10 / 2 = 5` |
| `%`      | Módulo (resto)               | `10 % 3 = 1` |
| `**`     | Potencia (algunos lenguajes) | `2 ** 3 = 8` |

### Operadores de comparación

Se usan para comparar dos valores. El resultado siempre es un valor booleano (true o false):

| Operador | Descripción       | Ejemplo         |
| -------- | ----------------- | --------------- |
| `==`     | Igual a           | `5 == 5 → true` |
| `!=`     | Distinto de       | `5 != 3 → true` |
| `>`      | Mayor que         | `7 > 4 → true`  |
| `<`      | Menor que         | `2 < 5 → true`  |
| `>=`     | Mayor o igual que | `5 >= 5 → true` |
| `<=`     | Menor o igual que | `3 <= 6 → true` |

### Operadores lógicos

Permiten combinar múltiples condiciones lógicas:

| Operador | Descripción                                      | Ejemplo                  |
| -------- | ------------------------------------------------ | ------------------------ |
| `AND`    | Verdadero si ambas condiciones son verdaderas    | `true AND false → false` |
| `OR`     | Verdadero si al menos una condición es verdadera | `true OR false → true`   |
| `NOT`    | Invierte el valor lógico de una condición        | `NOT true → false`       |

> **Nota**: En algunos lenguajes, como JavaScript, los operadores lógicos son `&&`, `||` y `!` respectivamente.

<br /><br />

## 🔄 Estructuras de control

Las **estructuras de control** permiten modificar el flujo de ejecución de un programa. Gracias a ellas, un programa puede **tomar decisiones** o **repetir acciones** dependiendo de ciertas condiciones.

Se dividen principalmente en dos tipos:

- **Condicionales**: ejecutan diferentes bloques de código según una condición.
- **Bucles o ciclos**: repiten un bloque de código mientras se cumpla una condición.

Sin estas estructuras, un programa solo ejecutaría líneas de código de forma secuencial, sin lógica ni adaptación a distintas situaciones.

### Condicionales

Las estructuras condicionales permiten que un programa responda a diferentes situaciones. Las más comunes son:

- **if - else**: ejecuta un bloque de código si se cumple una condición, y otro bloque si no se cumple.

```python
  edad = 20

  if edad >= 18:
      print("Eres mayor de edad")
  else:
      print("Eres menor de edad")
```

> El bloque `if` se ejecuta si la condición es verdadera, y el bloque `else` se ejecuta si la condición es falsa.

- **elif**: similar al `if - else` pero permite evaluar múltiples condiciones en una sola estructura.

```python
  nota = 7

  if nota >= 9:
      print("Excelente")
  elif nota >= 7:
      print("Aprobado")
  else:
      print("Desaprobado")
```

> El bloque `elif` se evalúa solo si la condición del `if` es falsa. Si la condición del `elif` es verdadera, se ejecuta su bloque de código y se ignoran los bloques restantes.

- **switch**: permite evaluar una variable contra múltiples valores posibles.

```javascript
let dia = 3

switch (dia) {
	case 1:
		console.log('Lunes')
		break
	case 2:
		console.log('Martes')
		break
	case 3:
		console.log('Miércoles')
		break
	default:
		console.log('Día no válido')
}
```

> El bloque `default` se ejecuta si ninguna de las condiciones anteriores se cumple.

### Bucles o ciclos

Permiten ejecutar repetidamente un bloque de código. Los más comunes son:

- **for**: se utiliza cuando se conoce de antemano cuántas veces se debe repetir un bloque de código.

```python
for i in range(5):
    print(i)
```

> El bloque de código dentro del `for` se ejecuta 5 veces, imprimiendo los números del 0 al 4.

- **while**: se utiliza cuando no se conoce de antemano cuántas veces se debe repetir un bloque de código. Se ejecuta mientras una condición sea verdadera.

```python
contador = 0
while contador < 5:
    print(contador)
    contador += 1
```

> El bloque de código dentro del `while` se ejecuta mientras `contador` sea menor que 5, imprimiendo los números del 0 al 4.

<br /><br />

## 🔧 Funciones y procedimientos

Las **funciones** y **procedimientos** son bloques de código reutilizables que permiten organizar y estructurar un programa. Ayudan a dividir el código en partes más pequeñas y manejables, facilitando su comprensión y mantenimiento.

Son herramientas esenciales para escribir código limpio y profesional. Aprender a usarlos correctamente marca una gran diferencia en la calidad de tus programas.

### Funciones

Una función es un conjunto de instrucciones que recibe entradas (`parámetros`), realiza una operación y devuelve un resultado (`valor de retorno`).

```python
def suma(a, b):
    return a + b

resultado = suma(3, 5)
print(resultado)  # Salida: 8
```

> En este ejemplo, la función `suma` toma dos parámetros (`a` y `b`), los suma y devuelve el resultado. Luego, se llama a la función con los valores `3` y `5`, y se imprime el resultado.

### Procedimientos

Un procedimiento también es un bloque de código reutilizable, pero no devuelve un valor (o devuelve implícitamente `None` en algunos lenguajes como Python). Se usa para ejecutar acciones, no para calcular un resultado.

```python
def imprimir_mensaje():
    print("Este es un procedimiento que no devuelve un valor.")

imprimir_mensaje()  # Salida: Este es un procedimiento que no devuelve un valor.
```

> En este ejemplo, el procedimiento `imprimir_mensaje` simplemente imprime un mensaje en la consola. No devuelve ningún valor, solo realiza una acción.

### Parámetros, argumentos y valores de retorno

- **Parámetros**: son las varibales declaradas en la función que permiten recibir valores de entrada. Se definen entre paréntesis al momento de declarar la función.
- **Argumentos**: Son los valores reales que se pasan a la función al momento de llamarla.
- **Valor de retorno**: es el resultado que devuelve la función al finalizar su ejecución.

<br /><br />

## 📚 Estructuras de datos

Las **estructuras de datos** son formas de organizar, almacenar y gestionar datos en la memoria de una computadora. Son esenciales para escribir programas eficientes y resolver problemas de forma óptima.

Permiten agrupar datos relacionados y realizar operaciones sobre ellos de manera efectiva. Existen diferentes tipos de estructuras de datos, cada una con sus propias características y usos.

Las estructuras mas básicas son: **registros**, **arreglos** y **listas enlazadas**. Existen otras más complejas como **pilas**, **colas**, **árboles** y **grafos**, pero estas son más avanzadas y se verán en otro momento.

> **Nota**: algunos lenguajes implementan sus propias estructuras de datos como `tuplas`, `diccionarios` o `sets`, que son variaciones de las estructuras mencionadas.

### Arreglos (`Arrays`)

Un **arreglo** es una colección de elementos que se acceden por índice. Tienen un tamaño fijo y almacenan elementos del mismo tipo. Son útiles para almacenar listas de datos.

```python
numeros = [1, 2, 3, 4, 5]
print(numeros[0])  # Salida: 1
```

> En este ejemplo, `numeros` es un arreglo que contiene cinco elementos. Se accede al primer elemento (índice 0) imprimiendo su valor.

### Listas enlazadas (`Linked Lists`)

Una **lista enlazada** es una colección de nodos, donde cada nodo contiene un valor y una referencia al siguiente nodo. A diferencia de los arreglos, las listas enlazadas no tienen un tamaño fijo y permiten insertar y eliminar elementos de manera eficiente.

Algunos lenguajes de alto nivel implementan los "arreglos" como listas enlazadas, permitiendo que sean dinámicos y crezcan o decrezcan según sea necesario.

### Registros (`Structs`)

Un **registro** es una estructura que agrupa diferentes tipos de datos bajo un mismo nombre. Permite almacenar información relacionada en un solo objeto.

```c
struct Persona {
  char nombre[50];
  int edad;
};
```

<br /><br />

## ✅ Buenas prácticas

Aprender a programar no es solo entender cómo funciona el código, sino también cómo escribirlo bien. Las buenas prácticas te ayudan a mantener tu código limpio, comprensible y fácil de mantener — tanto para vos como para otras personas que trabajen en el mismo proyecto.

- **Nombres descriptivos**: usa nombres claros y significativos para variables, funciones y clases. Esto ayuda a entender el propósito de cada elemento sin necesidad de leer su implementación.
- **Comentarios**: agrega comentarios en el código para explicar partes complejas o importantes. No abuses de ellos, pero úsalos cuando sea necesario para aclarar la lógica detrás de una sección de código.
  > Los comentarios son una herramienta para comunicarte con tu "yo del futuro" o con otros desarrolladores que lean tu código.
- **Consistencia**: mantén un estilo de codificación consistente en todo el proyecto. Esto incluye la indentación, el uso de espacios y la organización del código. Usa herramientas de formateo automático si es necesario.
- **Modularidad**: divide tu código en funciones y módulos pequeños y reutilizables. Esto facilita la lectura, el mantenimiento y la prueba del código.
