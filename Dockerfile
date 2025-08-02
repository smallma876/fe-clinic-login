# --- ETAPA 1: CONSTRUCCIÓN DE LA APLICACIÓN NODE.JS ---
# Usamos una imagen de Node.js v20 para construir e instalar dependencias.
# 'AS builder' le da un nombre a esta etapa.
FROM node:20-slim AS builder

# Establece el directorio de trabajo dentro de esta etapa.
WORKDIR /app

# Copia solo los archivos de manifiesto de dependencias primero para optimizar el caché.
# Esto significa que Docker no re-ejecutará 'npm ci' si estos archivos no cambian.
COPY package.json package-lock.json ./

# Instala las dependencias de Node.js.
# 'npm ci' es la opción recomendada para builds automatizados y CI/CD.
RUN npm ci

# Copia el resto de los archivos de tu aplicación.
COPY . .

# Si tu aplicación es un frontend (como React, Angular, Vue) que necesita ser compilado,
# descomenta y ajusta el siguiente comando. Si es un backend, probablemente no lo necesites.
# RUN npm run build

# --- ETAPA 2: SERVICIO DE LA APLICACIÓN CON NGINX ---
# Ahora, comenzamos una nueva etapa usando la imagen de Nginx.
FROM nginx:latest

# (Opcional) Si tienes una configuración personalizada de Nginx,
# primero elimina la configuración predeterminada y luego copia la tuya.
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de tu aplicación desde la etapa 'builder' a Nginx.
# La ruta de origen (`/app/build` o `/app`) y la ruta de destino de Nginx (`/usr/share/nginx/html`)
# dependerán de cómo tu app Node.js se compile o si es un backend.

# CASO A: Si tu aplicación Node.js es un FRONTEND (React, Vue, Angular) y genera archivos estáticos:
# Asumimos que 'npm run build' crea los archivos estáticos en /app/build.
COPY --from=builder /app/build /usr/share/nginx/html

# CASO B: Si tu aplicación Node.js es un BACKEND y Nginx actuará como proxy inverso:
# En este caso, no copiarías los archivos estáticos aquí. Nginx necesitaría una configuración
# para proxyar las solicitudes al puerto donde tu app Node.js escuchará.
# Tu app Node.js podría necesitar su propio contenedor separado o una configuración de supervisor
# si ambos (Nginx y Node.js) corren en el mismo contenedor (menos común para backend+frontend).

# Expone el puerto por defecto de Nginx
EXPOSE 80

# Comando para iniciar Nginx cuando el contenedor se ejecute.
# Esto es para servir el contenido estático del frontend.
CMD ["nginx", "-g", "daemon off;"]

# Si tu aplicación es un backend de Node.js y no necesitas Nginx para servir estáticos,
# o si Nginx es solo un proxy, tu 'ENTRYPOINT' final podría ser diferente o podrías
# incluso no necesitar Nginx en la imagen final si tu app Node.js sirve todo.
# Si solo quieres ejecutar el backend de Node.js:
# FROM node:20-slim
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm ci
# COPY . .
# EXPOSE 80
# ENTRYPOINT ["npm", "run", "start"]