import { obtenerSolicitudes, obtenerBeneficiario } from './datos.js'
import { mostrarLista } from './helpers.js'

// La solicitud guarda ID_beneficiario; se agrega el nombre de la institución o persona.
async function conBeneficiario(solicitud) {
    const beneficiario = await obtenerBeneficiario(solicitud.ID_beneficiario)
    return { ...solicitud, beneficiario: beneficiario ? beneficiario.institucionBeneficiario : 'Sin beneficiario' }
}

await mostrarLista({
    obtener: obtenerSolicitudes,
    columnas: ['id', 'beneficiario', 'usoDestinadoSolicitud', 'prioridadSolicitud', 'estadoSolicitud'],
    detalle: 'solicitud.html',
    vacio: 'Todavía no hay solicitudes registradas.',
    transformar: conBeneficiario,
})
