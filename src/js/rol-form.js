import { obtenerRol } from './datos.js'
import { leerId, prepararFormulario } from './helpers.js'

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar rol'
}

await prepararFormulario({
    obtener: obtenerRol,
    destino: 'roles.html',
})