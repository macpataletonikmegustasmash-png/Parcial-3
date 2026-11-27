import { obtenerAsignacion, obtenerSolicitud, obtenerBeneficiario } from './datos.js'
import { mostrarDetalle } from './helpers.js'

// De la solicitud salen el motivo y, con su ID_beneficiario, el beneficiario.
async function conNombres(asignacion) {
    const solicitud = await obtenerSolicitud(asignacion.ID_solicitud)
    const beneficiario = solicitud ? await obtenerBeneficiario(solicitud.ID_beneficiario) : null
    return {
        ...asignacion,
        solicitud: solicitud ? `Solicitud #${solicitud.id} · ${solicitud.motivoSolicitud}` : 'Sin solicitud',
        beneficiario: beneficiario ? beneficiario.institucionBeneficiario : 'Sin beneficiario',
        fechaEntregaAsignacion: asignacion.fechaEntregaAsignacion ?? 'Sin entregar',
    }
}

const asignacion = await mostrarDetalle({
    obtener: obtenerAsignacion,
    noExiste: 'No existe esa asignación.',
    transformar: conNombres,
})

if (asignacion) {
    document.querySelector('#enlace-editar').href = `asignacion-form.html?id=${asignacion.id}`
}
