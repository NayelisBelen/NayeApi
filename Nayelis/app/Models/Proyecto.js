'use strict'

/** Cargar la clase Model de Lucid para definir el modelo */
const Model = use('Model')

/** Crear la clase Proyecto que extiende de Model */
class Proyecto extends Model {
  /** Relación: un proyecto pertenece a un usuario */
  user () {
    return this.belongsTo('App/Models/User')
  }

  /** Relación: un proyecto tiene muchas tareas */
  tareas () {
    return this.hasMany('App/Models/Tarea')
  }

}

/** Exportar la clase Proyecto para que pueda ser utilizada en otros módulos */
module.exports = Proyecto
