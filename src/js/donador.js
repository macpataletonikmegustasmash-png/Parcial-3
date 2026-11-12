import { obtenerDonador } from './datos.js'
import { mostrarDetalle } from './helpers.js'

const donador = await mostrarDetalle({
    obtener: obtenerDonador,
    noExiste: 'No existe ese donador.',
})

if (donador) {
    document.querySelector('#enlace-editar').href = `donador-form.html?id=${donador.id}`
}