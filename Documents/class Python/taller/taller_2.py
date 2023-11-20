# TALLER 2 PYTHON
# AUTOR: JOSE ARMANDO AVENDAÑO SAUCEDO
# FECHA:

from datetime import date
hoy = date.today()
print("Hoy es el dia: ", hoy)

a = int(input("Digite ell primer número: "))
b = int(input("Digite ell segundo número: "))
c = int(input("Digite ell tercer número: "))

x = [a, b, c]

print("El valor maximo es: ", max(x))
print("El valor minimo es: ", min(x))
print("La suma de los 3 numeros es: ", sum(x))
print()

z = float(input("Digite un numero con decimales: "))
redondo = round(z)
print("El valor de " , z, " redondeado es: ", redondo)
print()

frase = input("Digite una oracion: ")
print("La frase en mayuscula es: ", frase.upper())
print("La frase en minuscula es: ", frase.lower())
print("La frase con mayuscula inicial es: ", frase.capitalize())
print("La frase  con palabras en mayuscula es: ", frase.title())
print("La longitud de la frase: ", len(frase)," caracteres")
print()
print("...FIN...")