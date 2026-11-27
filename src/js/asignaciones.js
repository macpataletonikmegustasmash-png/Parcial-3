import { obtenerAsignaciones, obtenerSolicitud, obtenerBeneficiario } from './datos.js'
import { mostrarLista } from './helpers.js'

// La asignación solo guarda ID_solicitud; el beneficiario se obtiene a través de la solicitud.
async function conBeneficiario(asignacion) {
    const solicitud = await obtenerSolicitud(asignacion.ID_solicitud)
    const beneficiario = solicitud ? await obtenerBeneficiario(solicitud.ID_beneficiario) : null
    return { ...asignacion, beneficiario: beneficiario ? beneficiario.institucionBeneficiario : 'Sin beneficiario' }
}

await mostrarLista({
    obtener: obtenerAsignaciones,
    columnas: ['id', 'beneficiario', 'fechaAsignacion', 'fechaEntregaAsignacion', 'estadoAsignacion'],
    detalle: 'asignacion.html',
    vacio: 'Todavía no hay asignaciones registradas.',
    transformar: conBeneficiario,
})
