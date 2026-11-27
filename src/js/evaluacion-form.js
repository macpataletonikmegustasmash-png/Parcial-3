import { obtenerEvaluacion, obtenerBeneficiarios, obtenerDonaciones } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

// Primero se llenan los selects, para que en modo editar ya existan las opciones a marcar.
llenarSelect('#ID_beneficiario', await obtenerBeneficiarios(), (beneficiario) => beneficiario.institucionBeneficiario)
llenarSelect('#ID_donacion', await obtenerDonaciones(), (donacion) => `Donación #${donacion.id} · ${donacion.fechaDonacion}`)

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar evaluación'
}

await prepararFormulario({
    obtener: obtenerEvaluacion,
    destino: 'evaluaciones.html',
})
