import numpy as np
import time

# Matriz 10,000 x 10,000
matriz = np.random.rand(10000, 10000)

# ❌ LENTO: Acceso por columnas (saltando en memoria)
inicio = time.time()
suma = 0
for j in range(10000):           # Columnas
    for i in range(10000):       # Filas
        suma += matriz[i, j]     # Saltos grandes en memoria
tiempo_lento = time.time() - inicio

# ✅ RÁPIDO: Acceso por filas (memoria contigua)
inicio = time.time()
suma = 0
for i in range(10000):           # Filas
    for j in range(10000):       # Columnas
        suma += matriz[i, j]     # Lectura secuencial
tiempo_rapido = time.time() - inicio

print(f"Acceso por columnas: {tiempo_lento:.3f}s")
print(f"Acceso por filas: {tiempo_rapido:.3f}s")
print(f"Diferencia: {tiempo_lento/tiempo_rapido:.1f}x más lento")
# Resultado típico: ¡10-20x más lento!