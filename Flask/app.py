from urllib import response
from flask import Flask
from flask import render_template, jsonify, request, redirect, url_for
import json
from Conexion import connect_db, get_list
import itertools
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    """Retorna la pagina index."""
    print("OK")
    if(request.method == 'GET'):
        con = connect_db()

        lista = get_list()
    return render_template('/index.html', datos=lista)

@app.route('/cargar')
def cargar():
    dic = {'nombre': '33', 'aparicion': '2', 'biografia': '33', 'personaje': '2'}
    return render_template('/cargar.html', documento=dic)


@app.route('/about')
def about():
    """Retorna la pagina about."""
    return render_template('/about.html', msj="About de la pagina")

@app.route('/punto6y7')
def punto6y7():
    """6) Probemos ahora almacenar algunos datos."""
    """7) Ahora intentemos recuperarlos para ver si todo va bien."""
    conexion = connect_db()
    #conexion.flushdb()
    #conexion.set("valor1","Cargo bien")
    #conexion.set("valor1","Cargo bien2")
    respuesta = conexion.get("valor1")

    #Tambien se podria hacer mediante el key
    #respuesta = conexion.keys("*")
    #return respuesta[0]

    return respuesta

def punto8(valor):
    """8) Ahora carguemos una lista y mostremos su contenido"""    
    conexion = connect_db()
    conexion.lpush(valor, "hasta,  ahora, cargo, bien")
    mostrar = conexion.lrange(valor,0,-1)
    return mostrar

@app.route('/punto8y10', methods=['GET'])
def punto8y9():
    """Mostramos el contenido de una lista."""
    #conexion.flushdb()
    if(request.method == 'GET'):
        conexion = connect_db()

        mostrar = punto8("valor3")
    return render_template('/punto9.html', listacompleta=mostrar)

def punto1():
    conexion = connect_db()
    conexion.select(1)
    conexion.flushdb()
    lista1 = conexion.lpush("s1_ch1", "Chapter 1, The Mandalorian, Disponible")
    lista1 = conexion.lrange("s1_ch1",0,-1)
    lista2 = conexion.lpush("s1_ch2", "Chapter 2, The Child, Disponible")
    lista2 = conexion.lrange("s1_ch2",0,-1)
    lista3 = conexion.lpush("s1_ch3", "Chapter 3, The Sin, Disponible")
    lista3 = conexion.lrange("s1_ch3",0,-1)
    lista4 = conexion.lpush("s1_ch4", "Chapter 4, Sanctuary, Disponible")
    lista4 = conexion.lrange("s1_ch4",0,-1)
    lista5 = conexion.lpush("s1_ch5", "Chapter 5, The Gunslinger, Disponible")
    lista5 = conexion.lrange("s1_ch5",0,-1)
    lista6 = conexion.lpush("s1_ch6", "Chapter 6, The Prisoner, Disponible")
    lista6 = conexion.lrange("s1_ch6",0,-1)
    lista7 = conexion.lpush("s1_ch7", "Chapter 7, The Reckoning, Disponible")
    lista7 = conexion.lrange("s1_ch7",0,-1)
    lista8 = conexion.lpush("s1_ch8", "Chapter 8, Redemption, Disponible")
    lista8 = conexion.lrange("s1_ch8",0,-1)
    lista = lista1 + lista2 + lista3 + lista4 + lista5 + lista6 + lista7 + lista8
    return lista

@app.route('/punto1', methods=['GET', 'POST'])
def mostrar1():
    """Retorna la pagina index."""
    print("OK")
    if(request.method == 'GET'):
        con = connect_db()

        lista = punto1()
    return render_template('/punto1.html', listacap=lista)


@app.route("/punto2", methods=["POST"])
def alquilar():
    if request.method == "POST":
        print(request.args["chapter"])
        conexion = connect_db()
        conexion.select(1)
        conexion.setex(request.args["chapter"], 240, "reservado")
    return "ok"


if __name__ == '__main__':
    app.run(host='web-app-flask', port='5000', debug=True)