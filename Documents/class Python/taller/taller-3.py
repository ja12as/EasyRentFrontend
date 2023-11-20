# TALLER 3 PYTHON
# AUTOR: JOSE ARMANDO AVENDAÑO SAUCEDO
# FECHA:

from datetime import date
hoy = date.today()
print("Hoy es el dia: ", hoy)

a = int(input("Digite el valor de A: "))
b = int(input("Digite el valor de B: "))
if a >= b:
    print("A es mayoy o igual a B")
else:
    print("A es menor que B")
print()


curso1 ="Requerimientos"
curso2 = "Algoritmos"
print("El curso 1 es: ",curso1)
print("El curso 2 es: ",curso2)
if curso1 == "Requerimientos" and curso2 == "Algoritmos":
    print("usted estudia programacion de software")
else:
    print("USted estudia otro programa diferente a programacion de software")
print()

print("***   Final del analisis del programa de formacion SENA   ***")
print()

frase = input("digite una oracion: ")
print("La frase en mayuscula es: ", frase.upper())
longitud = len(frase)
print(" La longitud de la frase es: ", len(frase), " caracteres")
if longitud > 10:
    print("LA frase contiene mas de 10 caracteres")
else:
    print("La frase contiene menos de 11 caracteres")
print()
print("...   FIN   ...")
