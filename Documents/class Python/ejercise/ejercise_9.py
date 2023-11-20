# EJERCISE 9 PYTHON
# AUTOR: JOSE ARMANDO AVENDAÑO SAUCEDO
# FECHA:

from datetime import date
hoy = date.today()
print("Hoy es el dia: ", hoy)

secret_number = 7 # Número secreto elegido por el mago

while True:
    user_number = int(input("Ingresa un número entero: "))

    if user_number == secret_number:
        print("¡Bien hecho, muggle! Eres libre ahora.")
        break
    else:
        print("¡Ja, ja! ¡Estás atrapado en mi bucle!")