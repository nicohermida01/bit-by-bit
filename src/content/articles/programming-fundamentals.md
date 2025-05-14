---
title: Fundamentos de Programación
description: 'asd'
img: programming-fundamentals.jpg
publishedAt: 2025-05-14
lastUpdate: 2025-05-14
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
