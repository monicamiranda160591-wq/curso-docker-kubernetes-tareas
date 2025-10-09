### 1. Encabezado

```markdown
# Nombre de tu Aplicación

**Curso:** Docker & Kubernetes - Clase 3
**Estudiante:** Tu Nombre

Breve descripción (1-2 líneas) de qué hace.
```

### 2. Stack Tecnológico

```markdown
## Stack

- **App:** Node.js / Python / Go
- **Base de datos:** MongoDB / PostgreSQL / MySQL
```

### 3. Cómo Ejecutar

```markdown
## Ejecución

1. Clonar:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. Levantar servicios:
   ```bash
   docker compose up -d
   ```

3. Acceder:
   - API: http://localhost:3000
```

### 4. Cómo Probar

```markdown
## Verificación

1. Servicios corriendo:
   ```bash
   docker compose ps
   ```

2. Acceder a la web: http://localhost:XXXX

3. Verificar volumen persiste:
   ```bash
   docker compose down
   docker compose up -d
   docker volume ls  # debe seguir existiendo
   ```
```

### 5. Capturas de Pantalla

```markdown
## Screenshots

### Servicios corriendo
![compose ps](screenshots/services.png)

### API funcionando
![API](screenshots/api.png)
```

### 6. Conceptos Aplicados

```markdown
## Conceptos Docker

- Docker Compose con 2 servicios
- Red custom: `app-network`
- Volumen: `db-data` (persistencia)
- Variables de entorno
```

---

## Parte 5: Capturas de Pantalla

Mínimo **3 capturas**:

1. **Servicios corriendo**: `docker compose ps` mostrando ambos servicios
2. **Aplicación web funcionando**: Navegador mostrando http://localhost:XXXX
3. **Volumen persistente**: `docker volume ls` mostrando el volumen creado

**Opcional (para destacar)**:
- `docker network ls` mostrando la red custom
- `docker exec` haciendo ping entre servicios

---