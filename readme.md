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

# Material
He estado utilizando flex-box (CSS) en el proyecto, pero no me da el responsive adecuado. Al reducir las medidas y sin haber hecho las @query todo se desajusta.
Voy a utilizar el flex-layout nativo de Material para que al menos el responsive sea correcto.

![](https://i.imgur.com/DvWxYqg.jpg)

Perdida de los ficheros de @angular/animation. Descarga de los mismos.

Trabajando en la maquetación en el ambito "mobile first". Aún sin poder probar todas las características de flex-layout Material, está claro
que trabajan mejor juntos que el sistema flex-box. Por otro lado la lista de las URL... me está costando el hecho de centrar los titulos y la lista en si. 
El default que raúl nos coloco "heigth: 100%;" pensado para la side nav bar, me estaba creando un segundo scroll en el componente fotografías-list.
He cambiado el 100% por un auto; y el problema parece resuelto.


![](https://i.imgur.com/DRpdpe4.png)

APP lista para la entrega. Estilos colocados en los diferentes modulos (mucho más ordenado de este modo que una sola hoja de estilos para toda la web!), 
aunque no he conseguido centrar la maldita tabla de fotografia -list. Material en más profundiidad.


![](https://i.imgur.com/LQej3Ec.png)

Las conclusiones en este apartdo son muy claras: Angular y Material van de la mano. Podemos utilizar Flex-box y cualquiera de los comandos de CSS , pero 
el responsive será mucho más intuitivo con los módulos de Material. Otro concepto que debo aprender.

# Presentaciones

Slides (https://slides.com/naranjito72/deck) es la herramienta aconsejada para hacer la presentación de nuestra app. No la conocía y su uso resulta muy amigable y recomdable.


![](https://i.imgur.com/j3gLejQ.png)

Presentación finalizada. Mock ups acabados. Arquitectura: check. Sólo queda subir a producción.

# Not Found

Último componente que colocado antes de subir  a producción. A template de https://freefrontend.com/html-css-404-page-templates/ 


![](https://i.imgur.com/BShjkxS.png)

# Problemas serios en Node:modules

AL preparar la app para subir a producción Visual y la app se han vuelto locos: No reconocía propiedades de Material (MatTableContentModule, MatTable, MatIcon...) ,no reconocía funciones del test.ts, no reconocía el enrutamiento de MaterialModule en los diferentes módulos, no reconociam environments (¿?)... Apago el ordenador y volveré a intentarlo más tarde, no puedo arriesgarme a perder TODA la APP por unos errores que yo no he cometido

# Producción II

Problemas técnicos de mi portátil me impidieron ayer subir a producción. Segundo intento.
En la consola parece que todo está bien, iniciaremos el build para la subida a producción.

![](https://i.imgur.com/5e5cdP0.png)

Creo haber encontrado la causa de todos los problemas: en el documento environment.ts ,cambio de  export const enviroment = { } a export const environment = { }. Necesito revisar los json para confirmar que todo es correcto. Terminal no me indica fallo de momento.
  Creación de las API online sin problema en Heroku, paso a cambiar la ruta en environments

![](https://i.imgur.com/WWU788n.png)

ng build --prod realizado, por fin, de manera exitosa. Continuamos para subir nuestra app

# Producción

La primera subida a cDMon, ha sido un éxito, La primera subida a siteGround tambien....hasta que he tocado el codigo.

Dejo así la app hasta mañana. SE visualizan en las dos url :

https://www.theclick36.com/photoweb/home

http://photoweb.com.mialias.net/home



# Conclusiones

    Este mes de Agosto quiero mejorar este proyecto : members, adMember, deleteMember, adUrl, deleteUrl... Mejorar la interfaz (Material positioning), css (Material) para que me sirva de projecto final en MongoDb. 

    La profundidad de Angular es evidente. ¿ Haría un portfolio con Angular? A día de hoy, no. Creo que hay otros cr más apropiados para ello. ¿Me haría mi propio portfolio sólo con Angular? Quiero hacerlo. Angular ofrece una  herramienta muy potente con los modulos y el estancamiento de los mismos en la app (llamadas asincronas, trasvase de datos entre modulos) que le da, bajo mi punto de vista, mas maleabilidad que el simple html/css/js a pelo.

    Dar las gracias a todos y cada uno de mis  compañeros por el apoyo prestado. Sin ellos esto no hubiera sucedido. 
	
# Mock ups con Pencil


 URL post: https://imgur.com/a/z6r4QY1 
 
 
 

		
			
			
			 




