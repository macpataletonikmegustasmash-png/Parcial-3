import { obtenerDonador } from './datos.js'
import { leerId, prepararFormulario } from './helpers.js'

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar donador'
}

await prepararFormulario({
    obtener: obtenerDonador,
    destino: 'donadores.html',
})