import { obtenerHistoriales, obtenerEquipo } from './datos.js'
import { mostrarLista } from './helpers.js'

// Cada movimiento guarda ID_equipo; se agrega la marca y el modelo del equipo.
async function conEquipo(historial) {
    const equipo = await obtenerEquipo(historial.ID_equipo)
    return { ...historial, equipo: equipo ? `${equipo.marcaEquipo} ${equipo.modeloEquipo}` : 'Sin equipo' }
}

// Solo lista: los movimientos no se capturan a mano y cada equipo muestra los suyos en su detalle.
await mostrarLista({
    obtener: obtenerHistoriales,
    columnas: ['fechaMovimiento', 'equipo', 'tipoMovimiento', 'ubicacionAnterior', 'ubicacionNueva'],
    vacio: 'Todavía no hay movimientos registrados.',
    transformar: conEquipo,
})
