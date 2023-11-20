# EJERCISE 2 PYTHON
# AUTOR: JOSE ARMANDO AVENDAÑO SAUCEDO
# FECHA:

from datetime import date
hoy = date.today()
print("Hoy es el dia: ", hoy)

print("¡Vamos a calcular el valor de la hipotenusa!")
cateto1 = int(input("Ingresa el valor del cateto 1: "))
cateto2 = int(input("Ingresa el valor del cateto 2: "))

resultado = str((cateto1**2)+(cateto2**2))

print("El valor de la hipotenusa es: ", resultado)