# Tarea 1 - Configuración de Repositorio y Primer Desafío

### Documentación Requerida

1. **Nombre de la aplicación** httpd

2. **Comandos ejecutados** - Todos los comandos que usaste, uno por uno:
    
        ## Comando docker run

```bash
docker run httpd                                                # Para descargar la imagen, crea, inicia con un nombre aleatorio
docker run -d --name mi-apache -p 8081:80 httpd                 # -d ejecuta en segundo plano
                                                                # --name renombra el contenedor en este caso a mi-apache
                                                                # -p asigna el puerto 8081 al 80 que tenia el contenedor
```
        ## Comandos de verificación

```bash
docker images                                                   # Lista las imagenes instaladas
docker ps -a                                                    # Lista todos los contenedores
docker stop 938df5d1e12d                                        # Detiene el contedor en ejecución
docker start 938df5d1e12d                                       # Inicia el contenedor detenido
```
      ## Comandos de limpieza

```bash
docker rm fd761b853894                                           # Elimina el contendor
docker rmi 3bd839804f42                                          # Elimina la imagen
```

3. **Explicación breve** - Qué hace cada flag del comando `docker run` que usaste

4. **Evidencia:**
   - Screenshot de `docker ps` mostrando el container corriendo

   <img width="1206" height="227" alt="image" src="https://github.com/user-attachments/assets/7d462436-2252-496e-89ad-7a65d480c649" />
     
   - Screenshot del navegador
     
   <img width="538" height="270" alt="image" src="https://github.com/user-attachments/assets/8770dd82-77a7-47a9-9d95-0935d0b300d7" />
     
   - Screenshot o salida mostrando que el container fue eliminado correctamente
   
   <img width="1211" height="229" alt="image" src="https://github.com/user-attachments/assets/9e221d52-d062-4578-9b9a-d32653908826" />

5. **Conclusiones (opcional):**
   - Qué aprendiste
   Aprendi a instalar una imagen y crear un contenedor, renombrarlo y publicarlo en un puerto
   - Dificultades encontradas y cómo las resolviste
   No pude eliminar un contenedor, lo resolvi averiguando un poco y en base a eso lo detuve y recien lo elimine.
   No sabia si era git pull o git run, luego entendi la diferencia y utilice git run para la tarea
