
import re
import pandas as pd

correosValidos=[]
correosInvalidos=[]

def IngresarCorreo(): 
    correo = pd.read_excel('expresionesRegulares\Libro1 2.xlsx', header=None, names=['correo'])
    ValidarCorreo(correo)
    print("validos")
    print(correosValidos)
    print("invalidos")
    print( correosInvalidos)

correosValidos=[]
correosInvalidos=[]

def ValidarCorreo(correo):
    for index, row in correo.iterrows():
        correo = row['correo']
        if not re.match(r"^[a-zA-Z0-9_.+-]+@[correo]+\.[tdea]+\.[edu]+\.[co]+$", correo):
           correosInvalidos.append({correo})
        else:
            correosValidos.append({correo})


IngresarCorreo()
