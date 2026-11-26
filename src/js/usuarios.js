import { obtenerUsuarios, obtenerRol } from './datos.js'
import { mostrarLista } from './helpers.js'

async function conRol(usuario) {
    const rol = await obtenerRol(usuario.ID_rol)
    return {
        ...usuario,
        nombreCompleto: `${usuario.nombreUsuario} ${usuario.apUsuario} ${usuario.amUsuario}`,
        rol: rol ? rol.nombreRol : 'Sin rol',
    }
}

await mostrarLista({
    obtener: obtenerUsuarios,
    columnas: ['nombreCompleto', 'correoUsuario', 'rol', 'estadoUsuario'],
    detalle: 'usuario.html',
    vacio: 'Todavía no hay usuarios registrados.',
    transformar: conRol,
})