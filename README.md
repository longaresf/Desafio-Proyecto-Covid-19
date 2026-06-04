# COVID-19 Tracking API & Authentication Backend

Este repositorio contiene una API RESTful robusta desarrollada en **Node.js** para la gestión y seguimiento de datos relacionados con el COVID-19. El sistema implementa una arquitectura segura mediante el uso de **JSON Web Tokens (JWT)** para la autenticación y autorización de usuarios, garantizando la persistencia de la información a través de una integración eficiente con una base de datos [indicar aquí si es MongoDB / MySQL / PostgreSQL].

## 🚀 Características y Funcionalidades Técnicas

* **Arquitectura RESTful:** Endpoints estructurados y semánticos para el consumo de datos de forma limpia y eficiente.
* **Seguridad y Autenticación (JWT):** Control de acceso mediante tokens firmados. Implementa rutas protegidas que exigen validación de identidad en los *headers* de la petición.
* **Gestión de Sesiones Segura:** Encriptación de contraseñas en el backend utilizando [mencionar si usaste bcrypt / crypto] antes del almacenamiento en la base de datos.
* **Persistencia de Datos:** Modelado y estructuración de datos para optimizar las consultas relacionadas con registros epidemiológicos y usuarios.

## 🛠️ Stack Tecnológico

* **Entorno de Ejecución:** Node.js
* **Framework Backend:** Express.js [o el framework que hayas usado]
* **Autenticación:** JSON Web Tokens (jsonwebtoken)
* **Base de Datos:** [Ejemplo: MongoDB con Mongoose / PostgreSQL con Sequelize]
* **Pruebas de API:** [Ejemplo: Postman / Insomnia / Thunder Client - borrar si no aplica]

## 🔐 Seguridad y Control de Acceso

El mayor valor técnico de este proyecto radica en su flujo de seguridad:

1. **Registro e Inicio de Sesión:** El usuario envía sus credenciales; el servidor verifica la identidad y genera un token JWT único y firmado con una clave secreta del entorno.
2. **Autorización mediante Middleware:** Se desarrolló un *middleware* personalizado que intercepta las peticiones en rutas críticas. Este módulo extrae el token, verifica su validez y caducidad, y permite o deniega el acceso a los datos del COVID-19.
3. **Variables de Entorno:** Configuración segura de credenciales críticas (claves de BD, secretos de JWT) mediante variables de entorno para evitar la exposición de datos sensibles en el repositorio.

## 📌 Endpoints Principales (Ejemplos)

* `POST /api/auth/register` - Registro de nuevos usuarios y administradores.
* `POST /api/auth/login` - Autenticación y obtención del token JWT.
* `GET /api/covid/data` - **[Ruta Protegida]** Obtención de métricas epidemiológicas.
* `POST /api/covid/report` - **[Ruta Protegida]** Inserción de nuevos reportes de casos.

## 🔧 Instalación y Configuración Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/longaresf/covid-tracking-backend.git](https://github.com/longaresf/covid-tracking-backend.git)
    ```
2. **Ingresar al directorio::**
  Bash
  cd covid-tracking-backend

3. Instalar dependencias de Node.js

4. Configurar Variables de Entorno:
Crea un archivo .env en la raíz del proyecto y añade tus credenciales (puedes basarte en el archivo de ejemplo):

  Fragmento de código
  
  PORT=3000
  DB_URI=tu_cadena_de_conexion_a_base_de_datos
  JWT_SECRET=tu_clave_secreta_super_segura

5. Iniciar el servidor:
  Bash
  npm start # o npm run dev si configuraste nodemon


✒️ Autor

    Francisco Longares - Desarrollador Backend - longaresf
   
