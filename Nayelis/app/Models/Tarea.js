'use strict'

// Cargar la clase Model de Lucid para definir el modelo
const Model = use('Model')

// Crear la clase Tarea que extiende de Model
class Tarea extends Model {
  /**
   * Relación: una tarea pertenece a un proyecto
   * @return {Object} - La relación belongsTo con el modelo Proyecto
   */
  proyecto() {
    return this.belongsTo('App/Models/Proyecto')
  }
}

// Exportar la clase Tarea para que pueda ser utilizada en otros módulos
module.exports = Tarea
