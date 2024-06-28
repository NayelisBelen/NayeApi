'use strict'

// Cargar la excepción lógica del paquete de excepciones genéricas de AdonisJS
const { LogicalException } = require('@adonisjs/generic-exceptions')

// Crear una clase para manejar excepciones de recurso no encontrado, extendiendo LogicalException
class RecursoNoEncontradoException extends LogicalException {
  /**
   * Método para gestionar la excepción de recurso no encontrado
   * @param {*} error - El error capturado
   * @param {*} ctx - Contexto de la solicitud y respuesta
   */
  handle (error, { response }) {
    // Responder con un estado 404 (Recurso no encontrado) y un mensaje de error
    return response.status(404).json({
      error: 'El recurso no existe'
    });
  }
}

// Exportar la clase RecursoNoEncontradoException para que pueda ser utilizada en otros módulos
module.exports = RecursoNoEncontradoException;
