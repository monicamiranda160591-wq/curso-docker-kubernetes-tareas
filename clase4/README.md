### 1. Encabezado

```markdown
# Aplicación Multi-Contenedor
# Servicios: Nginx + PostgreSQL + Adminer

**Curso:** Docker & Kubernetes - Clase 3
**Estudiante:** Monica Miranda Ari

Esta aplicación muestra el uso de Docker Compose para orquestar múltiples contenedores conectados en una red personalizada, 
con Nginx, una base de datos PostgreSQL con volumen persistente y Adminer para gestión visual de la bd.
```

### 2. Stack Tecnológico

```markdown
## Stack

- **App:** Nginx con Htlm estatico
- **Base de datos:**  PostgreSQL 
- **GUI de Base de Datos:** Adminer 
- **Red personalizada:** app-network  
- **Volumen persistente:** db-data 
```

### 3. Cómo Ejecutar

```markdown
## Ejecución

1. Clonar:
   ```bash
   git clone https://github.com/monicamiranda160591-wq/curso-docker-kubernetes-tareas.git
   cd clase3
   ```

2. Levantar servicios:
   ```bash
   docker compose up -d
   ```

3. Acceder:
   - Sitio Web Nginx: http://localhost:8080
   - GUI BD: http://localhost:8081
```

### 4. Cómo Probar

```markdown
## Verificación

1. Servicios corriendo:
   ```bash
   docker compose ps
   
   Los 3 servicios debe estar en estado Uo o healthy
	clase3_nginx
	clase3_postgres
	clase3_adminer
   ```
2. Acceder a la web: http://localhost:8080 y a la BD http://localhost:8081

3. Verificar volumen persiste:
   ```bash
   docker compose down  # detiene los contenedores, pero maniente los volumenes.
   
   docker compose up -d  # levanta los servidores 
   
   docker volume ls     # debe seguir existiendo
   
   ```
```

### 5. Capturas de Pantalla

```markdown
## Screenshots

### Servicios corriendo


### API funcionando
![API](screenshots/api.png)
```

### 6. Conceptos Aplicados

```markdown
## Conceptos Docker

- Docker Compose: permite orquestar multiples servicios
- Red custom: `app-network` Permite la comunicación entre contenedores
- Volumen: `db-data` (persistencia) Almacena datos de manera permanente
- Variables de entorno: Para definir usuario contraseña y bd 
```
