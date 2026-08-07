$extension = ".js"

switch ($extension) {
    ".js" { Write-Host "El archivo es un archivo JavaScript." }
    ".py" { Write-Host "El archivo es un archivo Python." }
    ".txt" { Write-Host "El archivo es un archivo de texto." }
    ".html" { Write-Host "El archivo es un archivo web." }
    default { Write-Host "El tipo de archivo no está especificado." }
}

# Este es un comenario de una sola línea

<#
    Este es un comentario de varias líneas
    que puede abarcar varias líneas de código.
#>