'use strict'

// Cargar la clase Model de Lucid para definir el modelo de usuario
const Model = use('Model')

// Cargar el módulo Hash para cifrar contraseñas
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * Gancho que se ejecuta antes de guardar un usuario en la base de datos.
     * Cifra la contraseña del usuario si ha sido cambiada.
     * @param {Object} userInstance - La instancia del usuario que se está guardando
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * Relación: un usuario tiene muchos tokens.
   * @returns {Object} - La relación hasMany con el modelo Token
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  /**
   * Relación: un usuario tiene muchos proyectos.
   * @returns {Object} - La relación hasMany con el modelo Proyecto
   */
  proyectos () {
    return this.hasMany('App/Models/Proyecto')
  }
}

// Exportar la clase User para que pueda ser utilizada en otros módulos
module.exports = User
