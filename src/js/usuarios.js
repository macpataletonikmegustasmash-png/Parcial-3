import { obtenerUsuarios, obtenerRol } from './datos.js'
import { mostrarLista } from './helpers.js'

async function conRol(usuario) {
    const rol = await obtenerRol(usuario.id_rol)
    return { ...usuario, rol: rol ? rol.nombre_rol : 'Sin rol' }
}

await mostrarLista({
    obtener: obtenerUsuarios,
    columnas: ['nombre_usuario', 'correo', 'rol', 'estado'],
    detalle: 'usuario.html',
    vacio: 'Todavía no hay usuarios registrados.',
    transformar: conRol,
})