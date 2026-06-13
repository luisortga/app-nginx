#
import asyncio
import time

async def saludar(nombre: str):
    print(f"Hola {nombre}...")
    await asyncio.sleep(1)  # Simula una operación lenta (I/O)
    print(f"¡Adiós {nombre}!")
    return f"Saludo completado para {nombre}"

async def main():
    # Ejecutar una sola corrutina
    resultado = await saludar("Mundo")
    print(resultado)
    
def querysqlite(parameter: str) -> str:
    time.sleep(16)
    return f'valid ... {parameter}'

# Ejecutar el programa
asyncio.run(main())

# after
querysqlite('successful')