---
title: Introducción al Generador de Paletas
description: Documentación del proyecto de generación de paletas con Nuxt y Tailwind
date: 2025-06-20
---

# 🎨 Introducción

Este proyecto es una aplicación desarrollada con **Nuxt 3** y **Tailwind CSS** que permite al usuario generar paletas de colores basadas en un color primario y un tipo de armonía.

## 🧱 Tecnologías utilizadas

- [Nuxt 3](https://nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tinycolor2](https://github.com/bgrins/TinyColor)
- [@nuxt/content](https://content.nuxt.com/) (para documentación interna)

## 🧩 Características

- Selección de color base mediante input tipo `color`
- Selección del tipo de armonía (complementario, triádico, etc.)
- Generación dinámica de paletas
- Almacenamiento en `localStorage` para persistencia del usuario
- Visualización de cada paleta como bloques de color interactivos

## 🛠️ Cómo empezar

1. Clona el repositorio.
2. Instala las dependencias:

   ```bash
   npm install
