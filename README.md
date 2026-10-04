# Repositorio de pruebas para contenedores docker con servicios de nginx.

### pending more info

### NGINX (pronunciado engine-ex) es un software de código abierto y alto rendimiento que funciona como servidor web, proxy inverso, balanceador de carga y caché HTTP. Creado originalmente en 2004 para superar las limitaciones de velocidad de Apache, es la opción preferida de plataformas con alto tráfico como Netflix, NASA y WordPress.com.

> [!NOTE]
> **NGINX** funciona como un servidor web de alto rendimiento, proxy inverso y balanceador de carga. Utiliza una arquitectura orientada a eventos (asíncrona), lo que le permite manejar miles de conexiones simultáneas con un consumo de memoria extremadamente bajo, a diferencia de los servidores tradicionales basados en hilos como Apache.

> [!INFO]
> Por defecto, el archivo de configuración principal se encuentra en `/etc/nginx/nginx.conf`. Las configuraciones de sitios específicos deben organizarse dentro de `/etc/nginx/sites-available/` y activarse mediante enlaces simbólicos a `/etc/nginx/sites-enabled/` para mantener un entorno limpio y modular.

> [!TIP]
> puedes subir tus contenedores a el repositorio de dockeHub

> [!IMPORTANT]
> Cada vez que realices cambios en los archivos de configuración, **debes validar la sintaxis** ejecutando el comando `nginx -t` antes de reiniciar el servicio. Si la sintaxis es correcta, aplica los cambios sin interrumpir las conexiones activas usando `nginx -s reload` o `systemctl reload nginx`.

> [!WARNING]
> Configurar incorrectamente las directivas de proxy (como `proxy_pass`) puede exponer sockets internos o cabeceras sensibles. Asegúrate siempre de ocultar la versión de tu servidor agregando `server_tokens off;` en el bloque `http` para evitar que atacantes identifiquen vulnerabilidades específicas de la versión.

> [!CAUTION]
> Necesitas tenes docker desktop instalado
> good luck! developer

> ### Ready for deploy

### With docker or Podman
