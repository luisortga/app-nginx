import unittest
from codigo import dividir

class TestDividir(unittest.TestCase):
    
    def test_dividir(self):
        self.assertEqual(dividir(10, 2), 5)
        self.assertEqual(dividir(-10, 2), -5)
        self.assertEqual(dividir(10, -2), -5)
        self.assertEqual(dividir(-10, -2), 5)
        self.assertAlmostEqual(dividir(1, 3), 0.3333333333333333)
        
    def dividir_negativo(self):
        self.assertEqual(dividir(-10, 2), -5)
        self.assertEqual(dividir(10, -2), -5)
        self.assertEqual(dividir(-10, -2), 5)
    
    def dividor_decimal(self):
        self.assertAlmostEqual(dividir(1, 3), 0.3333333333333333)
        self.assertAlmostEqual(dividir(2.5, 0.5), 5)
        self.assertNotEqual(dividir(1, 3), 0.333)
        
    def dividir_por_cero(self):
        with self.assertRaises(ValueError):
            dividir(10, 0)
            
class TestConexionDummy(unittest.TestCase):
    def setUp(self):
        # Configuración de la conexión dummy
        print("Configurando la conexión dummy...")
        self.conexion = "Conexión Dummy"
        
    def test_operacion_uno(self):
        # Simulación de una operación que requiere la conexión dummy
        print(f"Realizando operación uno con {self.conexion}...")
        resultado = dividir(10, 2)
        self.assertEqual(resultado, 5)
        
    def tearDown(self):
        # Limpieza de la conexión dummy
        print("Cerrando la conexión dummy...")
        self.conexion = None
      

if __name__ == '__main__':
    unittest.main()