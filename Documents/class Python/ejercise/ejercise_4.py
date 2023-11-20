# EJERCISE 4 PYTHON
# AUTOR: JOSE ARMANDO AVENDAÑO SAUCEDO
# FECHA:

from datetime import date
hoy = date.today()
print("Hoy es el dia: ", hoy)

opcion = input(" Que conversion desea realizar \n1. Millas a Kilometros\n2. Kilometros a Millas\nIngresa el numero de opcion: ")
if opcion == "1":
    millas = float(input("Ingrese la cantidad de millas a convertir: "))
    kilometros = millas * 1.60934
    print(f"{millas} millas equivalen a {round(kilometros, 2)} kilometros.")
elif opcion == "2":
    kilometros = float(input("Ingrese la cantidad de kilometros a convertir: "))
    millas = kilometros * 1.60934
    print(f"{kilometros} kilometros equivalen a {round(millas, 2)} kilometros.")
else:
    print("opcion incorrecta rango entre 1 y 2")