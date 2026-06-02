
class Nvidia:

    pass

resultado = 0
for i in [3, 3, 5]:
    if resultado >= i:
        resultado = resultado - i
    else:
        resultado += i

print(resultado)
name: str = 'luis'

if resultado == 0:
    name = 'luis'
elif resultado > 0:
    name = 'ortega'

match name:
    case 'luis':
        print()
    case 'ortega':
        print()