import { obtenerUsuario, obtenerRol } from './datos.js'
import { mostrarDetalle } from './helpers.js'

async function conRol(usuario) {
    const rol = await obtenerRol(usuario.id_rol)
    return { ...usuario, rol: rol ? rol.nombre_rol : 'Sin rol' }
}

const usuario = await mostrarDetalle({
    obtener: obtenerUsuario,
    noExiste: 'No existe ese usuario.',
    transformar: conRol,
})

if (usuario) {
    document.querySelector('#enlace-editar').href = `usuario-form.html?id=${usuario.id}`
}