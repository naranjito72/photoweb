# Photolove

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Idea Original

App pensada para la eleccion de URL'S de fotografías de páginas gratuitas y de calidad. 
Raúl pide una app que recoja todo lo expuesto en el curso.

## So Far...

Generación del proyecto, ordenacion de los modulos, enrutamiento (fijo y lazy) de una manera metódica y ordenada

# Next goal

jSon de las URL's. Conseguir leer las Url de la base de datos y formulario. Intentaré el login. Estilos .

# Tarde/Noche de locos!

No he conseguido el login. Dada la falta de tiempo, creo una base de datos "fake" (webs.ts y mockWebs.ts) colocada en la carpeta shared

# Pintado de la lista en photos

Pasamos a pintar la lista en el modulo photos y lo colocaré en el componente photolist

# Problemas en el pintado de las web. 

Me hace la repetición (*ngFor), pero no como yo creia que lo había colocado (dentro del card de bootstrap)

# Comienzo de nuevo

5:30am Inicio de nuevo el proceso para la extraccion de la lista "fake"




![](https://i.imgur.com/292FgnX.png)

# Lectura correcta del *ngFor

Me aparece el listado jSon que he creado gracias a la iteracion *ngFor, pero quiero hacerlo 
más sencillo aún: una card, click, introducirme a un Array donde pueda añadir o quitar
las URL de las imagenes.

![](https://i.imgur.com/Z2eN8uK.png)

# Creación del nuevo jSon 

Una vez más, creo un jSon, con una Array de la API que Lorem Pictum me ofrece (la próxima versión será conseguir 
el crear una nueva array con forEach() y poder modificar la array devuelta por el metodo).

![](https://i.imgur.com/pIuIt9z.png)

# Creación módulo commons

![](https://i.imgur.com/zaHRvlG.png)

# Creacion jSon lista imágenes

Creacion de la Array que quiero que se ve al clicar en la card

![](https://i.imgur.com/TQ2rDEK.png)

# Inicio de un nuevo proyecto

  Gracias a la ayuda de mis compañeros ( Dani "Felix el Gato", Fran y Miguel) me he dado cuenta que estaba utilizando componentes sueltos sin conexión y pretendia (logrado de hecho) que realizaran más funciones de las que es recomdable que relice un sólo componente.
  Dadas las especificaciones del proyecto, he decidido reiniciarlo de nuevo utilizando una estructura más ordenada, pasando de esto:

 ![](https://i.imgur.com/vJQ7bsn.png)

 a una arquitectura más coherente:

 ![](https://i.imgur.com/xnzIJpP.png)

 dando como resultado una estructura más ordenada y preparada para los requerimientos pedidos.
 ![](https://i.imgur.com/LaXm3QS.png)

# Acoplamiento plantilla 

Una vez montada la estructura nueva, decidimos transladar la producción a la plantilla crud, tratando ya , una vez establecidos los módulos (fotografias) los componentes (fotografia-detalle y fotografias-list) servicios (api.fotografias.service) para poder mostrar la lista de las url de las fotografías que he ejecutado en el fichero interno jSon y he exportado al servidor localhost:3000

![](https://i.imgur.com/P6rolDn.png)

# Log in

Lo más duro, sin duda, de la producción llevada hasta ahora. Sin lugar a dudas; sin la ayuda de mis compañeros de clase, no lo habría conseguido en un sólo día. Mayor problema: crossData. Register members and Login nos han dado muchos problemas al:

    Log In
       Nos incrementaba al usuario YA inscrito en la API (localhost:3000/users) si entrábamos por el log in, 
	   como si fuera un el loop de un for() o un *ngFor()
	   
	Register
		NO nos añadía al usuario registrado. Usando la consola del navegador y el depurador del mismo, hemos tratado de analizar el origen del problema.
		
Hemos debido recorrer las funciones que tengo en el documento auth.service.

![](https://i.imgur.com/XxZihI6.png)

# Pintado de la lista

Otro problema que me está costando solventar es de añadir los campos url a la tabla. Por más que está definido como string,
![](https://i.imgur.com/ZRcyWog.png)

Problema resuelto ya que no estaba llamando correctamente al elemento en el list component html

# Imagen

Ahora deseo que en component fotografias detalle se abra una card con la información de la lista. 

Debo documentarme. En pseudo codigo entiendo que los componentes de fotografias (detalle- list) deben comunicarse, entediendo que el componente list será el padre (el inyector) y detalle component el hijo (el inyectado). Buscaré los métodos d transferencia para los componentes. Observables , Roberto ,Observables.

![](https://i.imgur.com/inwPjJP.png)

# Estilos

Dada la fecha de entrega (hoy), no puedo quedarme parado más tiempo en el código. Inicio un poco (muy ligero) estilo en CSS. Material es un gran desconocido para mi. He utilizado elementos y etiquetas que material utiliza (mat-card, card, th mat-sort, td mat-cell ) pero dado que tengo que investigar más profundamente no puedo pararme hoy en ello.

#************************************** Material**************************************
He estado utilizando flex-box (CSS) en el proyecto, pero no me da el responsive adecuado. Al reducir las medidas y sin haber hecho las @query todo se desajusta.
Voy a utilizar el flex-layout nativo de Material para que al menos el responsive sea correcto.

![](https://i.imgur.com/DvWxYqg.jpg)







