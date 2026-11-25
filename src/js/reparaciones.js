import { obtenerReparaciones, obtenerDiagnostico, obtenerEquipo } from './datos.js'
import { mostrarLista } from './helpers.js'

async function conEquipo(reparacion) {
    const diagnostico = await obtenerDiagnostico(reparacion.ID_diagnostico)
    const equipo = diagnostico ? await obtenerEquipo(diagnostico.ID_equipo) : null
    return { ...reparacion, equipo: equipo ? `${equipo.marcaEquipo} ${equipo.modeloEquipo}` : 'Sin equipo' }
}

await mostrarLista({
    obtener: obtenerReparaciones,
    columnas: ['descripcionReparacion', 'equipo', 'fechaInicioReparacion', 'estadoReparacion'],
    detalle: 'reparacion.html',
    vacio: 'Todavía no hay reparaciones registradas.',
    transformar: conEquipo,
})
