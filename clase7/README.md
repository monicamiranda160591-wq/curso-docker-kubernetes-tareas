**a) Descripción:**
- Objetivo de la tarea: Desplegar PostgreSQL en Kubernetes aplicando conceptos de configuración, secretos, almacenamiento persistente y StatefulSets, usando imágenes preconstruidas y sin desarrollar una aplicación propia.

***Conceptos aplicados:***  
- **Namespace:** Aislar los recursos dentro del clúster (`tarea-clase7`).  
- **ConfigMap:** Almacenar configuración no sensible de PostgreSQL.  
- **Secret:** Guardar credenciales de la base de datos de forma segura.  
- **StatefulSet:** Gestionar pods con identidad y persistencia.  
- **PersistentVolumeClaim (PVC):** Mantener los datos de PostgreSQL aunque los pods se eliminen o reinicien.


**b) Instrucciones paso a paso:**
1. Crear namespace
```bash
kubectl apply -f k8s/namespace.yaml
kubectl config set-context --current --namespace=tarea-clase7
```
3. Aplicar ConfigMap
```bash
kubectl apply -f k8s/configmap.yaml
```
5. Aplicar Secret
```bash
kubectl apply -f k8s/secret.yaml
```
7. Aplicar Headless Service
```bash
kubectl apply -f k8s/postgres-headless.yaml
```
9. Aplicar StatefulSet
```bash
kubectl apply -f k8s/postgres-statefulset.yaml
```
11. Verificar que todo está corriendo
```bash
kubectl get all -n tarea-clase7
kubectl get pvc -n tarea-clase7
kubectl get configmap,secret -n tarea-clase7
```
13. Probar PostgreSQL
```bash
kubectl exec -it postgres-0 -- psql -U admin -d mibasedatos
```
15. Demostrar persistencia
```bash
kubectl delete pod postgres-0
kubectl get pods -w
# Cuando vuelva a estar Running:
kubectl exec -it postgres-0 -- psql -U admin -d mibasedatos -c "SELECT * FROM estudiantes;"
```

**c) Comandos de verificación:**
```bash
kubectl get all -n tarea-clase7
kubectl get pvc -n tarea-clase7
kubectl get configmap,secret -n tarea-clase7
```

**d) Capturas de pantalla:**
1.  mostrando todos los recursos
   <img width="813" height="932" alt="image" src="https://github.com/user-attachments/assets/4adbdab3-0e62-414d-acc6-42985ca64566" />

3.  mostrando el volumen BOUND
   <img width="1273" height="54" alt="image" src="https://github.com/user-attachments/assets/7f6bb782-17db-45ad-a55e-a570d1eb6d8e" />

4. Datos en PostgreSQL (SELECT)
   
   <img width="627" height="401" alt="image" src="https://github.com/user-attachments/assets/c5fa0af3-24e0-43ef-82fb-610ee03b2e5b" />

6. Prueba de persistencia (después de eliminar pod)
  <img width="948" height="274" alt="image" src="https://github.com/user-attachments/assets/dfb58034-2602-429f-8fd5-177246f2de5c" />

**e) Comandos de limpieza:**
```bash
kubectl delete namespace tarea-clase7
# Esto elimina todo: pods, services, configmaps, secrets, pvcs
```
