# Tarea Clase 8 - Kubernetes (Ingress + Health Probes + HPA)


## Descripción
Despliegue ejemplo de 2 capas (frontend + backend) en Kubernetes usando Ingress para routing path-based, probes de liveness/readiness y HPA sobre el backend.


## Estructura
- `k8s/` : manifiestos para despliegue


## Instrucciones de despliegue (local con minikube)


1. Iniciar minikube (ejemplo con driver que uses):
```bash
minikube start --memory=4096 --cpus=2
```

Habilitar addons:
```bash
minikube addons enable ingress
minikube addons enable metrics-server
```

Aplicar manifests:

```bash
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml
```

Verificar recursos:
```bash
kubectl get all
kubectl get ingress
kubectl get hpa
kubectl top pods
```

Probar Ingress

Obtener IP/host del ingress (minikube):
```bash
# minikube suele exponer en el host de minikube; usar minikube tunnel o usar minikube ip con NodePort. Ejemplo con curl directo al ingress controller:
minikube ip
# o usar proxy:
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80
curl http://localhost:8080/
curl http://localhost:8080/api
```

Generar carga para HPA
```bash
kubectl run load-generator --image=busybox:1.28 --rm -it --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- http://backend-service; done"
```

Comandos de limpieza
```bash
kubectl delete -f k8s/ingress.yaml
kubectl delete -f k8s/hpa.yaml
kubectl delete -f k8s/frontend-deployment.yaml
kubectl delete -f k8s/frontend-service.yaml
kubectl delete -f k8s/backend-deployment.yaml
kubectl delete -f k8s/backend-service.yaml
```