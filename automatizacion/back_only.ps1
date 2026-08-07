$origin = "D:\Python\PythonAdvanced\Powershell_course\originals"
$backup = "D:\Python\PythonAdvanced\Powershell_course\backups"

$files = Get-ChildItem $origin

# ahora copiar .md y .txt
foreach ($file in $files) {
    if ($file.Extension -eq ".md" -or $file.Extension -eq ".txt") {
        Copy-Item -Path $file.FullName $backup -Force
    }
}