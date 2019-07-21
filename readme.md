# Photolove

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Idea Original

App pensada para la eleccion de URL'S de fotografías de páginas gratuitas y de calidad. 
Raúl pide una app que recoja todo lo expuesto en el curso.

## So Far...

Generación del proyecto, ordenacion de los modulos, enrutamiento (fijo y lazy) de una manera metódica y ordenada

# Next goal

jSon de las URL's. Conseguir leer las Url de la base de datos y formulario. Intentaré el login. Estilos .

## Tarde/Noche de locos!

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

Gracias a la ayuda de mis compañeros ( Dani "elix el Gato", Fran y Miguel) me he dado cuenta queestaba utilizando componentes sueltos
sin conexión y pretendia (logrado de hecho) que realizaran más funciones de las que es recomdable relizar en un sólo componente.
 Dadas las especificaciones del proyecto, he decidido reiniciarlo de nuevo utilizando una estructura más ordenada, pasando de esto:

 ![](https://i.imgur.com/vJQ7bsn.png)

 a una arquitectura más coherente:

 ![](https://i.imgur.com/xnzIJpP.png)

 dando como resultado una estructura más ordenada y preparada para los requerimientos pedidos.
 ![](https://i.imgur.com/LaXm3QS.png)


