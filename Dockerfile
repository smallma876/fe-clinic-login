# Usa una imagen base de Nginx que se basa en Debian (que usa apt)
FROM nginx:latest

# Actualiza la lista de paquetes y luego instala Node.js y npm usando apt
# La opción -y confirma automáticamente la instalación
# && rm -rf /var/lib/apt/lists/* es para limpiar el caché de apt y reducir el tamaño de la imagen final
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*

WORKDIR ./src

RUN npm ci

EXPOSE 80

ENTRYPOINT ["npm", "run", "start"]