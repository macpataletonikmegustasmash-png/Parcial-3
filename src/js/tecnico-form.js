import { obtenerTecnico } from './datos.js'
import { leerId, prepararFormulario } from './helpers.js'

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar técnico'
}

await prepararFormulario({
    obtener: obtenerTecnico,
    destino: 'tecnicos.html',
})
