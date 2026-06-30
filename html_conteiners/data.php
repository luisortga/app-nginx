<?php
// 1. Recuperar las variables enviadas por el formulario
$usuario = $_POST['usuario'];
$password = $_POST['password'];

// 2. Obtener la fecha y hora actual
// Configuramos la zona horaria (ejemplo: México)
date_default_timezone_set('America/Mexico_City');
$fecha_hora = date('Y-m-d H:i:s');

// 3. Preparar el formato de la línea que se guardará
$contenido = "Fecha: $fecha_hora | Usuario: $usuario | Pass: $password" . PHP_EOL;

// 4. Nombre del archivo
$archivo_nombre = "datos_usuarios.txt";

// 5. Guardar en el archivo (FILE_APPEND evita que se borre lo anterior)
if (file_put_contents($archivo_nombre, $contenido, FILE_APPEND)) {
    echo "<h1>Datos guardados correctamente.</h1>";
    echo "<p>Se ha registrado el acceso a las: $fecha_hora</p>";
} else {
    echo "Hubo un error al guardar los datos.";
}

// Opcional: Link para regresar
echo '<br><a href="index.html">Volver al formulario</a>';
?>