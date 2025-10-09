# Clase 2 - Dockerización de Mi Aplicación

## 1.Aplicación

**Lenguaje:** Node.js
**Framework:** Express
**Descripción:** API REST para gestión de tareas

**Endpoints:**
- GET / - Página de bienvenida
- GET /api/tasks - Lista de tareas
- POST /api/tasks - Crear tarea

## 2.Dockerfile
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

## 3.Build


\`\`\`bash
docker build -t node-api:v1.0.0 .
\`\`\`

**Salida:**
\`\`\`
[+]  Building 2.4s (13/13) FINISHED
 => => unpacking to docker.io/library/node-api:v1.0.0

Servidor ejecutándose en el puerto 3000
\`\`\`

**Tamaño final:** 197MB

## 4.Testing
docker run -p 3000:3000 node-api:v1.0.0
**Salida**
Servidor ejecutándose en el puerto 3000

<img width="552" height="50" alt="image" src="https://github.com/user-attachments/assets/9e7dd98f-16a7-43bb-82f3-f0942a09dd17" />
<img width="1374" height="60" alt="image" src="https://github.com/user-attachments/assets/ac4d815b-897f-4571-8f97-ca8626209c72" />
<img width="867" height="69" alt="image" src="https://github.com/user-attachments/assets/dd4f8089-289b-4a0d-8aba-4867b714a796" />
<img width="348" height="120" alt="image" src="https://github.com/user-attachments/assets/00681cc9-8b92-497b-a21d-b78d76686435" />
<img width="445" height="213" alt="image" src="https://github.com/user-attachments/assets/7f5f3f2c-cda3-4ff2-a827-09325bc0f16c" />
<img width="378" height="75" alt="image" src="https://github.com/user-attachments/assets/45faaa54-c9e7-4fdd-beeb-bce991157af3" />

## 5.Docker Hub

**URL:** [https://hub.docker.com/r/miusuario/tasks-api](https://hub.docker.com/repository/docker/monicamiranda160591/task-node-api/general)

<img width="1236" height="636" alt="image" src="https://github.com/user-attachments/assets/4ba3d143-ad11-4219-98bd-10be44eeba7e" />

## 6.Optimizaciones

- Multi-stage build: redujo de 900MB a 197MB
- Se usó node:20-alpine como base, mucho más ligera
- Usuario non-root: Se creó un usuario dentro del contenedor para ejecutar la app de manera segura, evitando usar root.
- .dockerignore excluye node_modules, .git.

## 7.Conclusiones

Se tuvo varias dificultades, pero finalmente vi que no estaba tan complejo como lo vi, entre eso errores en mi endpoint, por lo que no podia ver los cambios en docker, puertos ocupados.
Aprendi a contruir y ejecutar contenedores mapeando puertos, lo importante que es reconstuir la imagen despues de cambio en el codigo.
