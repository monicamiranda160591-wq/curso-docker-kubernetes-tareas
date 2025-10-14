### 1. Título y Descripción

```markdown
# Aplicación mi-microservicios - Blog
# Descripción: Tarea de microservicios que implementa un sistema de blog con múltiples servicios backend, Redis como cache y Nginx como API Gateway. 
               Permite crear, listar y consultar posts con persistencia en MongoDB.
# Tecnologías utilizadas: Docker Compose, Node.js (Express), Redis, MongoDB, Nginx, HTML/JavaScript.

**Curso:** Docker & Kubernetes - Clase 3
**Estudiante:** Monica Miranda Ari

Esta aplicación muestra el uso de Docker Compose para orquestar múltiples contenedores conectados en una red personalizada, 
con Nginx, una base de datos PostgreSQL con volumen persistente y Adminer para gestión visual de la bd.
```

### 2. Arquitectura (ASCII)

```markdown
Cliente (navegador)
|
v
Gateway Nginx (puerto 8080)
/ \
/ \
Frontend Backend (service1)
|
v
MongoDB
^
|
Redis (cache)
Red Docker: app-network
```

### 3. Servicios
---

## 3. Servicios
| Servicio | Tecnología | Puerto | Descripción |
|---|---|---|---|
| gateway | Nginx | 8080 | API Gateway y enrutamiento |
| backend | Node.js | 5000 | API principal para posts |
| redis | Redis | 6379 | Cache de posts |
| db | MongoDB | 27017 | Persistencia de posts |
| frontend | Nginx | 80 | Interfaz web |

---
### 4. Instrucciones de Uso
```bash
# Clonar repositorio
git clone https://github.com/monicamiranda160591-wq/curso-docker-kubernetes-tareas.git
cd clase4
cd mi-microservicios

# Levantar servicios
docker compose up -d --build

# Verificar estado
docker compose ps

# Ver logs
docker compose logs -f service1

# Acceder a la aplicación
http://localhost:8080
http://localhost:8080/gateway/health



### 5. Endpoints de la API

```markdown

GET /api/posts
Descripción: Lista todos los posts
Response: { "source": "cache|database", "data": [{"_id":"...","title":"...","content":"..."}] }

POST /api/posts
Descripción: Crear un post (invalida cache de posts)
Request Body: { "title": "prueba1", "content": "contenido1" }

DELETE /api/posts/:id
Descripción: Elimina un post específico (invalida cache)
Response:{ "message": "deleted" }

```

### 6. Capturas de Pantalla



