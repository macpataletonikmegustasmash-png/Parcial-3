import { obtenerUsuario, obtenerRoles } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

llenarSelect('#id_rol', await obtenerRoles(), (rol) => rol.nombre_rol)

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar usuario'
    document.querySelector('#contrasena').required = false
    document.querySelector('#ayuda-contrasena').textContent = 'Déjala vacía para conservar la contraseña actual.'
}

await prepararFormulario({
    obtener: obtenerUsuario,
    destino: 'usuarios.html',
})