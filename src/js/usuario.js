import { obtenerUsuario, obtenerRol } from './datos.js'
import { mostrarDetalle } from './helpers.js'

async function conRol(usuario) {
    const rol = await obtenerRol(usuario.ID_rol)
    return {
        ...usuario,
        nombreCompleto: `${usuario.nombreUsuario} ${usuario.apUsuario} ${usuario.amUsuario}`,
        rol: rol ? rol.nombreRol : 'Sin rol',
    }
}

const usuario = await mostrarDetalle({
    obtener: obtenerUsuario,
    noExiste: 'No existe ese usuario.',
    transformar: conRol,
})

if (usuario) {
    document.querySelector('#enlace-editar').href = `usuario-form.html?id=${usuario.id}`
}