# Clase 2 - Dockerización de Mi Aplicación

## Aplicación

**Lenguaje:** Node.js
**Framework:** Express
**Descripción:** API REST para gestión de tareas

**Endpoints:**
- GET / - Página de bienvenida
- GET /api/tasks - Lista de tareas
- POST /api/tasks - Crear tarea

## Dockerfile
```bash
# -----------------------
# Stage 1: Build
# -----------------------
FROM node:20-alpine AS build

LABEL stage="build"

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencia
COPY package*.json ./

# Instalar todas las dependencias
RUN npm install

# Copiar el codigo de la app
COPY . .

# -----------------------
# Stage 2: Production / Runtime
# -----------------------
FROM node:20-alpine AS production

# Establecer directorio de trabajo
LABEL stage="production"

# Crear directorio de trabajo
WORKDIR /app

# Copiar solo dependencias de producción del stage build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app . 

# Crear usuario non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Exponer puerto configurable
ENV PORT=3000
EXPOSE $PORT

# HEALTHCHECK 
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
CMD curl -f http://localhost:$PORT/ || exit 1

# Comando por defecto
CMD ["node", "index.js"]
```
**Explicación:**

| Stage | Propósito |
|-------|-----------|
| Build | instala dependencias y copia todo |
| Production | solo copia lo necesario |

## Build

\`\`\`bash
docker build -t tasks-api:1.0 .
\`\`\`

**Salida:**
\`\`\`
[+] Building 32.5s ...
Successfully tagged tasks-api:1.0
\`\`\`

**Tamaño final:** 197MB

## Testing

![Docker Images](screenshots/docker-images.png)
![Container Running](screenshots/docker-ps.png)
![API Response](screenshots/curl-response.png)

## Docker Hub

**URL:** https://hub.docker.com/r/miusuario/tasks-api

![Docker Hub](screenshots/dockerhub.png)

## Optimizaciones

- Multi-stage build: redujo de 320MB a 145MB
- Usuario non-root
- .dockerignore excluye node_modules

## Conclusiones

Aprendí a optimizar imágenes...
