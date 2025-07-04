---
title: Introducción a Docker
description: '¿Te gustaría correr tus aplicaciones sin preocuparte por configuraciones, versiones o dependencias? En este artículo te presento Docker, una herramienta clave para cualquier desarrollador moderno. Aprendé desde cero qué es, cómo funciona y cómo crear tus propios contenedores paso a paso.'
img: introduction-to-docker.jpg
publishedAt: 2025-05-10
lastUpdate: 2025-05-27
ready: true
---

## 🐳 ¿Qué es Docker?

Docker es una plataforma que te permite **empaquetar, distribuir y ejecutar aplicaciones en contenedores**. Un contenedor es una unidad ligera y portable que incluye todo lo necesario para que una aplicación funcione: código, dependencias, sistema de archivos, etc.

Esto asegura que tu app funcione igual en cualquier entorno, eliminando el clásico “en mi máquina sí funciona”.

> Un contenedor es similar a una maquina virtual, pero mas liviano, rapido y distribuible.

> 🌐 **Página oficial**: <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">docker.com</a>

<br /><br />

## 📦 ¿Por qué usar Docker?

Docker soluciona muchos problemas comunes en el desarrollo:

- Aísla las aplicaciones entre sí.
- Facilita el despliegue en servidores o en la nube.
- Permite simular entornos reales en tu máquina.
- Acelera la configuración de nuevos proyectos.

Es una herramienta clave para desarrolladores backend, DevOps e incluso para frontend que quieren trabajar con APIs o bases de datos locales.

<br /><br />

## 🛠️ Instalación de Docker

1. **Descargá Docker Desktop** desde su <a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noopener noreferrer">🔗 página oficial</a>
2. Seguí los pasos de instalación.
3. Verificá que esté funcionando con:

```bash
docker --version
```

4. También podés correr una prueba:

```bash
docker run hello-world
```

<br /><br />

## ⚙️ Conceptos básicos

### 📁 Imagen

Una imagen es como una “plantilla” que contiene todo para crear un contenedor: sistema operativo, dependencias y tu app.

### 📦 Contenedor

Una instancia en ejecución de una imagen. Podés tener varios contenedores de una misma imagen.

### 🛳️ Dockerfile

Archivo donde definís cómo se construye tu imagen (qué instalar, cómo copiar tu código, etc.).

### 🏗️ Docker Hub

Repositorio público donde podés descargar imágenes ya hechas (por ejemplo: MySQL, Nginx, Node.js...).

<br /><br />

## 🧪 Primeros comandos

### Correr un contenedor:

```bash
docker run -d -p 8080:80 nginx
```

Este comando descarga la imagen de nginx y la corre en el puerto 8080.

### Ver contenedores activos:

```bash
docker ps
```

### Ver todas las imágenes descargadas:

```bash
docker images
```

### Detener un contenedor:

```bash
docker stop <id_contenedor>
```

<br /><br />

## 🧾 Crear un Dockerfile básico

Ejemplo para una app Node.js:

```DockerFile
# Imagen base
FROM node:18

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos
COPY package*.json ./
RUN npm install
COPY . .

# Puerto expuesto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
```

Después, construís la imagen:

```bash
docker build -t mi-app .
```

Y la ejecutás:

```bash
docker run -p 3000:3000 mi-app
```

<br /><br />

## ⚙️ Docker Compose

Compose te permite definir múltiples servicios (por ejemplo: una app y una base de datos) en un solo archivo docker-compose.yml. Esto facilita la orquestación de contenedores, para que puedas levantar todo con un solo comando.

Ejemplo básico:

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - '3000:3000'
  db:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: clave123
```

Luego corrés todo con:

```bash
docker-compose up
```

<br /><br />

## 🚢 Buenas prácticas

- **Usar imágenes oficiales**: Siempre que sea posible, usa imágenes oficiales de Docker Hub.
- **Mantener imágenes livianas**: Usa imágenes base ligeras (como Alpine) para reducir el tamaño.
- **Limpiar imágenes y contenedores**: Usa `docker system prune` para eliminar imágenes y contenedores no utilizados.
