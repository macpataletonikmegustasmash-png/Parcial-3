import { obtenerReparacion, obtenerDiagnosticos, obtenerTecnicos } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

llenarSelect('#id_diagnostico', await obtenerDiagnosticos(), (diagnostico) => `#${diagnostico.id} - ${diagnostico.problema_detectado}`)
llenarSelect('#id_tecnico', await obtenerTecnicos(), (tecnico) => `${tecnico.nombre} ${tecnico.apellido}`)

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar reparación'
}

await prepararFormulario({
    obtener: obtenerReparacion,
    destino: 'reparaciones.html',
})
