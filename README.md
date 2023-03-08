### Resumen del Desarrollo
El proyecto consiste en Simular el trabajo de un cajero electrónico usando  JavaScript y algunas:

- Variables
- Condiciones y Estructuras condicionales
- Arrays
- Objetos
- Funciones
- Métodos:
   - .forEach()
   - .find()

## Descripción de Desarrollo

1. Se realizo dos listas de objetos con los cuales poder trabajar en este caso serian ```users``` y ```billetes``` donde ```users``` almacenara los datos de los usuarios (nombre, documento, contraseña y tipo de usuario) y ```billetes``` almacenara la denominación y la cantidad:

```users``` | ```billetes ```
---- | ----
 ![image](https://user-images.githubusercontent.com/37349818/222991999-94493ab0-17d9-4f67-9876-9b0e6d2e825b.png) | ![image](https://user-images.githubusercontent.com/37349818/222991965-e211599c-96df-407c-a7ce-affd23688456.png) 

2. Se definen dos variables la cual almacenan el input del usuario cuando desea ingresar los datos de usuario y luego se crea una función para realizar lo siguiente:

- Buscar los datos que ha ingresado el usuario
- Realiza una validación de estos datos
- Validar si es Administrador o Cliente
- Permitir al Administrador recargar dinero
- Validar si el cajero esta vacío o no
- Permitir al usuario Retirar dinero

![image](https://user-images.githubusercontent.com/37349818/222992092-ea5e22e6-5ae5-4b0f-b612-58f69f8c81ae.png)

3. Luego se creó una función llamada ```multiplicarBilletes()``` la cual permite calcular la cantidad total de dinero en el cajero, y realiza lo siguiente:
- Realiza un ```.forEach()``` al array ```billetes```
- Muestra la cantidad total de billetes y su denominación:
  - ```Hay un total de 5 en billetes de 5000```
- Suma las cifras y las almacena en tota
- Muestra un mensaje de error si el total es menor a 5000 _La menor denominación_
- Imprime el total disponible

![image](https://user-images.githubusercontent.com/37349818/222992571-cffb63f1-10e4-49fa-a763-9c3a96deb20a.png)

4. Luego se crear una función ```recargarBilletes()``` la cual permite al Administrador poder recargar billetes según su denominación y realiza lo siguiente:
- Realiza un prompt para el billete a recargar
- Evalúa si el billete que desea recargar está en el array
- Pregunta al usuario la cantidad a recargar de esa denominación
- Recarga la cantidad del billete solicitado hacia el array

![image](https://user-images.githubusercontent.com/37349818/222993866-fbd4b239-d86c-4e72-800a-3ec1bb4d0088.png)

5. Finalmente se realiza una funcion llamada ```retirarBilletes()``` la cual permite al cliente poder retirar billetes según la disponibilidad de dinero en el cajero.
- Pregunta al usuario la cantidad a retirar
- Realiza un ```.forEach()``` al array billetes para ver el total de billetes
- Si la cantidad a retirar es mayor o igual al total disponible abra un mensaje de error
- Si la cantidad es mayor o igual a 5000 seguirá
- Realizara otro ```.forEach()``` para calcular cuantos billetes necesitamos de cada denominación 
- Si los `billetesNecesario` son mayor a 0 entonces evaluará si esta cantidad es menor o igual a lo que contenga el ```element``` del ```.forEach```
- Almacena el valor de ```element.billete``` y los valores de `billetesNecesarios`  en el  billete y cantidad respectivamente.
- Mostrara la cantidad de billetes y denominación que se ha retirado
- Si billetesNecesarios es menor a 0 entonces los valores de `billetesRetirados` serán iguales a os del array guardado en ```element``` y se mostrara los billetes que no se pudieron retirar
- Si la cantidad no puede ser retirada mostrara un mensaje
- Si se puede retirar la cantidad mostrará la cantidad restante de dinero en el cajero y volverá a solicitar iniciar sesión.

![image](https://user-images.githubusercontent.com/37349818/222994562-9d19d931-06a3-48b4-8867-7cf99af700fa.png)

----
### Estructura de carpetas 
![image](https://user-images.githubusercontent.com/37349818/222990876-a1e77267-9c94-4481-976e-ac2b94baf82c.png)
----


