$file = "D:\Python\PythonAdvanced\Powershell_course\originals\app.js"

if (Test-Path $file) {
    Write-Host "El archivo existe."
} else {
    Write-Host "El archivo no existe."
}