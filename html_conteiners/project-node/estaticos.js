class Calculadora {
  static sumar(a, b) {
    return a + b;
  }

  static restar(a, b) {
    return a - b;
  }
}

// Se llama directamente desde la clase, sin crear un objeto
console.log(Calculadora.sumar(5, 3));   // 8
console.log(Calculadora.restar(5, 3));  // 2