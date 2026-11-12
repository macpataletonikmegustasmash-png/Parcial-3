import { obtenerComponente } from './datos.js'
import { mostrarDetalle } from './helpers.js'

const componente = await mostrarDetalle({
    obtener: obtenerComponente,
    noExiste: 'No existe ese componente.',
})

if (componente) {
    document.querySelector('#enlace-editar').href = `componente-form.html?id=${componente.id}`
}
