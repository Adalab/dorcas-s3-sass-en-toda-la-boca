# Sprint 3: SASS en toda la boca
Somos el equipo Sass en toda la boca, compuesto por Alex, Gemma, Mariví y Raquel.

Este proyecto es el tercero que realizamos en Adalab, es un caso de código heredado que parte del proyecto de otras compañeras del sprint pasado. El objetivo propuesto era convertir una web basada en JavaScript vainilla a la libreria React consiguiendo al final una SPA (Single Page Application).

Esto ha supuesto todo un reto por la complejidad de trabajar con una lógica pensada por otras personas y la organización de ficheros de los estilos.

Cada semana teniamos unos hitos que cumplir que explicamos a continuación.


- Primera semana (2 dias):

  >  En el arranque del proyecto creamos un trello para organizar todas las tareas, asignar quein las ejecutaba y demás.

- Segunda semana: 

  >  Pasamos el código JS a ES6, definimos la estructura de componentes React de la aplicación creando dichos componentes y ficheros correspondientes y comunicamos información por props

- Tercera semana: 

  > Incluimos el estado y los eventos de React que ibamos a ir necesatando e incluimos las peticiones al servidor.

- Cuarta semana:

  >  Hemos incluido react router en nuestro proyecto, el localStorage, el reset y las propTypes.

- Quinta semana:

  > Hemos preparado la presentación del proyecto y arreglado pequeñas cositas pendientes.

Todo este trabajo lo hemos hecho pairProgramming puesto que 4 ojos ven mas que dos.

Tenemos que instalarnos npm-run-all para poder lanzar varias tareas a la vez, es decir, las de React y las nuevas de Sass:

npm install --save-dev npm-run-all

Para empezar a usar React Router, en nuestro proyecto generado con create-react-app debemos instalar y guardar la dependencia de npm de la siguiente manera:

npm install --save react-router-dom

Tendremos que instalar el paquete prop-types de npm primero. Lo instalaremos en nuestro proyecto desde un terminal:

npm install --save prop-types