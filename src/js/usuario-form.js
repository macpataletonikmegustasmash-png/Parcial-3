import { obtenerUsuario, obtenerRoles } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

llenarSelect('#ID_rol', await obtenerRoles(), (rol) => rol.nombreRol)

const editando = leerId() !== null
const contrasena = document.querySelector('#contrasenaUsuario')

if (editando) {
    document.querySelector('#titulo-formulario').textContent = 'Editar usuario'
    contrasena.required = false
    document.querySelector('#ayuda-contrasena').textContent = 'Déjala vacía para conservar la contraseña actual.'
}

await prepararFormulario({
    obtener: obtenerUsuario,
    destino: 'usuarios.html',
})

contrasena.value = ''