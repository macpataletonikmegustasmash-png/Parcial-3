import { obtenerBeneficiarios } from './datos.js'
import { mostrarLista } from './helpers.js'

await mostrarLista({
    obtener: obtenerBeneficiarios,
    columnas: ['institucionBeneficiario', 'tipoBeneficiario', 'necesidadBeneficiario'],
    detalle: 'beneficiario.html',
    vacio: 'Todavía no hay beneficiarios registrados.',
})
