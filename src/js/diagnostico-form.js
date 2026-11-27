import { obtenerDiagnostico, obtenerEquipos, obtenerTecnicos } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

// Primero se llenan los selects, para que en modo editar ya existan las opciones a marcar.
llenarSelect('#ID_equipo', await obtenerEquipos(), (equipo) => `${equipo.codigoInventarioEquipo} · ${equipo.marcaEquipo} ${equipo.modeloEquipo}`)
llenarSelect('#ID_tecnico', await obtenerTecnicos(), (tecnico) => `Técnico #${tecnico.id} · ${tecnico.especialidadTecnico}`)

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar diagnóstico'
}

await prepararFormulario({
    obtener: obtenerDiagnostico,
    destino: 'diagnosticos.html',
})
