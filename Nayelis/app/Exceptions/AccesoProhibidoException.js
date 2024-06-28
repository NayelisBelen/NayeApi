'use strict'

// Cargar la excepción lógica del paquete de excepciones genéricas de AdonisJS
const { LogicalException } = require('@adonisjs/generic-exceptions')

// Crear una clase para manejar excepciones de acceso denegado, extendiendo LogicalException
class AccesoProhibidoException extends LogicalException {
  /**
   * Método para gestionar la excepción de acceso prohibido
   * @param {*} error - El error capturado
   * @param {*} ctx - Contexto de la solicitud y respuesta
   */
  handle(error, { response }) {
    // Responder con un estado 403 (Acceso Denegado) y un mensaje de error
    return response.status(403).json({
      error: 'Acceso no permitido al recurso'
    });
  }
}

// Exportar la clase AccesoProhibidoException para que pueda ser utilizada en otros módulos
module.exports = AccesoProhibidoException;
