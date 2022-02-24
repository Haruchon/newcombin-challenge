# NewCombin Challenge by Bruno Díaz

Hola! Aquí les entrego el proyecto que alberga el resultado del desafío.

Solo deben instalar las dependencias y ejecutar el proyecto para iniciar.

<details>
<summary>npm</summary>

```sh
$ npm install

$ npm start
```

</details>

<details>
<summary>yarn</summary>

```sh
$ yarn install

$ yarn start
```

</details>

Y no olviden ejecutar también el proyecto de los servicios que me proporcionaron!

#

Asumí que debía cargar la tabla (a través del servicio GET) al menos una vez al entrar a la página web (y por consecuencia cada vez que se entre a la página), así que los 2 minutos de espera que se requieren empiezan después de ingresar a dicha página.

#

Le agregué una pequeña landing page al root url del proyecto, para ingresar a la página del Form, por favor hacer click en "Start here!"

Aprovecho esta acción para cargar el token desde los servicios.

Agregué esto para que cuando el token expire mediante un refresco de página, se regrese automáticamente al root url para poder volver a cargar el token con dicha acción.
(Esto pasa debido a mi elección por usar custom hooks en lugar de algo que pueda persistir el token dentro de la página, pero también es conveniente puesto que cada cierto tiempo el token expira).

Eso sería todo, estaré atento a sus comentarios.

Buenos días ^^
