# Etapa 1: Construcción
FROM node:18-alpine AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si existe)
COPY package.json yarn.lock ./

# Instala las dependencias
RUN yarn install --frozen-lockfile

# Copia el resto del código de la aplicación
COPY . .

# Construye el proyecto
RUN yarn build

# Etapa 2: Configuración de Nginx
FROM nginx:alpine

# Copia los archivos de la construcción de la aplicación a la carpeta predeterminada de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia el archivo de configuración de Nginx personalizado si es necesario
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
