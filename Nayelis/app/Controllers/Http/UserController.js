'use strict'

// Cargar el modelo de Usuario
const User = use('App/Models/User');

class UserController {
  // Función para iniciar sesión de usuario
  async login({ request, auth }) {
    // Extraer email y contraseña de la solicitud
    const { email, password } = request.all();
    // Autenticar al usuario y generar un token
    const token = await auth.attempt(email, password);
    // Devolver el token generado
    return token;
  }

  // Función para registrar un nuevo usuario
  async store({ request }) {
    // Extraer email y contraseña de la solicitud
    const { email, password } = request.all();
    // Crear un nuevo usuario con los datos proporcionados
    const user = await User.create({
      email,
      password,
      username: email // Utilizar el email como nombre de usuario
    });
    // Autenticar al usuario automáticamente después de registrarse
    return this.login(...arguments);
  };
}

module.exports = UserController;
