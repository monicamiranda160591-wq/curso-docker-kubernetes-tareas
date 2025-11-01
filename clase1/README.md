# Proyecto Final - Docker & Kubernetes

**Alumno:** Monica Miranda Ari  
**Fecha:** 31 de Octubre de 2025  
**Curso:** Docker & Kubernetes - i-Quattro

## Links de Docker Hub
- **Backend v2.1:** [https://hub.docker.com/r/monimiranda1605/springboot-api/tags](https://hub.docker.com/r/monimiranda1605/springboot-api/tags)
- **Frontend v2.2:** [https://hub.docker.com/r/monimiranda1605/angular-frontend/tags](https://hub.docker.com/r/monimiranda1605/angular-frontend/tags)

---

## Parte 1: Setup del Ambiente

**Ambiente utilizado:**
- VirtualBox / VMware
- Nombre de VM/Instancia: **monica-miranda-k8s**
- Sistema operativo: **Ubuntu 24.04 LTS**
- Recursos: **8GB RAM, 2 CPU cores**
- Red configurada: **NAT / Bridged**
- Rango MetalLB: **10.0.2.100 - 10.0.2.110**

### Screenshots

**microk8s status**  
<img width="996" height="704" alt="1 microk8s_status" src="https://github.com/user-attachments/assets/da6f8955-b0e8-40cb-814b-f1e521cbd878" />

**Pods corriendo**  
<img width="1031" height="726" alt="2 podsRunning" src="https://github.com/user-attachments/assets/1386a718-1987-4354-ba01-2a6007340cc0" />

**Frontend con IP externa**  
<img width="1150" height="803" alt="3 frontend_ip_externa" src="https://github.com/user-attachments/assets/f73de76c-a007-4dcc-a9f5-cae647999f89" />

---

## Parte 2: Backend v2.1

- Editar el archivo: `src/main/java/dev/alefiengo/api/controller/GreetingController.java`
- Agregar el método **info** con otro cuerpo modificando el nombre.
- Construir la imagen con mi usuario.
- Subir a Docker Hub con versión **2.1**.

### Código Agregado

```java
@GetMapping("/api/info")
public ResponseEntity<Map<String, Object>> getInfo() {
    Map<String, Object> info = new HashMap<>();
    info.put("alumno", "MONICA MIRANDA ARI");
    info.put("version", "v2.1");
    info.put("curso", "Docker & Kubernetes - i-Quattro");
    info.put("timestamp", LocalDateTime.now().toString());
    info.put("hostname", System.getenv("HOSTNAME"));
    return ResponseEntity.ok(info);
}
```

### Screenshots

<img width="1111" height="70" alt="1 docker_images_v2 1" src="https://github.com/user-attachments/assets/663b3b91-78ae-4d27-9f79-be80f97e3e98" />  
<img width="1390" height="304" alt="2 rollout_status" src="https://github.com/user-attachments/assets/e3c1c784-a233-4284-91a1-fe10fdde9265" />  
<img width="659" height="227" alt="4 respuesta_json_nuevo_servicio" src="https://github.com/user-attachments/assets/f233c246-088a-4073-bdea-3bc7d26b9549" />

---

## Parte 3: Frontend v2.2

- Editar los archivos: `frontend/src/app/app.component.html` y `frontend/src/app/app.component.ts`
- Agregar el código HTML y llamar al servicio **info**.
- Construir la imagen con mi usuario.
- Subir a Docker Hub con versión **2.2**.

### Screenshots

<img width="989" height="724" alt="get_pods-w" src="https://github.com/user-attachments/assets/6b837cfd-b2a0-4748-a1c7-b3bdf4d9ae32" />  
<img width="1442" height="1013" alt="sistema_cargado" src="https://github.com/user-attachments/assets/04b2dad7-fca7-46ac-b662-6bd10e471c3e" />  
<img width="1023" height="935" alt="ver_Info_del_sistema" src="https://github.com/user-attachments/assets/4be5bd5a-82df-4d69-88a6-bf617842b168" />

---

## Parte 4: Gestión de Versiones

**Comando:**  
`kubectl rollout undo` → Permite revertir un despliegue a una versión anterior.

### Screenshots

<img width="1033" height="63" alt="rollback" src="https://github.com/user-attachments/assets/09b8c892-713e-42e9-8f58-2a0eb1443b09" />  
<img width="1023" height="66" alt="rollforward" src="https://github.com/user-attachments/assets/af9b5038-dd23-4c2d-8209-15ea17ef34b7" />

---

## Parte 5: Ingress + MetalLB

**IP del Ingress:** 10.0.2.100

### Screenshots

<img width="1022" height="396" alt="kubectl_describe_ingress" src="https://github.com/user-attachments/assets/bea1af88-8575-4ebe-b368-47ee98014503" />  
<img width="1054" height="881" alt="navegador" src="https://github.com/user-attachments/assets/6de6778b-19d2-4021-abb3-05db6bc3d560" />

---

## Conclusiones

### Aprendizajes principales
- Comprendí cómo desplegar aplicaciones en Kubernetes usando Deployments, Services e Ingress.
- Aprendí a usar `kubectl` para administrar pods, verificar estados y realizar rollouts.
- Entendí el flujo de construcción y despliegue de imágenes Docker desde código fuente hasta Kubernetes.

### Dificultades encontradas
- Tuve que reiniciar el proyecto porque no lograba actualizar los cambios.
- Al principio tuve problemas para conectarme a Git y subir mi proyecto; finalmente lo logré con los cambios y versiones solicitadas.

### Reflexión
Aplicaría este conocimiento en un proyecto real para automatizar el despliegue de aplicaciones mediante contenedores y Kubernetes, garantizando **escalabilidad**, **alta disponibilidad** y **facilidad de mantenimiento** en entornos productivos.
