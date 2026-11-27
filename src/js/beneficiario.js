import { obtenerBeneficiario } from './datos.js'
import { mostrarDetalle } from './helpers.js'

const beneficiario = await mostrarDetalle({
    obtener: obtenerBeneficiario,
    noExiste: 'No existe ese beneficiario.',
})

if (beneficiario) {
    document.querySelector('#enlace-editar').href = `beneficiario-form.html?id=${beneficiario.id}`
}
