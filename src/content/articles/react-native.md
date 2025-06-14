---
title: 'Introducción a React Native'
description: 'Aprende a desarrollar aplicaciones móviles con React Native, un framework de JavaScript que permite crear aplicaciones nativas para iOS y Android utilizando React.'
img: react-native.jpg
publishedAt: 2025-06-02
lastUpdate: 2025-06-02
---

## 📱 ¿Qué es React Native?

**React Native** es un **framework de desarrollo móvil** que permite crear **aplicaciones nativas para Android e iOS** utilizando **JavaScript y React**. Su objetivo principal es **escribir código una sola vez en JavaScript** (usando React) y que funcione **en ambas plataformas móviles**, generando componentes **nativos reales** en lugar de usar una vista web.

React Native **traduce los componentes escritos en JavaScript** a **componentes nativos del sistema operativo**. Esto se logra mediante un "puente" (bridge) que conecta el código JS con el código nativo:

- Por ejemplo, cuando usás `<Text>` o `<Button>` en React Native, el framework **lo convierte en un componente nativo de Android o iOS**, como un `TextView` en Android o un `UILabel` en iOS.

> Visita la <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">documentación oficial de React Native</a> para más detalles.

<br/><br/>

## 🔑 Componentes clave

| Componente de React Native UI | Equivalente en Android | Equivalente en iOS | Analogía en web       | Descripción                                                                                                           |
| ----------------------------- | ---------------------- | ------------------ | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `<View>`                      | `<ViewGroup>`          | `<UIView>`         | `<div>` (sin scroll)  | Un contenedor que soporta diseño con flexbox, style, manejo de algunos eventos táctiles y controles de accesibilidad. |
| `<Text>`                      | `<TextView>`           | `<UITextView>`     | `<p>`                 | Permite anidar cadenas de texto y maneja eventos táctiles.                                                            |
| `<Image>`                     | `<ImageView>`          | `<UIImageView>`    | `<img>`               | Muestra diferentes formatos y estilos de imágenes                                                                     |
| `<ScrollView>`                | `<ScrollView>`         | `<UIScrollView>`   | `<div>` (con scroll)  | Contenedor genérico con scroll que puede contener diferentes componentes y vistas                                     |
| `<TextInput>`                 | `<EditText>`           | `<UITextField>`    | `<input type="text">` | Permite al usuario ingresar texto                                                                                     |

<br/><br/>

## 🚀 Entornos de desarrollo

**Expo** es un **conjunto de herramientas y servicios** que se construyó encima de **React Native** para facilitar el desarrollo de aplicaciones móviles. Es ideal para empezar rápido sin tener que lidiar con configuraciones complicadas de Android Studio o Xcode.

Viene con muchas librerías útiles integradas (como acceso a cámara, GPS, notificaciones, etc.) y te permite desarrollar, probar y publicar apps de forma sencilla.

Esta plataforma es ideal si estas dando tus primeros pasos en React Native, ya que:

- No necesitas configurar un entorno nativo complejo.
- Puedes probar tu aplicación en un dispositivo real o emulador sin complicaciones.
- Permite compartir tu aplicación fácilmente con otros usuarios para pruebas.
- Puedes usar herramientas como **Expo Go** para ver tus cambios en tiempo real en tu dispositivo móvil.

Por otro lado, si necesitas funcionalidades más avanzadas o personalizadas, lo mejor es usar **React Native CLI** directamente, que te permite un control total sobre la configuración nativa.

- Visita la <a href="https://docs.expo.dev/get-started/create-a-project/" target="_blank" rel="noopener noreferrer">documentación de Expo</a> para crear tu primer proyecto.

<br /><br />

## Creando un proyecto desde cero con Expo

Para crear un nuevo proyecto de React Native con Expo ejecuta el siguiente comando en tu terminal:

```bash
npx create-expo-app@latest my-app --template blank
# Esto creará un nuevo proyecto llamado `my-app` utilizando la plantilla en blanco de Expo.
```
