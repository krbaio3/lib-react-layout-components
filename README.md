# lib-react-layout-components

`lib-react-layout-components` es una biblioteca de componentes de React diseñada para proporcionar una estructura de diseño modular. La biblioteca está empaquetada utilizando Vite y está lista para ser utilizada en proyectos de React.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **src/**
  - **components/**
    - `header.component.tsx` - Componente del encabezado.
    - `footer.component.tsx` - Componente del pie de página.
    - `layout.component.tsx` - Componente principal que organiza el diseño.
    - `sidebar.component.tsx` - Componente de la barra lateral.
  - **Demo/**
    - Contiene la demo de los componentes.
- **dist/** - Contiene los archivos empaquetados (`.js` y `.css`) listos para distribución.
- **.lintstagedrc.mjs** - Configuración para linting y formateo automático de archivos.
- **eslint.config.mjs** - Configuración de ESLint para el proyecto.
- **nginx.conf** - Configuración de Nginx para servir el archivo `.tgz` de la biblioteca.
- **tailwind.config.js** - Configuración de Tailwind CSS para estilos personalizados.

## Scripts Disponibles

En el archivo `package.json`, hay varios scripts definidos para ayudar en el desarrollo y la distribución de la biblioteca:

- **`build`**: Compila el proyecto utilizando TypeScript y Vite.
- **`check`**: Realiza un chequeo del código usando Biome.
- **`check:fix`**: Formatea el código utilizando Biome.
- **`dev`**: Inicia un servidor de desarrollo utilizando Vite.
- **`format`**: Aplica Prettier para formatear el código.
- **`lint`**: Ejecuta ESLint para verificar y corregir problemas de estilo de código.
- **`preview`**: Previsualiza la versión construida del proyecto.
- **`release`**: Genera una nueva versión utilizando `standard-version`.
- **`docker:build`**: Construye la imagen Docker del proyecto.
- **`docker:run`**: Ejecuta el contenedor Docker y sirve la biblioteca a través de Nginx.

## Empaquetado y Distribución

Para empaquetar la biblioteca en un archivo `.tgz`, puedes utilizar el siguiente comando:

```bash
yarn pack
```

Este comando generará un archivo .tgz que se puede distribuir e instalar en otros proyectos.

## Servir el Archivo .tgz con Docker y Nginx

El archivo .tgz se puede servir utilizando un contenedor Docker con Nginx. Sigue estos pasos:

1. Construir la Imagen Docker:

```bash
yarn docker:build
```

2. Ejecutar el Contenedor:

```bash
yarn docker:run
```

3. Acceder al Archivo `.tgz`:

Una vez que el contenedor esté corriendo, puedes acceder al archivo `.tgz` en `http://localhost:5555/packages/lib-react-layout-components.tgz`.

## Configuración de ESLint

La configuración de ESLint se encuentra en el archivo `eslint.config.mjs` y está diseñada para garantizar la calidad del código en este proyecto. Incluye reglas para React, TypeScript, y otros plugins esenciales.

## Configuración de Tailwind CSS

El proyecto utiliza Tailwind CSS para los estilos, y la configuración personalizada se encuentra en `tailwind.config.js`. Puedes personalizar esta configuración según las necesidades de tu proyecto.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
4. Sube tu rama (git push origin feature/nueva-funcionalidad).
5. Crea un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
