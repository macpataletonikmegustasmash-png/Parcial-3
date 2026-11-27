import { obtenerEvaluacion, obtenerBeneficiario, obtenerDonacion } from './datos.js'
import { mostrarDetalle } from './helpers.js'

async function conNombres(evaluacion) {
    const beneficiario = await obtenerBeneficiario(evaluacion.ID_beneficiario)
    const donacion = await obtenerDonacion(evaluacion.ID_donacion)
    return {
        ...evaluacion,
        beneficiario: beneficiario ? beneficiario.institucionBeneficiario : 'Sin beneficiario',
        donacion: donacion ? `Donación #${donacion.id} · ${donacion.observacionesDonacion}` : 'Sin donación',
    }
}

const evaluacion = await mostrarDetalle({
    obtener: obtenerEvaluacion,
    noExiste: 'No existe esa evaluación.',
    transformar: conNombres,
})

if (evaluacion) {
    document.querySelector('#enlace-editar').href = `evaluacion-form.html?id=${evaluacion.id}`
}
