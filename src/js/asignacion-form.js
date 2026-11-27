import { obtenerAsignacion, obtenerSolicitudes, obtenerBeneficiarios } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

// El texto de cada solicitud lleva el nombre de su beneficiario, así que se cargan los dos.
const beneficiarios = await obtenerBeneficiarios()

function textoSolicitud(solicitud) {
    const beneficiario = beneficiarios.find((b) => b.id === solicitud.ID_beneficiario)
    return `Solicitud #${solicitud.id} · ${beneficiario ? beneficiario.institucionBeneficiario : 'Sin beneficiario'}`
}

// Primero se llena el select, para que en modo editar ya exista la opción a marcar.
llenarSelect('#ID_solicitud', await obtenerSolicitudes(), textoSolicitud)

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar asignación'
}

await prepararFormulario({
    obtener: obtenerAsignacion,
    destino: 'asignaciones.html',
})
