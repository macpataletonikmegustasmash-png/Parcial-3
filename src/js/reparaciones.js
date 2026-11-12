import { obtenerReparaciones, obtenerTecnico } from './datos.js'
import { mostrarLista } from './helpers.js'

async function conTecnico(reparacion) {
    const tecnico = await obtenerTecnico(reparacion.id_tecnico)
    return { ...reparacion, tecnico: tecnico ? `${tecnico.nombre} ${tecnico.apellido}` : 'Sin asignar' }
}

await mostrarLista({
    obtener: obtenerReparaciones,
    columnas: ['descripcion_trabajo', 'tecnico', 'fecha_inicio', 'estado_reparacion'],
    detalle: 'reparacion.html',
    vacio: 'Todavía no hay reparaciones registradas.',
    transformar: conTecnico,
})
