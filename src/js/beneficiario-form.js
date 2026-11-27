import { obtenerBeneficiario } from './datos.js'
import { leerId, prepararFormulario } from './helpers.js'

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar beneficiario'
}

await prepararFormulario({
    obtener: obtenerBeneficiario,
    destino: 'beneficiarios.html',
})
