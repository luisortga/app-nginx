function Greet {
    param (
        [string]$name
    )
    Write-Host "Hola, $name!"
}

Greet -name "Fernando"

# Este bloque de codigo define una función llamada "Greet" que toma un parámetro de tipo string llamado "name". Cuando se llama a la función con un nombre, imprime un saludo en la consola. En este caso, se llama a la función con el nombre "Fernando", por lo que se imprimirá "Hola, Fernando!" en la consola.
function Saludar-Persona {
    param (
        [string]$Surname
    )
    Write-Host "Hello, $Surname!"
}

Saludar-Persona -Surname "Ortega"