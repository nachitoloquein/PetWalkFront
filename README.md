<p align="center"><a href="https://ionicframework.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" width="400"></a></p>


# Ionic Framework
Este proyecto se llevó a cabo en Ionic en la versión 6 a modo de Front-end. Basicamente se consumen los WebServices del servidor NodeJS a través de una arquitectura REST definiendo la estructura de los datos, procesandolos entre la vista y el modelo  y mostrandolos de forma estética al usuario definiendo una sólida aplicación móvi. Este proyecto tiene como arquitectura principal los microservicios desde diversos endpoints (APIS externas) y se pueden separar los paquetes de acuerdo a los roles de los usuarios de las cuales derivarán las vistas de este proyecto.

## Instalación
Antes de clonar directamente el proyecto desde la rama principal se necesita tener instalado:
- https://nodejs.org/es/
- https://ionicframework.com
```sh
   git clone https://github.com/nachitoloquein/PetWalkFront.git
   cd petwalkfront
   npm i
   ionic serve
```