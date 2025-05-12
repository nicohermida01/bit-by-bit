---
title: Introducción a Git
description: '¿Recién empezás a programar y no sabés cómo llevar control de tus proyectos? En este artículo vas a aprender paso a paso cómo usar Git, la herramienta de control de versiones más usada del mundo. Desde los primeros comandos hasta buenas prácticas y conexión con GitHub, todo explicado de forma clara y sencilla para que puedas dominarlo sin miedo.'
img: introduction-to-git.jpg
publishedAt: 2025-05-09
lastUpdate: 2025-05-09
---

## 📘 ¿Qué es Git y para qué se usa?

Git es un **sistema de control de versiones** distribuido. Su propósito principal es ayudarte a **registrar los cambios realizados en archivos de código** (y otros archivos) a lo largo del tiempo. Esto te permite volver a versiones anteriores, trabajar en equipo sin sobrescribir trabajo ajeno y mantener un historial claro del desarrollo de tus proyectos.

> Git no es lo mismo que GitHub. **Git** es la herramienta, mientras que **GitHub** es una plataforma que aloja repositorios Git de manera remota.

> 🌐 **Página oficial**: https://git-scm.com/

<br /><br />

## 🛠️ Instalación y configuración inicial

Para comenzar a usar Git, primero necesitás instalarlo:

- En Windows: [Descargar Git](https://git-scm.com/downloads/win)
- En macOS: `brew install git`
- En Linux: `sudo apt install git`

Una vez instalado, es importante configurarlo:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@example.com"
```

Esto permite que cada commit que hagas esté identificado correctamente.

<br /><br />

## 📁 Crear un repositorio

Un repositorio (repo) es un espacio donde Git guarda el historial de cambios de tu proyecto.

Para crear uno desde cero:

```bash
mkdir mi-proyecto
cd mi-proyecto
git init
```

Este comando crea un repositorio local y un directorio oculto `.git` que Git usa para rastrear cambios.

<br /><br />

## 📄 Seguimiento de archivos

Git reconoce los archivos en 3 estados:

- **Untracked**: Archivos nuevos que Git no está siguiendo.
- **Staged**: Archivos que están listos para ser confirmados (committed).
- **Committed**: Archivos que han sido confirmados y están en el historial de cambios.

Flujo básico:

```bash
git status               # Ver el estado de los archivos
git add archivo.txt      # Añadir al área de staging
git commit -m "Mensaje"  # Guardar el cambio en el historial
```

<br /><br />

## 📜 Historial de cambios

El historial es esencial para entender la evolución de tu proyecto.

```bash
git log     # Muestra todos los commits
git diff    # Muestra los cambios entre versiones
```

También podés ver detalles más legibles con:

```bash
git log --oneline --graph
```

<br /><br />

## 🌿 Trabajar con ramas

Las ramas permiten trabajar en funcionalidades sin afectar el código principal. La rama por defecto es **main** (o **master** en versiones antiguas).

```bash
git branch nueva-rama         # Crea una rama
git switch nueva-rama         # Cambia a la rama
git merge nueva-rama          # Une cambios a otra rama
```

Las ramas son ideales para separar desarrollo, pruebas y producción.

<br /><br />

## 🌐 GitHub y el trabajo remoto

Subir tu repositorio a GitHub te permite trabajar en equipo y tener una copia segura online.

1. Crear un repositorio en GitHub.
2. Conectar tu repo local:

```bash
git remote add origin https://github.com/usuario/repo.git
git branch -M main
git push -u origin main
```

Para bajar un repositorio existente:

```bash
git clone https://github.com/usuario/repo.git
```

Y para mantenerlo actualizado:

```bash
git pull origin main
```

> GitHub no es la única plataforma para alojar repositorios Git, pero es la más popular y cuenta con muchas características útiles para la colaboración. Otras alternativas incluyen `GitLab` y `Bitbucket`.

<br /><br />

## 🧹 Buenas prácticas

1. **Hacer commits frecuentes**: No esperes a tener una gran funcionalidad para hacer un commit. Realiza commits pequeños y significativos.
2. **Escribir mensajes claros**: Usa mensajes descriptivos para que otros (y vos mismo) entiendan el propósito del commit.
3. **Usar ramas**: Siempre que trabajes en una nueva funcionalidad, crea una rama para evitar conflictos.
4. **Mantener el repositorio limpio**: Elimina ramas que ya no necesites y organiza tu código.

Ejemplo de un archivo `.gitignore`:

```bash
node_modules/
.env
.DS_Store
```

<br /><br />

## 💡 Comandos útiles adicionales

- `git stash`: guarda cambios sin hacer commit, ideal si necesitás cambiar de rama rápido.
- `git reset`: deshace cambios recientes.
- `git revert`: revierte un commit creando uno nuevo.
- `git log --stat`: muestra estadísticas de los cambios por archivo.
- `git show`: muestra los detalles de un commit.
