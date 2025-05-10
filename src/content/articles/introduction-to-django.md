---
title: Introducción a Django
description: '¿Querés aprender a crear sitios web con Python? En este artículo te explico paso a paso qué es Django, cómo instalarlo y cómo construir tus primeras aplicaciones web de forma rápida y profesional. Ideal para principiantes que quieren empezar en el mundo del desarrollo backend con herramientas reales.'
img: introduction-to-django.jpg
publishedAt: 2025-05-09
lastUpdate: 2025-05-09
---

## 📘 ¿Qué es Django?

Django es un **framework de desarrollo web para Python** que permite construir aplicaciones de manera rápida, segura y escalable. Fue creado por desarrolladores experimentados que buscaban una forma más eficiente de desarrollar sitios web sin reinventar la rueda en cada proyecto.

Su lema lo dice todo: **“Django hace que el desarrollo web sea divertido y limpio”**.

Algunas de sus características más destacadas:

- Basado en el lenguaje Python.
- Incluye un ORM para interactuar con bases de datos.
- Sistema de plantillas integrado.
- Administración automática de modelos.
- Seguridad incorporada contra ataques comunes (XSS, CSRF, SQL Injection, etc).

> 🌐 **Página oficial**: https://www.djangoproject.com

---

## 🎯 ¿Para qué se usa Django?

Django es ideal para construir sitios web completos, APIs o incluso servicios backend para aplicaciones móviles.

**Casos de uso comunes**:

- Blogs o portales de noticias.
- Tiendas en línea.
- Aplicaciones empresariales.
- Sistemas de gestión interna.
- APIs RESTful (junto con Django REST Framework).

**Ventajas principales**:

- Gran cantidad de funcionalidades listas para usar.
- Enfoque en la reutilización de componentes.
- Comunidad activa y excelente documentación.

---

## ⚙️ Instalación y configuración inicial

Antes de comenzar, necesitás tener instalado Python y pip. Recomendamos trabajar dentro de un **entorno virtual** para mantener tu proyecto aislado:

```bash
python -m venv env
source env/bin/activate   # En Windows: env\Scripts\activate
```

Instalá Django con pip:

```bash
pip install django
```

Y para crear un nuevo proyecto:

```bash
django-admin startproject mi_proyecto
cd mi_proyecto
python manage.py runserver
```

Ya tenés tu primera app Django corriendo en `http://127.0.0.1:8000`.

---

## 🏗️ Conceptos fundamentales

Django sigue el patrón **MTV (Model-Template-View)**:

- **Model**: define la estructura de los datos.
- **Template**: define cómo se presentan los datos (HTML).
- **View**: la lógica que conecta los datos con las vistas.

Dentro del proyecto, podés crear múltiples apps. Cada app es un módulo que cumple una función específica. Por ejemplo, una app para manejar usuarios, otra para productos, etc.

---

## 🛠️ Crear una aplicación simple paso a paso

Supongamos que queremos crear una app de publicaciones. Podés iniciar una nueva app así:

```bash
python manage.py startapp blog
```

En `models.py` definís tus modelos:

```python
from django.db import models

class Post(models.Model):
    titulo = models.CharField(max_length=100)
    contenido = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)
```

Aplicás las migraciones:

```bash
python manage.py makemigrations
python manage.py migrate
```

En `views.py`, creás una vista básica:

```python
from django.http import HttpResponse

def inicio(request):
    return HttpResponse("Hola desde Django")
```

Y en `urls.py`, conectás la vista:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio),
]
```

---

## 🔐 Administración y panel admin

Django incluye un panel de administración muy potente.

1. Crear un superusuario:

```bash
python manage.py createsuperuser
```

2. Registrar tus modelos en `admin.py`:

```python
from .models import Post
admin.site.register(Post)
```

3. Acceder a `http://127.0.0.1:8000/admin` y gestionar tus datos sin escribir código adicional.

---

## 🧰 Utilidades que incluye Django

Django incluye muchas herramientas integradas que te ahorran tiempo:

- **Formularios**: desde clases en Python.
- **Autenticación de usuarios**: login, registro, permisos.
- **Sistema de URLs**: rutas limpias y expresivas.
- **Middleware**: lógica que se ejecuta entre cada solicitud/respuesta.

---

## 🌐 Django en el mundo real

Una vez que tenés tu aplicación lista, podés desplegarla fácilmente.

Opciones comunes de hosting:

- Render: https://render.com
- Railway: https://railway.app
- Heroku: https://heroku.com

También podés combinar Django con Django REST Framework para construir **APIs robustas**.
