for ($i = 1; $i -le 6; $i++) {
    Write-Host "Iteration $i"
}

# foreach loop
<#
    foreach el bucle mas utilizado en PowerShell, se utiliza para iterar sobre una colección de elementos.
#>

$files = Get-ChildItem -Path "D:\Python\PythonAdvanced\Powershell_course\originals"
# Los objectos

foreach ($file in $files) {
    Write-Host "Archivo encontrado: $($file.FullName)"
}

$count = 1

<#
while($true) {
    Write-Host "Iteration $count"
    $count++
    if ($count -gt 6) {
        break
    }
}#>


# -gt significa "greater than" (mayor que) y -lt significa "less than" (menor que).

while($true) {
    Write-Host "Iteration $count"
    $count++
    if ($count -gt 6) {
        break
    }
}

while($count -le 3) {
    Write-Host "Iteration $count"
    $count++
}

# funciones
function Obtener-Mensaje {
    $texto = "Hello World"
    Write-Output $texto
}

# call function Obten-Mensaje
Obtener-Mensaje