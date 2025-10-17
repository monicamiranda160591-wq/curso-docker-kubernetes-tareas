### 1. Encabezado

```markdown
# Tarea 6 - Deployment y Service en Kubernetes

**Curso:** Docker & Kubernetes - Clase 6
**Estudiante:** Monica Miranda Ari

Despliegue de una aplicación web Nginx en un clúster de Kubernetes, utilizando un Deployment con múltiples réplicas y un Service tipo NodePort para exponerla al exterior.
```

### 2. Tecnología

```markdown
## Stack

- **Aplicación:** Nginx (nginx:alpine)
- **Kubernetes:** minikube
- **Réplicas:** 3
```

### 3. Cómo Ejecutar

```markdown
## Ejecución

1. Clonar:
   ```bash
   git clone https://github.com/monicamiranda160591-wq/curso-docker-kubernetes-tareas.git
   cd clase6
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

2. Acceder a la web: http://192.168.49.2:30200/

3. Escalar:
   ```bash
   kubectl scale deployment webapp-deployment --replicas=5
   kubectl get pods
   ```


### 5. Capturas de Pantalla


## Screenshots

### Recursos desplegados
<img width="727" height="258" alt="image" src="https://github.com/user-attachments/assets/37e772d2-b6bc-4e44-a61a-7b2efdad2c01" />

### Aplicación funcionando
<img width="812" height="185" alt="image" src="https://github.com/user-attachments/assets/f7c9f74b-2072-47be-834f-455f87cbd9ac" />

### Escalado a 5 réplicas
<img width="652" height="150" alt="image" src="https://github.com/user-attachments/assets/7043e8dd-0e1b-46bf-8e00-2fffeb1e02e3" />



### 6. Conceptos Aplicados

```markdown
## Conceptos Kubernetes

- **Deployment con 3 réplicas:** asegura la alta disponibilidad de la aplicación ejecutando múltiples pods idénticos.  
- **Service tipo NodePort:** expone la aplicación fuera del clúster a través de un puerto del nodo (30200).  
- **Labels y selectors:** permiten vincular los pods con el servicio de forma dinámica y organizada.  
- **Auto-healing:** Kubernetes reemplaza automáticamente los pods eliminados o fallidos para mantener el número deseado de réplicas.  
- **Escalado horizontal:** posibilidad de aumentar o reducir el número de réplicas con el comando `kubectl scale`.
```

---

