import { obtenerTecnico } from './datos.js'
import { mostrarDetalle } from './helpers.js'

const tecnico = await mostrarDetalle({
    obtener: obtenerTecnico,
    noExiste: 'No existe ese técnico.',
})


if (tecnico) {
    document.querySelector('#enlace-editar').href = `tecnico-form.html?id=${tecnico.id}`
}
