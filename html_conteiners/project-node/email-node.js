class Validador {
  static esEmailValido(email) {
    return email.includes("@") && email.includes(".");
  }

  static esMayorDeEdad(edad) {
    return edad >= 18;
  }
}

console.log(Validador.esEmailValido("hola@correo.com")); // true
console.log(Validador.esMayorDeEdad(15)); // false