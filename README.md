# API BACKEND, PARCIAL 1 ARQUITECTURA ORIENTADA A SERVICIOS

_Repositorio de entrega primer parcial Arquitectura orientada a servicio correspondiente a una API backend hecha con express js donde se pueda realizar acciones de un CRUD, Login, con sus validaciones correspondientes_

## Autores ✒️

* **Juan Daniel Galeano** - *192016*
* **Jhonatan Quiroga** - *191957*

## Construido con:

* Express js  - El framework web usado
* pg- modulo, Cliente PostgreSQL para Node.js, JavaScript puro y enlaces nativos libreria opcionales.
* morgan  - modulo, HTTP request logger middleware para node.js.

## Funcionamiento:
*  Para desplegar este proyecto es necesario crear una base de datos en postgreSQL

Modificamos los parametros los parametros en el respectivo orden para enviarlos:
*  **nombre de la base de datos**  -  el nombre de la base de datos creada es 'carro'
*  **usuario**  -  Ingrese el usuario de la base de datos, por defecto es 'postgres'
*  **constraseña**  -  contraseña de la base de datos, ejemplo '1234'
  
## _Ejemplo:_
```
postgres://postgres:1234@localhost:5432/postgres
```

## Modelos:

*    carro
```
{
  "anyo": String o Int
  "nombre": String
  "empresa": String
  "id_modelo": String
  "id_color": String
  "id_motor": String
}
```
*    User
```
{
    username: String
    doc: String
    contrasena: String
}
```

## Rutas 
_Este apartado nos sirve para realizar las acciones del crud se van a especificar como funcionan la rutas_

###    auth
_Entrada JSON por el body para registrarse:_
```
{
  "doc": "1005001756", 
  "username": "Jhonatan",
  "password": "12345678"
}

```
*    register: post    -    registrar usuario
```
http://localhost:8000/auth/Register

```
* _Entrada JSON por el body para iniciar sesión:_
```
{
  "username": "Jhonatan", 
  "password": "12345678"
}
```

*    Login: post    -    iniciar sesion
```
http://localhost:8000/auth/Login
```

###    carros
*    get: getcarros  -  Da la lista de todos los carros registrados, el motor, el color, y el  modelo.

_ruta_
```
http://localhost:8000/api/carros
```
*  post: createCarro -  Crea un carro
_ruta_
```
http://localhost:8000/api/carro
```
_Modelo JSON_: Ejemplo
```
{
  "anyo": 2024,
  "nombre": "LaFerrari",
  "empresa": "Ferrari",
  "id_modelo": "2",
  "id_color": "3",
  "id_motor": "1"
}
```
*  put: updateCarro  -  Modifica el carro, buscandolo por id

_ruta_
```
http://localhost:8000/api/carro/[id]

  ejemplo
http://localhost:8000/api/carro/1
```
_Modelo JSON_
```
{
  "anyo": 2024,
  "nombre": "LaFerrari",
  "empresa": "Ferrari"
}
```

*  delete: deleteCarro  -  Borra el carro haciendo una busqueda por el id
_ruta_
```
http://localhost:8000/api/carro/[id]

  ejemplo
http://localhost:8000/api/carro/1
```

*  get: getCarUniModel  -  Muestra el producto haciendo busqueda por el id

_ruta_
```
http://localhost:8000/api/carro/[id]

  ejemplo
http://localhost:8000/api/carro/1
```
