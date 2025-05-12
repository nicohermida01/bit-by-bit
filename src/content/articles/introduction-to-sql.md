---
title: Introducción a SQL
description: '¿Estás empezando con bases de datos? En este artículo te enseño los fundamentos de SQL paso a paso: cómo consultar, filtrar y modificar datos, y cómo usar funciones de agregación para obtener estadísticas útiles. Con ejemplos claros y explicaciones simples, empezás a dominar SQL desde cero.'
img: introduction-to-sql.jpg
publishedAt: 2025-05-09
lastUpdate: 2025-05-09
---

## 📘 Introducción a SQL: Consultas paso a paso para principiantes

SQL (Structured Query Language) es el lenguaje estándar que se utiliza para interactuar con bases de datos relacionales. Con SQL podemos consultar, insertar, actualizar y eliminar datos de una base de datos, lo que lo convierte en una herramienta esencial para desarrolladores, analistas de datos y administradores de sistemas.

Muchas aplicaciones modernas dependen de bases de datos para funcionar correctamente. Sistemas como MySQL, PostgreSQL, SQLite y SQL Server utilizan SQL como lenguaje principal de consulta. Aprender SQL no solo te permite entender cómo las aplicaciones almacenan y recuperan información, sino que también es una habilidad muy valorada en el mundo laboral.

<br /><br />

## 🛠️ Primeros pasos con SQL

Antes de escribir consultas, es importante entender qué es una base de datos relacional: se trata de un conjunto de tablas relacionadas entre sí. Cada tabla contiene filas (registros) y columnas (campos), similares a una hoja de cálculo.

### Crear una base de datos y una tabla

```sql
CREATE DATABASE tienda;

USE tienda;

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL
);
```

Con estas instrucciones estamos creando una base de datos llamada `tienda` y una tabla llamada `productos` con algunos campos básicos.

<br /><br />

## 🔍 Consultas básicas

La consulta más común en SQL es `SELECT`, que se utiliza para recuperar datos de una tabla.

```sql
SELECT nombre, precio FROM productos;
```

Esta consulta devuelve los nombres y precios de todos los productos en la tabla `productos`.
Si queremos filtrar los resultados, podemos usar la cláusula `WHERE`:

```sql
SELECT * FROM productos WHERE precio < 100;
```

Esto nos devuelve todos los productos cuyo precio es menor a 100.

<br /><br />

## 📊 Filtrar y ordenar datos

El uso de `ORDER BY` nos permite ordenar los resultados de una consulta. Podemos ordenar por una o más columnas y especificar el orden (ascendente o descendente).

```sql
SELECT * FROM productos ORDER BY precio DESC;
```

Y si queremos limitar la cantidad de resultados devueltos, podemos usar `LIMIT`:

```sql
SELECT * FROM productos LIMIT 5;
```

También podemos usar operadores lógicos para hacer búsquedas más complejas:

```sql
SELECT * FROM productos WHERE precio < 100 AND stock > 0;
```

<br /><br />

## 📈 Funciones de agregación

Las funciones de agregación en SQL permiten realizar cálculos sobre un conjunto de filas y devolver un solo valor. Son especialmente útiles para generar reportes o estadísticas simples desde la base de datos.

### Principales funciones:

- `COUNT()`: cuenta la cantidad de filas.
- `SUM()`: suma los valores de una columna.
- `AVG()`: calcula el promedio de una columna.
- `MAX()`: devuelve el valor máximo de una columna.
- `MIN()`: devuelve el valor mínimo de una columna.

```sql
-- Cuántos productos hay
SELECT COUNT(*) FROM productos;

-- Suma total del stock displonible
SELECT SUM(stock) FROM productos;

-- Precio promedio de los productos
SELECT AVG(precio) FROM productos;

-- Producto más caro y más barato
SELECT MAX(precio) FROM productos;
SELECT MIN(precio) FROM productos;
```

Estas funciones también pueden combinarse con WHERE para aplicar filtros:

```sql
-- Total de stock solo de productos baratos
SELECT SUM(stock) FROM productos WHERE precio < 50;
```

<br /><br />

## ✏️ Insertar, actualizar y eliminar datos

Además de consultar datos, con SQL también podemos modificar el contenido de la base de datos.

### Insertar un nuevo producto

```sql
INSERT INTO productos (nombre, precio, stock)
VALUES ('Teclado', 45.99, 10);
```

### Actualizar información

```sql
UPDATE productos
SET stock = 20
WHERE nombre = 'Teclado';
```

### Eliminar un producto

```sql
DELETE FROM productos
WHERE nombre = 'Teclado';
```
