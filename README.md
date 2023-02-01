<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
npm install
```

3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. No pude hacer funcionar docker en mi pc, asi que se debera configurar el archivo .env para la conexion con mongoose
```
Configurar una nueva base de datos en mongoDB y establecer la cadena de conexión
```

5. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la app en dev: 
```
npm run start:dev
```

8. Ejecutar la semilla
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest