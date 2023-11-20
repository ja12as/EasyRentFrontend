# EJERCISE 6 PYTHON
# AUTOR: JOSE ARMANDO AVENDAÑO SAUCEDO
# FECHA:

from datetime import date
hoy = date.today()
print("Hoy es el dia: ", hoy)

horas = int(input("ingrese la hora de inicio del evento: "))
minutos = int(input("Ingrese los minutos que indica el evento: "))
duracion = int(input("Ingrese el tiempo que dura el evento: "))

total_minutos = (minutos + duracion )% 60
parcial_hora = (minutos + duracion )// 60
total_hora = (horas + parcial_hora)%24

print(" El evento finaliza a la(s) ", total_hora, ":",total_minutos)