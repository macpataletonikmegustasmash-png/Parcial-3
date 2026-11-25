import { obtenerReparacion, obtenerDiagnosticos } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

// El técnico ya no se elige aquí: viene del diagnóstico.
// Primero se llena el select, para que en modo editar ya exista la opción a marcar.
llenarSelect('#ID_diagnostico', await obtenerDiagnosticos(), (diagnostico) => `#${diagnostico.id} - ${diagnostico.problemaDiagnostico}`)

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar reparación'
}

await prepararFormulario({
    obtener: obtenerReparacion,
    destino: 'reparaciones.html',
})
