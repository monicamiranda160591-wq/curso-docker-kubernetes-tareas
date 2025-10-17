### 1. Encabezado

```markdown
# Nombre de tu Aplicación

**Curso:** Docker & Kubernetes - Clase 6
**Estudiante:** Tu Nombre

Breve descripción (1-2 líneas) de qué hace.
```

### 2. Tecnología

```markdown
## Stack

- **Aplicación:** Nginx / Node.js / Python / etc.
- **Kubernetes:** minikube
- **Réplicas:** 3
```

### 3. Cómo Ejecutar

```markdown
## Ejecución

1. Clonar:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. Desplegar:
   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

3. Acceder:
   - URL: http://<MINIKUBE-IP>:30200
   - O usar: `minikube service webapp-service`
```

### 4. Cómo Probar

```markdown
## Verificación

1. Ver recursos:
   ```bash
   kubectl get all
   ```

2. Acceder a la web: http://<IP>:30200

3. Escalar:
   ```bash
   kubectl scale deployment webapp-deployment --replicas=5
   kubectl get pods
   ```
```

### 5. Capturas de Pantalla

```markdown
## Screenshots

### Recursos desplegados
![kubectl get all](screenshots/resources.png)

### Aplicación funcionando
![webapp](screenshots/webapp.png)

### Escalado a 5 réplicas
![scaling](screenshots/scaling.png)
```

### 6. Conceptos Aplicados

```markdown
## Conceptos Kubernetes

- Deployment con 3 réplicas
- Service tipo NodePort
- Labels y selectors
- Auto-healing
- Escalado horizontal
```

---

