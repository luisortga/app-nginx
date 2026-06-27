import pytest
from calcular import sum

def test_sum():
    assert sum(2.0, 3.0) == 5.0
    assert sum(-1.0, 1.0) == 0.0
    assert sum(0.0, 0.0) == 0.0
    assert sum(1.5, 2.5) == 4.0
    
def test_sum_with_negative_numbers():
    assert sum(-2.0, -3.0) == -5.0
    assert sum(-1.0, -1.0) == -2.0
    assert sum(-5.5, 2.5) == -3.0
    
def test_sum_with_large_numbers():
    assert sum(1e10, 1e10) == 2e10
    assert sum(1e20, 1e20) == 2e20
    assert sum(1e30, 1e30) == 2e30
    
@pytest.fixture
def usuario_ejemplo() -> dict[str, str | int]:
    print("Configurando el usuario de ejemplo...")
    return {"nombre": "Luis", "edad": 30, "ciudad": "Madrid"}

def test_usuario_nombre(usuario_ejemplo: dict[str, str | int]) -> None:
    assert usuario_ejemplo["nombre"] == "Luis"  # This assertion will fail because the fixture returns "Juan"

# valor parametrizado

"""
    Valor parametrizado: permite ejecutar la misma prueba con diferentes conjuntos de datos, lo que ayuda a cubrir más casos de prueba sin duplicar código.
"""

@pytest.mark.parametrize("a, b, expected", [
    (2.0, 3.0, 5.0),
    (-1.0, 1.0, 0.0),
    (0.0, 0.0, 0.0),
    (1.5, 2.5, 4.0)
])
def test_sum_parametrized(a: float, b: float, expected: float) -> None:
    assert sum(a, b) == expected