import { obtenerSolicitud, obtenerBeneficiario } from './datos.js'
import { mostrarDetalle } from './helpers.js'

async function conBeneficiario(solicitud) {
    const beneficiario = await obtenerBeneficiario(solicitud.ID_beneficiario)
    return { ...solicitud, beneficiario: beneficiario ? beneficiario.institucionBeneficiario : 'Sin beneficiario' }
}

const solicitud = await mostrarDetalle({
    obtener: obtenerSolicitud,
    noExiste: 'No existe esa solicitud.',
    transformar: conBeneficiario,
})

if (solicitud) {
    document.querySelector('#enlace-editar').href = `solicitud-form.html?id=${solicitud.id}`
}
