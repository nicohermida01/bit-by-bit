---
title: Introducción a Django
description: '¿Querés aprender a crear sitios web con Python? En este artículo te explico paso a paso qué es Django, cómo instalarlo y cómo construir tus primeras aplicaciones web de forma rápida y profesional. Ideal para principiantes que quieren empezar en el mundo del desarrollo backend con herramientas reales.'
img: introduction-to-django.jpg
publishedAt: 2025-05-09
lastUpdate: 2025-05-12
---

## 📘 ¿Qué es Django?

Django es un **framework de desarrollo web para Python** que permite construir aplicaciones de manera rápida, segura y escalable. Fue creado por desarrolladores experimentados que buscaban una forma más eficiente de desarrollar sitios web sin reinventar la rueda en cada proyecto.

Django es ideal para construir sitios web completos, APIs o incluso servicios backend para aplicaciones móviles.

Sus principios lo dicen todo:

- **Ridiculamente rápido**: fue diseñado para ayudar a los desarrolladores a llevar sus aplicaciones al mercado lo más rápido posible.
- **Completamente cargado**: incluye docenas de extras que permiten solucionar problemas comunes de desarrollo web.
- **Tranquilizadoramente seguro**: ayuda a los desarrolladores a evitar errores de seguridad comunes como la inyección SQL, scripts entre sitios, falsificación de solicitudes entre sitios y clickjacking.
- **Extremadamente escalable**: algunos de los sitios mas grandes del mundo utilizan Django para manejar millones de usuarios y peticiones.
- **Increiblemente versátil**: se puede usar para construir cualquier tipo de aplicación web, desde un simple blog hasta una plataforma de comercio electrónico o una red social.

> 🌐 **Página oficial**: https://www.djangoproject.com

<br /><br />

## ⚙️ Instalación y configuración inicial

Antes de comenzar, necesitás tener instalado Python y pip. Recomendamos trabajar dentro de un **entorno virtual** para mantener tu proyecto aislado y que las dependencias no se instalen globalmente:

### 1. Creación de un entorno virtual

```bash
# Creamos una carpeta para el proyecto
mkdir django_proyecto
cd django_proyecto

# Creamos un entorno virtual
python -m venv env
source env/bin/activate   # En Windows: venv\Scripts\activate
```

### 2. Instalación de Django y creación del proyecto

```bash
# Instalamos Django
pip install django

# Creamos un nuevo proyecto de django
django-admin startproject mi_proyecto .

# Iniciamos el servidor de desarrollo
python manage.py runserver
```

Si todo salió bien, deberías ver el servidor de django corriendo en `http://127.0.0.1:8000`.

<br /><br />

## 🏗️ Conceptos fundamentales

Django sigue el patrón **MTV (Model-Template-View)**:

- **Model**: define la estructura de los datos.
- **Template**: define cómo se presentan los datos (HTML).
- **View**: la lógica que conecta los datos con las vistas.

Dentro del proyecto, podés crear múltiples apps. Cada app es un módulo que cumple una función específica. Por ejemplo, una app para manejar usuarios, otra para productos, etc.

<br /><br />

## 🧰 Utilidades que incluye Django

Django incluye muchas herramientas integradas que te ahorran tiempo:

- **Formularios**: desde clases en Python.
- **Autenticación de usuarios**: login, registro, permisos.
- **Sistema de URLs**: rutas limpias y expresivas.
- **Middleware**: lógica que se ejecuta entre cada solicitud/respuesta.

<br /><br />

## 🛠️ Crear una aplicación paso a paso

Supongamos que queremos crear un módulo de publicaciones y que dentro esté todo lo relacionado para gestionarlas (agregar, editar, eliminar, listar).

1. Creamos una app "blog" y la agregamos a las aplicaciones instaladas:

```bash
python manage.py startapp blog
```

2. Agregamos la app a las aplicaciones instaladas:

```bash
# mi_proyecto/settings.py
INSTALLED_APPS = [
    ...
    'blog',
]
```

> **Nota**: `INSTALLED_APPS` es una lista que contiene todas las aplicaciones y paquetes que Django debe cargar al iniciar el proyecto.

3. Por ultimo, corremos las migraciones:

```bash
python manage.py migrate
```

Ahora tendremos una carpeta `blog` dentro de nuestro proyecto, donde vamos a encontrar los archivos necesarios para definir nuestros modelos, vistas y urls.

<br /><br />

## ⚙️ Instalar dependencias

Para trabajar con Django y construir una API REST, es recomendable instalar algunas dependencias adicionales, como Django REST Framework y CORS Headers.

1. Instalamos Django REST Framework:

```bash
pip install djangorestframework
```

Esto nos permitirá construir APIs de manera sencilla y rápida.

2. Instalamos Django CORS Headers:

```bash
pip install django-cors-headers
```

Esto es útil si planeás hacer peticiones desde un frontend que no esté en el mismo dominio que tu backend.

3. Agregamos las dependencias a `INSTALLED_APPS` en `settings.py`:

```python
# mi_proyecto/settings.py
INSTALLED_APPS = [
    ...
    'rest_framework',
    'corsheaders',
    ...
]
```

4. CORS Headers requiere que agregues su middleware encima del middleware de Django:

```python
# myproject/settings.py
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware', # this should be before the CommonMiddleware
    ...
]
```

> **Nota**: `MIDDLEWARE` es una lista que contiene todos los middleware que Django debe cargar al iniciar el proyecto. Un mioddleware es una funcion que se ejecuta entre cada solicitud y respuesta.

5. Configuramos los dominios permitidos para CORS:

```python
# myproject/settings.py
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000", # Por ejemplo, si estás usando React con Vite. Este debería ser el URL de tu app frontend.
    "https://yourdomain.com",
]
```

<br /><br />

## 📦 Crear un modelo

Dado que ya tenemos la app "blog", vamos a crear un modelo básico para manejar publicaciones. El modelo define las propiedades de la tabla en la base de datos.

1. Vamos a crear un modelo `Post` con los siguientes campos:

- `titulo`: un campo de texto corto.
- `contenido`: un campo de texto largo.
- `fecha`: un campo de fecha y hora que se llena automáticamente al crear el post.

Dentro de la carpeta `blog`, abrimos el archivo `models.py` y definimos nuestro modelo:

```python
# blog/models.py
from django.db import models

class Post(models.Model):
    titulo = models.CharField(max_length=100)
    contenido = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)
```

2. Corremos las migraciones para crear la tabla en la base de datos:

```bash
python manage.py makemigrations blog
python manage.py migrate
```

<br /><br />

## 🔄 Crear un Serializer

Para poder convertir nuestro modelo a JSON y viceversa, necesitamos crear un serializer. Django REST Framework incluye una clase llamada `ModelSerializer` que hace esto automáticamente.

> **Nota**: Un serializer es una clase que convierte un modelo de Django a JSON y viceversa. Esto es necesario para poder enviar y recibir datos a través de una API.

1. Creamos un archivo `serializers.py` dentro de la carpeta `blog` y definimos nuestro serializer:

```python
# blog/serializers.py
from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'  # Esto incluye todos los campos del modelo
```

<br /><br />

## 🖥️ Crear una vista

Ahora que tenemos nuestro modelo y serializer, vamos a crear una vista para manejar las solicitudes HTTP.

> **Nota**: Una vista es una función o clase que maneja una solicitud HTTP y devuelve una respuesta HTTP. En Django, las vistas se definen en el archivo `views.py`.

1. En `views.py`, importamos el serializer y el modelo, y creamos una vista para manejar todas las solicitudes CRUD:

```python
# blog/views.py
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all() # devuelve todos los posts
    serializer_class = PostSerializer
```

<br /><br />

## 📡 Crear una ruta

Para que Django sepa cómo manejar las solicitudes a nuestra vista, necesitamos crear una ruta. Las rutas se definen en el archivo `urls.py`.

1. En la carpeta `blog`, creamos un archivo `urls.py` y definimos nuestras rutas:

```python
# blog/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')

urlpatterns = [
    path('blog/', include(router.urls)),  # Esto incluye todas las rutas del router
]
```

2. Ahora, necesitamos incluir las rutas de la app "blog" en el archivo `urls.py` del proyecto principal:

```python
# mi_proyecto/urls.py
from django.urls import path, include

urlpatterns = [
    ...,
    path('api/v1/', include('blog.urls')),
    ...
]
```

<br /><br />

## 🔐 Administración y panel admin

Django incluye un panel de administración muy potente que te permite gestionar tus modelos de forma sencilla. Para usarlo, solo necesitas:

1. Crear un superusuario:

```bash
python manage.py createsuperuser
# Sigue las instrucciones para crear un superusuario
```

2. Registrar tus modelos en `admin.py`:

```python
# blog/admin.py
from .models import Post
admin.site.register(Post)
```

3. Acceder a `http://127.0.0.1:8000/admin`, iniciar sesión con el superusuario y podrás gestionar tus modelos desde el panel de administración.

<br /><br />

## Documentación de la API

Para documentar tu API, estaremos usando **coreapi**. Esto es opcional, pero es una buena práctica. Coreapi es una herramienta que te permite crear documentación interactiva para tu API.

1. Instalamos coreapi:

```bash
pip install coreapi
```

2. Agregamos coreapi a `INSTALLED_APPS`:

```python
# mi_proyecto/settings.py
INSTALLED_APPS = [
    ...
    'coreapi',
    ...
]
```

3. Agregamos las rutas de coreapi a `urls.py` dentro de la app `blog`:

```python
# blog/urls.py
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    # path('blog/', include(router.urls)),
    path('docs/', include_docs_urls(title='Blog API')),  # Esto incluye la documentación de la API
]
```

4. Agregamos AutoSchema a `settings.py`:

```python
# mi_proyecto/settings.py
REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
}
```

Y listo, ahora podrás acceder a la documentación de tu API `/docs` y ver todas las rutas y métodos disponibles.

<br /><br />

## 🌐 Django en el mundo real

Una vez que tenés tu aplicación lista, podés desplegarla fácilmente.

Opciones comunes de hosting:

- Render: https://render.com
- Railway: https://railway.app
- Heroku: https://heroku.com

También podés combinar Django con Django REST Framework para construir **APIs robustas**.
