# EJERCISE 8 PYTHON
# AUTOR: JOSE ARMANDO AVENDAÑO SAUCEDO
# FECHA:

from datetime import date
hoy = date.today()
print("Hoy es el dia: ", hoy)

income = float(input("Ingresa tu ingreso anual: "))

if income <= 85528:
    tax = round((income * 0.18) - 556.02)
else:
    tax = round((14839.02 + ((income - 85528) * 0.32)))

if tax < 0:
    tax = 0

print("El impuesto calculado es:", tax, "pesos")