# Stage 1: build
FROM node:18-alpine AS build
LABEL maintainer="Tu Nombre <tu@email>"
WORKDIR /app

# Evitar copiar archivos pesados innecesarios (usa .dockerignore)
COPY package*.json ./
# Instalación de dependencias de producción y dev (si necesitas build)
RUN npm ci --only=production

# Copiar código
COPY . .

# Si necesitas construir assets (ts, webpack, etc), ejecútalos aquí
# RUN npm run build

# Stage 2: runtime
FROM node:18-alpine AS runtime
LABEL maintainer="Tu Nombre"
LABEL version="1.0-optimizado"
LABEL description="Microservicio ejemplo optimizado"
LABEL security.scan="trivy"
LABEL security.non-root="true"

# Crear usuario non-root
RUN addgroup -g 1001 -S appuser && \
    adduser -S -G appuser -u 1001 appuser

WORKDIR /app

# Copiar solo lo necesario: node_modules y código
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app ./

# Ajustes de permisos
RUN chown -R appuser:appuser /app && \
    chmod -R g+rwx /app

# Exponer puerto (ajusta si usas otro)
EXPOSE 3000

# Healthcheck (usa wget/ash disponible en alpine)
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Mejor práctica: montar como read-only si corresponde (se puede setear en docker-compose)
USER appuser

# Comando por defecto
CMD ["node", "app.js"]
