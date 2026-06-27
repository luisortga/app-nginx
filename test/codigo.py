def dividir(a: float, b:float) -> float:
    """
    Divide dois números e retorna o resultado.
    """
    if b == 0:
        raise ValueError("Cero no es un divisor válido.")
    return a / b
    
    