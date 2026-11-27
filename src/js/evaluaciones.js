import { obtenerEvaluaciones, obtenerBeneficiario } from './datos.js'
import { mostrarLista } from './helpers.js'

// La evaluación guarda ID_beneficiario e ID_donacion; se agregan sus textos para la tabla.
async function conNombres(evaluacion) {
    const beneficiario = await obtenerBeneficiario(evaluacion.ID_beneficiario)
    return {
        ...evaluacion,
        beneficiario: beneficiario ? beneficiario.institucionBeneficiario : 'Sin beneficiario',
        donacion: `Donación #${evaluacion.ID_donacion}`,
        calificacion: `${evaluacion.calificacionEvaluacion} / 10`,
    }
}

await mostrarLista({
    obtener: obtenerEvaluaciones,
    columnas: ['id', 'beneficiario', 'donacion', 'calificacion', 'estadoFuncionamientoEvaluacion'],
    detalle: 'evaluacion.html',
    vacio: 'Todavía no hay evaluaciones registradas.',
    transformar: conNombres,
})
