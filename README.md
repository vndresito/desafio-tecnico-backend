# Desafío Técnico - Backend

Este proyecto implementa un backend para un sistema de registro de usuarios, inicio de sesión y recuperación de contraseñas. Fue desarrollado como parte de un desafío técnico, usando **Nest.js**, **PostgreSQL** (a través de **Railway** y **Supabase**) y documentado con **Swagger**.

## Tecnologías

- **Nest.js**: Framework backend moderno y escalable.
- **PostgreSQL**: Base de datos relacional robusta.
- **JWT**: Autenticación mediante tokens seguros.
- **Swagger**: Herramienta para documentar la API.
- **Railway**: Plataforma para desplegar el backend.
- **Supabase**: Servicio en la nube para bases de datos.

## Acceso al Backend Público

El backend esta levantado en railway y la base de datos en supabase

- URL público del Swagger: https://desafio-tecnico-backend-production.up.railway.app/api#

## Instalación Local

1. **Clona este repositorio**:

   ```bash
   git clone https://github.com/<tu-usuario>/desafio-tecnico-backend.git
   cd desafio-tecnico-backend
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:
   Crea un archivo `.env` con el siguiente contenido:

   ```ini
    DATABASE_HOST=your-project.supabase.co
    DATABASE_PORT=5432
    DATABASE_USER=your-username
    DATABASE_PASSWORD=your-password
    DATABASE_NAME=your-database
    JWT_SECRET=your-jwt-secret
   ```

4. **Inicia el servidor en modo desarrollo**:

   ```bash
   npm run start:dev
   ```

5. **Accede a Swagger localmente**:
   ```bash
   http://localhost:3000/api
   ```

## Endpoints de la API

### 1. Registro de usuarios

**POST** `/auth/register`

- **Descripción**: Registra un nuevo usuario en el sistema.
- **Cuerpo esperado**:

  ```json
  {
    "email": "correo@gmail.com",
    "password": "password123"
  }
  ```

- **Respuestas**:
  - `201`: Usuario registrado exitosamente.
  - `400`: Datos inválidos.

### 2. Login

**POST** `/auth/register`

- **Descripción**: Inicia sesión y genera un token JWT para autenticarte.
- **Cuerpo esperado**:

  ```json
  {
    "email": "correo@gmail.com",
    "password": "password123"
  }
  ```

- **Respuestas**:
  - `201`: Token generado exitosamente.
  - `400`: Credenciales inválidas.

### 3. Recuperación de contraseña

**POST** `/auth/forgot-password`

- **Descripción**: Envía un correo con un enlace para recuperar la contraseña.
- **Cuerpo esperado**:

  ```json
  {
    "email": "correo@gmail.com"
  }
  ```

- **Respuestas**:
  - `200`: Correo enviado con éxito.
  - `400`: Error al procesar la solicitud.
