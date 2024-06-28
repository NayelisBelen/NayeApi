'use strict'

// Importar el modelo de Proyecto
const Proyecto = use('App/Models/Proyecto');
// Importar el servicio de autorización
const AutorizacionService = use('App/Services/AutorizacionService');

class ProyectoController {
  // Listar todos los proyectos del usuario autenticado
  async index({ auth }) {
    // Obtener usuario autenticado
    const user = await auth.getUser();
    // Devolver proyectos del usuario
    return await user.proyectos().fetch();
  }

  // Crear un proyecto nuevo
  async create({ auth, request }) {
    // Obtener usuario autenticado
    const user = await auth.getUser();
    // Obtener nombre del proyecto de la solicitud
    const { nombre } = request.all();
    // Crear nueva instancia de Proyecto
    const proyecto = new Proyecto();
    // Asignar nombre al proyecto
    proyecto.fill({ nombre });
    // Guardar proyecto asociado al usuario
    await user.proyectos().save(proyecto);
    // Devolver proyecto creado
    return proyecto;
  }

  // Eliminar un proyecto existente
  async destroy({ auth, params }) {
    // Obtener usuario autenticado
    const user = await auth.getUser();
    // Obtener ID del proyecto de los parámetros
    const { id } = params;
    // Buscar proyecto por ID
    const proyecto = await Proyecto.find(id);
    // Verificar permisos para eliminar proyecto
    AutorizacionService.verificarPermiso(proyecto, user);
    // Eliminar proyecto
    await proyecto.delete();
    // Devolver proyecto eliminado
    return proyecto;
  }

  // Actualizar un proyecto existente
  async update({ auth, params, request }) {
    // Obtener usuario autenticado
    const user = await auth.getUser();
    // Obtener ID del proyecto de los parámetros
    const { id } = params;
    // Buscar proyecto por ID
    const proyecto = await Proyecto.find(id);
    // Verificar permisos para actualizar proyecto
    AutorizacionService.verificarPermiso(proyecto, user);
    // Actualizar nombre del proyecto con datos de la solicitud
    proyecto.merge(request.only('nombre'));
    // Guardar cambios en el proyecto
    await proyecto.save();
    // Devolver proyecto actualizado
    return proyecto;
  }
}

module.exports = ProyectoController;
