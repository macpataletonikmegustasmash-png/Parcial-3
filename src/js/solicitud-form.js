import { obtenerSolicitud, obtenerBeneficiarios } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

// Primero se llena el select, para que en modo editar ya exista la opción a marcar.
llenarSelect('#ID_beneficiario', await obtenerBeneficiarios(), (beneficiario) => beneficiario.institucionBeneficiario)

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar solicitud'
}

await prepararFormulario({
    obtener: obtenerSolicitud,
    destino: 'solicitudes.html',
})
